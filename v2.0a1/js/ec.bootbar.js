/*-
 * #%L
 * Eureka! Clinical Assets
 * %%
 * Copyright (C) 2017 Emory University
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
(function($){
    "use strict";
    $.extend($, {
        bootbar: {
            info: function(message, options) {
                options = options === undefined ? {} : options;
                options.barType = "info";
                return this.show(message, options);
            },
            warning: function(message, options) {
                options = options === undefined ? {} : options;
                options.barType = "warning";
                return this.show(message, options);
            },
            danger: function(message, options) {
                options = options === undefined ? {} : options;
                options.barType = "danger";
                return this.show(message, options);
            },
            success: function(message, options) {
                options = options === undefined ? {} : options;
                options.barType = "success";
                return this.show(message, options);
            },
            show: function(message, options) {
                var alertTypes = ["info", "warning", "danger", "success"];

                var defaults = {
                        autoDismiss: false,      // Don't automatically dismiss the bar.
                        autoLinkClass: true,     // onDraw callback
                        barType: alertTypes[0],  // info
                        dismissTimeout: 3000,    // 3 Seconds
                        dismissEffect: "slide",  // Slide away: (slide, fade)
                        dismissSpeed: "fast",    // Dismiss speed: (slow, fast)
                        onDraw: null,            // onDraw callback
                        onDismiss: null          // onDismiss callback
                };

                var settings = $.extend({}, defaults, options || {});

                var template = $("<div class=\"alert alert-dismissable bootbar-messages\">" +
                                    "<button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>" +
                                "</div>");

                template.addClass("alert-" + settings.barType);
                template.append(message);

                if (settings.autoLinkClass) {
                    template.find("a").addClass("alert-link");
                }

                function triggerClick() {
                    $(template).find(".close").trigger("click");
                }

                $("body").prepend(template).each(function() {
                    if ($.isFunction(settings.onDraw)) {
                        settings.onDraw.call(this);
                    }
                });

                if (settings.autoDismiss) {
                    setTimeout(triggerClick, settings.dismissTimeout);
                }

                $(template).find(".close").unbind("click");

                $(template.find(".close")).on("click", function() {
                    if (settings.dismissEffect === "slide") {
                        $(template).slideUp(settings.dismissSpeed, function() {
                            $(template).remove();
                            if ($.isFunction(settings.onDismiss)) {
                                settings.onDismiss.call(this);
                            }
                        });
                    } else {
                        $(template).fadeOut(settings.dismissSpeed, function() {
                            $(template).remove();
                            if ($.isFunction(settings.onDismiss)) {
                                settings.onDismiss.call(this);
                            }
                        });
                    }
                });
				return {
					close: function() {
						$(template).find(".close").trigger("click");
					}
				};
            }
        }
    });
})(window.jQuery || window.Zepto || window.$);
