# js-band-final-task

Demo: http://marunyak.github.io/js-band-final-task/#/signin

## Description

It is Book online shop. Which includes next functionality:
* User can signin with username;
* Browse books list;
* Search book by title;
* Filter book by price (dropdown options: 0 < price < 15, 15 < price < 30, price > 30);
* Browse specific book details;
* Add specific book to cart;
* Browse Cart with added books;
* Make a purchase of added books;

## Table of Contents
* [Project structure](#project-structure)
* [Installation](#installation)
* [Available console commands](#other-commands)
* [Technologies](#technologies)
* [Scripts description](#scripts-description)
* [Status](#status)
* [License](#license)

## Project structure
```sh
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── actions/
│   ├── components/
│   │   ├── App.jsx
│   ├── pages/
│   ├── reducers/
│   ├── store/
│   └── index.jsx
├── .eslintrc
├── .gitignore
├── .travis.yml
├── package-lock.json
└── package.json
```
## Installation
1. Clone the reprository:
```sh
$ git clone https://github.com/marunyak/js-band-final-task.git
```
2. Use [npm](https://npmjs.org/) to install node_modules
```sh
$ npm install
```
3. Run project:
```sh
$ npm start
```

## Technologies
 - [React](https://reactjs.org/) - JavaScript library for building user interfaces
 - [Redux](https://redux.js.org/) - a predictable state container for JavaScript apps
 - [Babel](https://babeljs.io/) - toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers
 - [Webpack](https://webpack.js.org/) - tool for bundle scritps
 - [Travis](https://docs.travis-ci.com/user/customizing-the-build/) - tool for CI
 - [Eslint](https://eslint.org/) - tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
 - [Bootstrap](https://bootstrap-4.ru/docs/4.3.1/getting-started/introduction/) - toolkit for developing with HTML, CSS, and JS

## Scripts description

## Status
Project is: _in progress_

## License
[ISC]
