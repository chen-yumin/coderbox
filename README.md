# CoderBox

[![CircleCI Build Status][circleci-coderbox-svg]][circleci-coderbox]

<p align="center">
  <a href="https://coderbox.app">
    <img src="https://coderbox.app/assets/icons/coderbox.svg" width=72 height=72>
  </a>
  <a href="https://coderbox.app"><h3 align="center">CoderBox.app</h3></a>
</p>

## Content

* [Introduction](#introduction)
* [Setup](#setup)
* [Running locally](#running-locally)
* [Building for production](#building-for-production)
* [Testing](#testing)
* [Deploying](#deploying)

## Introduction

[CoderBox][coderbox] is a Progressive Web App (PWA) designed by developers for developers. It contains common dev tools needed for day-to-day coding environment.

This application is built using [Ionic Framework][ionic] (with [Angular][angular]). The backend server application is built with [Express][express], which can be found in the [./server](./server) folder.

## Setup

Before you can run this application, you need to install [Node.js][nodejs].

To install the project’s dependencies, run

    npm install

## Running locally

To run the [Ionic][ionic] app locally where any change in the source code will automatically get compiled and reflected:

    npm start

This will start a local server on port 4200. Open [http://localhost:4200/](http://localhost:4200/) to view your app in the browser.

To run the [Express][express] server app locally, run:

    npm run start:server

This will build the [Ionic][ionic] app into a PWA and start the [Express][express] backend app locally in *development* mode to serve it.

## Building for production

If you want to build this project for production, run:

    npm run build

This will build [Ionic][ionic] application to the [./server/www](./server/www) folder.

To build the [Express][express] server application for production, run:

    npm run build:server

If you'd like to run the application locally in *production* mode after the build succeeds, you can run:

    npm run start:prod

## Testing

To run the tests locally:

    npm test

Continuous Integration (CI) with [CircleCI][circleci] is used to automate the testing workflows. Every code push triggers automatic building and testing. See [.circleci/config.yml](.circleci/config.yml) for detailed configuration.

## Deploying

To deploy the [Node.js][nodejs] server application to [Google App Engine][gae], you can run:

    npm run deploy

Continuous Deployment (CD) with [CircleCI][circleci] is used to automate the deployment workflows. See [.circleci/config.yml](.circleci/config.yml) for detailed configuration.

## Licensing

This project is open source under the MIT License. Please see the file named [LICENSE.md](LICENSE.md) for more.

## Author

* [Chen Yumin][chenyumin]

## Contact

* Website: [https://chenyumin.com][chenyumin]
* Email: [hello@chenyumin.com][email]
* GitHub: [chen-yumin][github]

[coderbox]: https://coderbox.app/
[chenyumin]: https://chenyumin.com/
[email]: mailto:hello@chenyumin.com
[github]: https://github.com/chen-yumin/
[gae]: https://cloud.google.com/appengine
[nodejs]: https://nodejs.org/
[ionic]: https://ionicframework.com/
[angular]: https://angular.io/
[express]: https://expressjs.com/
[circleci]: http://circleci.com/
[circleci-coderbox]: https://circleci.com/gh/chen-yumin/coderbox
[circleci-coderbox-svg]: https://circleci.com/gh/chen-yumin/coderbox.svg?style=svg
