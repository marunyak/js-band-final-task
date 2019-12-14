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
│   │   ├── index.jsx
│   │   └── user.jsx
│   ├── components/
│   │   ├── App.jsx
│   │   └── Header.jsx
│   ├── history/
│   │   └── index.jsx
│   ├── pages/
│   │   ├── CatalogPage
│   │   │   ├── components/
│   │   │   │   └── Navigation.jsx
│   │   │   ├── images/
│   │   │   │   └── shopping-cart.png
│   │   │   └── index.jsx
│   │   ├── NotFoundPage
│   │   │   ├── css/
│   │   │   │   └── main.css
│   │   │   └── index.jsx
│   │   ├── SignInPage
│   │   │   ├── images/
│   │   │   │   └── defaultPhoto.png
│   │   │   └── index.jsx
│   ├── reducers/
│   │   ├── index.jsx
│   │   └── user.jsx
│   ├── routes/
│   │   └── ProtectedRoutes.jsx
│   ├── services/
│   │   ├── index.jsx
│   │   └── user.jsx
│   ├── storage/
│   │   └── index.jsx
│   ├── store/
│   │   └── index.jsx
│   ├── config.jsx
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
* `./public/index.html` - main html file;
* `./public/favicon.ico` - icon for html page;
* `./src/actions/index.jsx` - consist all actions logic;
* `./src/actions/user.jsx` - consist all user actions;
* `./src/componetns/App.jsx` - file for routing;
* `./src/componetns/Header.jsx` - header component;
* `./src/history/index.jsx` - file createBrowseHashHistory;
* `./src/pages/CatalogPage/index.jsx` - catalog component;
* `./src/pages/CatalogPage/components/Navigation.jsx` - Navigation component;
* `./src/pages/CatalogPage/images/shopping-cart.png` - cart image;
* `./src/pages/NotFoundPage/css/main.css` - css for page not found component;
* `./src/pages/NotFoundPage/index.jsx` - page not found component;
* `./src/pages/SignInPage/images/defaultPhoto.png` - image;
* `./src/pages/SignInPage/index.jsx` - signin component;
* `./src/reducers/user.jsx` - consist all user reducers;
* `./src/reducers/index.jsx` - combine all reducers files;
* `./src/roots/ProtectedRoutes.jsx` - component with protected routes;
* `./src/services/index.jsx` - consist all reducers logic;
* `./src/services/user.jsx` - consist user reducers;
* `./src/store/index.js` - localstorage class;
* `./src/store/index.jsx` - file createStore;
* `./src/config.jsx` - file with config;
* `./src/index.jsx` - file which render all page;
* `.eslintrc` - file for lint configuration;
* `.travis.yml` - file for CI configuration;
* `.gitignore` - ignore files when we push project in repo;
* `package-lock.json` - automatically generated for any operations where npm modifies either the node_modules tree, or package.json;
* `package.json` - file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

## Status
Project is: _in progress_

## License
[ISC]
