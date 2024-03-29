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
│   │   ├── book.jsx
│   │   ├── bookList.jsx
│   │   ├── cart.jsx
│   │   ├── filter.jsx
│   │   ├── index.jsx
│   │   └── user.jsx
│   ├── components/
│   │   ├── spinner/
│   │   │   ├── spinner.css
│   │   │   └── spinner.jsx
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   └── Navigation.jsx
│   ├── history/
│   │   └── index.jsx
│   ├── images/
│   │   ├── defaultPhoto.png
│   │   └── shopping-cart.png
│   ├── pages/
│   │   ├── BookPage/
│   │   │   ├── components/
│   │   │   │   ├── BookCounter.jsx
│   │   │   │   └── BookContent.jsx
│   │   │   └── index.jsx
│   │   ├── CartPage/
│   │   │   ├── components/
│   │   │   │   ├── CartEmpty.jsx
│   │   │   │   ├── CartItem.jsx
│   │   │   │   └── CartList.jsx
│   │   │   └── index.jsx
│   │   ├── CatalogPage/
│   │   │   ├── components/
│   │   │   │   ├── Filter.jsx
│   │   │   │   └── BookItem.jsx
│   │   │   └── index.jsx
│   │   ├── NotFoundPage/
│   │   │   ├── css/
│   │   │   │   └── main.css
│   │   │   └── index.jsx
│   │   ├── SignInPage/
│   │   │   └── index.jsx
│   ├── reducers/
│   │   ├── book.jsx
│   │   ├── bookList.jsx
│   │   ├── cart.jsx
│   │   ├── filter.jsx
│   │   ├── index.jsx
│   │   └── user.jsx
│   ├── routes/
│   │   └── ProtectedRoutes.jsx
│   ├── services/
│   │   ├── book-service.jsx
│   │   ├── books-service.jsx
│   │   ├── index.jsx
│   │   ├── purchase-service.jsx
│   │   └── user-service.jsx
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

## Available console commands
For build project:
```sh
$ npm run build
```
For lint project:
```sh
$ npm run lint
```
For fix errors which lint found in project:
```sh
$ npm run fix
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
* `./src/actions/book.jsx` - consist book actions;
* `./src/actions/bookList.jsx` - consist all bookList actions;
* `./src/actions/cart.jsx` - consist cart actions;
* `./src/actions/filter.jsx` - consist filter action;
* `./src/actions/index.jsx` - consist all actions;
* `./src/actions/user.jsx` - consist all user actions;
* `./src/components/spinner/spinner.jsx` - spinner component;
* `./src/components/spinner/spinner.css` - css for spinner;
* `./src/components/App.jsx` - file for routing;
* `./src/components/Header.jsx` - header component;
* `./src/components/Main.jsx` - main component;
* `./src/components/Navigation.jsx` - navigation component;
* `./src/history/index.jsx` - file createBrowseHashHistory;
* `./src/images/shopping-cart.png` - cart image;
* `./src/images/defaultPhoto.png` - image;
* `./src/pages/BookPage/index.jsx` - book component;
* `./src/pages/BookPage/components/BookContent.jsx` - BookContent component;
* `./src/pages/BookPage/components/BookCounter.jsx` - BookCounter component;
* `./src/pages/CartPage/index.jsx` - cart component;
* `./src/pages/CartPage/components/CartEmpty.jsx` - CartEmpty component;
* `./src/pages/CartPage/components/CartList.jsx` - CartList component;
* `./src/pages/CartPage/components/CartItem.jsx` - CartItem component;
* `./src/pages/CatalogPage/index.jsx` - catalog component;
* `./src/pages/CatalogPage/components/BookItem.jsx` - BookItem component;
* `./src/pages/CatalogPage/components/Filter.jsx` - Filter component;
* `./src/pages/NotFoundPage/css/main.css` - css for page not found component;
* `./src/pages/NotFoundPage/index.jsx` - page not found component;
* `./src/pages/SignInPage/index.jsx` - signin component;
* `./src/reducers/book.jsx` - consist book reducer;
* `./src/reducers/bookList.jsx` - consist bookList reducer;
* `./src/reducers/cart.jsx` - consist cart reducer;
* `./src/reducers/filter.jsx` - consist filter reducer;
* `./src/reducers/user.jsx` - consist all user reducers;
* `./src/reducers/index.jsx` - combine all reducers files;
* `./src/routs/ProtectedRoutes.jsx` - component with protected routes;
* `./src/services/book-service.jsx` -  consist service for book;
* `./src/services/books-service.jsx` -  consist service for bookList;
* `./src/services/index.jsx` - consist all services;
* `./src/services/purchase-service.jsx` - consist purchase service;
* `./src/services/user-service.jsx` - consist user service;
* `./src/storage/index.js` - localstorage class;
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
