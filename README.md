# Coderbox

[![CircleCI Build Status][circleci-coderbox-svg]][circleci-coderbox]

<p align="center">
  <a href="https://coderbox.app">
    <img src="https://coderbox.app/assets/icons/coderbox.svg" width=72 height=72>
  </a>
  <a href="https://coderbox.app"><h3 align="center">CoderBox</h3></a>
</p>

## Content

* [Introduction](#introduction)
* [Setup](#setup)
* [Running locally](#running-locally)
* [Building for production](#building-for-production)
* [Testing](#testing)
* [Deploying](#deploying)

## Introduction

[CoderBox][coderbox] is a set of common dev tools made by developers for developers. It is free and open source. This application is built using [Angular][angular] (with [Angular Material][angular-material] UI framework).

## Setup

Before you can run this application, you need to install [Node.js][nodejs].

To install the project’s dependencies, run

    npm install

## Running locally

To run this application locally:

    npm run serve:local

This will start a local dev server on port 4200. Open [http://localhost:4200/](http://localhost:4200/) to view this app in the browser. The app will automatically reload if you change any of the source files.

## Building for production

If you want to build this project for production, run:

    npm run build:ssr

This app uses [Angular Universal][angular-universal] to build the app for Server-Side Rendering (SSR), and it renders the app on the [Express][express] server.

To run this app with Angular Universal SSR on your local system, use the following command.

    npm run serve:ssr

Open a browser and navigate to [http://localhost:4000/](http://localhost:4000/) to view the app.

## Testing

Run `npm run test` to execute the unit tests via [Karma][karma].

Run `npm run e2e` to execute the end-to-end tests via [Protractor][protractor].

## Licensing

This project is open source under MIT License. Please see the file named [LICENSE.md](LICENSE.md) for more.

## Author

* [Chen Yumin][chenyumin]

[coderbox]: https://coderbox.app/
[chenyumin]: https://chenyumin.com/
[nodejs]: https://nodejs.org/
[angular]: https://angular.io/
[angular-material]: https://material.angular.io/
[angular-universal]: https://angular.io/guide/universal
[karma]: https://karma-runner.github.io/
[protractor]: http://www.protractortest.org/
[express]: https://expressjs.com/
[circleci]: http://circleci.com/
[circleci-coderbox]: https://circleci.com/gh/chen-yumin/coderbox
[circleci-coderbox-svg]: https://circleci.com/gh/chen-yumin/coderbox.svg?style=svg
