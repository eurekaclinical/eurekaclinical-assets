# Eureka! Clinical Web Client Assets
Atlanta Clinical and Translational Science Institute (ACTSI), Emory University, Atlanta GA

## What does it do?
It provides shared functionality for Eureka! Clinical web clients, hosted on https://assets.eurekaclinical.org.

## Version history
### Version 1.1
Added a js folder with shared Javascript files.

### Version 1.0.1
Added a robots.txt file.

### Version 1.0
Initial release.

## File overview

### CSS
The project includes CSS files that provide shared styling for Eureka! Clinical web clients, including:
* `eurekaclinical.css`: specifies basic styling.

### Javascript
The project includes Javascript files implementing shared functionality for Eureka! Clinical web clients, including:
* `ec.idletimeout.js`: Logs the user out of the web client after a time period roughly equal to the tomcat session timeout.
* `ec.bootbar.js`: Provides a hideable notification bar along the top of the screen for messages to users. Depends on Twitter Bootstrap.

Each file is also provided as a minimized file, e.g., `ec.idletimeout.min.js`.

### Images
The project includes logos at various sizes for use in Eureka! Clinical web clients, including for Eureka! Clinical and i2b2.

The project provides three copies of each logo at the following standard sizes:
* Small (sm): 48x48 pixels
* Medium (md): 128x128 pixels
* Large (lg): 256x256 pixels

## Deployment
The [provisioning project](https://github.com/arpost/provisioning) deploys the assets to https://assets.eurekaclinical.org.

## Using in a project
Multiple releases are hosted on the assets website at any given time, each in a directory named with the version. Use the most recent version when possible.
