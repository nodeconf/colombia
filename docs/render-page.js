(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.string.starts-with"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/es6.string.starts-with", "core-js/modules/web.dom.iterable", "crypto", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.string.starts-with"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/es6.string.starts-with"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_starts_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "gatsby-starter-default",
    "short_name": "starter",
    "start_url": "/",
    "background_color": "#663399",
    "theme_color": "#663399",
    "display": "minimal-ui",
    "icon": "src/assets/images/logo.png"
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"},{"componentChunkName":"component---src-pages-organizers-js","jsonName":"organizers-517","path":"/organizers/"},{"componentChunkName":"component---src-pages-schedule-js","jsonName":"schedule-f57","path":"/schedule/"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","offline-plugin-app-shell-fallback-a30":"604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8","organizers-517":"409/path---organizers-517-aef-0SUcWyAf8ecbYDsMhQkEfPzV8","schedule-f57":"638/path---schedule-f-57-338-0SUcWyAf8ecbYDsMhQkEfPzV8","sq--src-components-images-country-ar-js":2188481302,"sq--src-components-images-country-br-js":2281034972,"sq--src-components-images-country-co-js":960045303,"sq--src-components-images-country-fr-js":3597247544,"sq--src-components-images-country-ge-js":2313804021,"sq--src-components-images-country-in-js":3186016781,"sq--src-components-images-country-pr-js":3985006560,"sq--src-components-images-country-us-js":1682867201,"sq--src-components-images-country-ve-js":4206163770,"sq--src-components-images-image-10-hotels-js":82316795,"sq--src-components-images-image-fb-js":4010521784,"sq--src-components-images-image-instagram-js":2084890253,"sq--src-components-images-image-logo-js":3927946743,"sq--src-components-images-image-rutan-grey-js":1208644591,"sq--src-components-images-image-rutan-js":3418496277,"sq--src-components-images-image-twitter-js":3412628328,"sq--src-components-images-image-venue-image-js":3188359146,"sq--src-components-images-speaker-andrea-griffiths-js":2502890234,"sq--src-components-images-speaker-bnb-js":3780444341,"sq--src-components-images-speaker-cropped-anna-js":1605624759,"sq--src-components-images-speaker-diego-paez-js":3861628944,"sq--src-components-images-speaker-erick-wendel-js":123693547,"sq--src-components-images-speaker-james-js":2149966145,"sq--src-components-images-speaker-kat-js":3249945969,"sq--src-components-images-speaker-kevin-js":667525985,"sq--src-components-images-speaker-matt-js":1583801880,"sq--src-components-images-speaker-miguel-bolivar-js":2723169691,"sq--src-components-images-speaker-rauch-js":3339401997,"sq--src-components-images-speaker-ujjwal-js":4282232400,"sq--src-components-images-speaker-vladimir-js":1755578640,"sq--src-components-images-sponsor-example-changelog-js":4017003676,"sq--src-components-images-sponsor-example-nodebr-js":1550470998,"sq--src-components-images-sponsor-example-nodeconfarg-js":4163863290,"sq--src-components-images-sponsor-example-nodesource-js":1145165362,"sq--src-components-images-sponsor-example-rutan-grey-js":1886207130,"sq--src-components-images-sponsor-get-on-board-js":1705347300,"sq--src-components-images-sponsor-github-js":174457870,"sq--src-components-images-sponsor-microsoft-js":2267898602,"sq--src-components-images-sponsor-nearform-js":1578704802,"sq--src-components-images-team-adrian-js":2680738788,"sq--src-components-images-team-alejandro-js":2690306979,"sq--src-components-images-team-diego-js":2961514891,"sq--src-components-images-team-hamilton-js":4121633037,"sq--src-components-images-team-jhonatan-js":3231487550,"sq--src-components-images-team-julian-js":3622736579,"sq--src-components-images-team-maleja-js":1095674015,"sq--src-components-images-team-nicole-js":275546198,"sq--src-components-images-team-sebastian-js":504763219,"sq--src-components-images-team-stiwar-js":2790026016,"sq--src-components-layout-js":755544856,"sq--src-components-seo-js":1025518380}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-organizers-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/organizers.js */ "./src/pages/organizers.js"))),
  "component---src-pages-schedule-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/schedule.js */ "./src/pages/schedule.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

// Handle legacy names for image queries.
var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);

  if (convertedProps.resolutions) {
    convertedProps.fixed = convertedProps.resolutions;
    delete convertedProps.resolutions;
  }

  if (convertedProps.sizes) {
    convertedProps.fluid = convertedProps.sizes;
    delete convertedProps.sizes;
  }

  return convertedProps;
}; // Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.


var imageCache = Object.create({});

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;
  return imageCache[src] || false;
};

var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;
  imageCache[src] = true;
};

var io;
var listeners = new WeakMap();

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (listeners.has(entry.target)) {
          var cb = listeners.get(entry.target); // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getIO();

  if (observer) {
    observer.observe(el);
    listeners.set(el, cb);
  }

  return function () {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSetWebp = props.srcSetWebp ? "<source type='image/webp' srcset=\"" + props.srcSetWebp + "\" " + sizes + "/>" : "";
  var srcSet = props.srcSet ? "srcset=\"" + props.srcSet + "\" " : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var crossOrigin = props.crossOrigin ? "crossorigin=\"" + props.crossOrigin + "\" " : "";
  return "<picture>" + srcSetWebp + "<img " + width + height + sizes + srcSet + src + alt + title + crossOrigin + "style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
};

var Img = _react.default.forwardRef(function (props, ref) {
  var sizes = props.sizes,
      srcSet = props.srcSet,
      src = props.src,
      style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["sizes", "srcSet", "src", "style", "onLoad", "onError"]);
  return _react.default.createElement("img", (0, _extends2.default)({
    sizes: sizes,
    srcSet: srcSet,
    src: src
  }, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // default settings for browser without Intersection Observer available

    var isVisible = true;
    var imgLoaded = false;
    var imgCached = false;
    var IOSupported = false;
    var fadeIn = props.fadeIn; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    var seenBefore = inImageCache(props); // browser with Intersection Observer available

    if (!seenBefore && typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      IOSupported = true;
    } // Never render image during SSR


    if (typeof window === "undefined") {
      isVisible = false;
    } // Force render for critical images


    if (props.critical) {
      isVisible = true;
      IOSupported = false;
    }

    var hasNoScript = !(props.critical && !props.fadeIn);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      imgCached: imgCached,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore
    };
    _this.imageRef = _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }

    if (this.props.critical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.state.IOSupported && ref) {
      this.cleanUpListeners = listenToIntersections(ref, function () {
        var imageInCache = inImageCache(_this2.props);

        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: imageInCache
          });
        } // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.


        _this2.setState({
          isVisible: true
        }, function () {
          return _this2.setState({
            imgLoaded: imageInCache,
            imgCached: _this2.imageRef.current.currentSrc.length > 0
          });
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        Tag = _convertProps.Tag,
        itemProp = _convertProps.itemProp;

    var shouldReveal = this.state.imgLoaded || this.state.fadeIn === false;
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached;
    var durationFadeIn = "0.5s";
    var imageStyle = (0, _extends2.default)({
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? "opacity " + durationFadeIn : "none"
    }, imgStyle);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var delayHideStyle = {
      transitionDelay: durationFadeIn
    };
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1
    }, shouldFadeIn && delayHideStyle, imgStyle, placeholderStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName
    };

    if (fluid) {
      var image = fluid;
      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden"
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, _react.default.createElement(Tag, {
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          right: 0,
          left: 0
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.base64
      }, placeholderImageProps)), image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.tracedSVG
      }, placeholderImageProps)), this.state.isVisible && _react.default.createElement("picture", null, image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: image.srcSetWebp,
        sizes: image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title
          }, image))
        }
      }));
    }

    if (fixed) {
      var _image = fixed;
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(_image.srcSet)
      }, bgColor && _react.default.createElement(Tag, {
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          width: _image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          height: _image.height
        }, shouldFadeIn && delayHideStyle)
      }), _image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.base64
      }, placeholderImageProps)), _image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.tracedSVG
      }, placeholderImageProps)), this.state.isVisible && _react.default.createElement("picture", null, _image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: _image.srcSetWebp,
        sizes: _image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: _image.width,
        height: _image.height,
        sizes: _image.sizes,
        src: _image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: _image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title
          }, _image))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  critical: false,
  fadeIn: true,
  alt: "",
  Tag: "div"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: fixedObject,
  fluid: fluidObject,
  fadeIn: _propTypes.default.bool,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string,
  itemProp: _propTypes.default.string
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ "crypto"));

// default icons for generating icons
exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return _fs.default.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
};

exports.createContentDigest = function createContentDigest(content) {
  var digest = _crypto.default.createHash("sha1").update(content).digest("hex");

  return digest;
};
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */


exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var iconDigest = null;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var icons = pluginOptions.icons || _common.defaultIcons;
  var legacy = typeof pluginOptions.legacy !== "undefined" ? pluginOptions.legacy : true;
  var cacheBusting = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query"; // If icons were generated, also add a favicon link.

  if (pluginOptions.icon) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (cacheBusting !== "none") {
      iconDigest = (0, _common.createContentDigest)(_fs.default.readFileSync(pluginOptions.icon));
    }

    var insertFaviconLinkTag = typeof pluginOptions.include_favicon !== "undefined" ? pluginOptions.include_favicon : true;

    if (favicon && insertFaviconLinkTag) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "shortcut icon",
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(favicon, iconDigest, cacheBusting))
      }));
    }
  } // Add manifest link tag.


  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest"),
    crossOrigin: pluginOptions.crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = typeof pluginOptions.theme_color_in_head !== "undefined" ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(icon.src, iconDigest, cacheBusting))
      });
    });
    headComponents = headComponents.concat(iconLinkTags);
  }

  setHeadComponents(headComponents);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_from":"gatsby@^2.0.76","_id":"gatsby@2.3.14","_inBundle":false,"_integrity":"sha512-5ELb1SpYYNt+5/38NwyaFrOSPtVwEjhxIKsaeglrD1jDhi8mycXezBrf+IFNE/I0r0K7BtER36W1oB+FH3fQ2g==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.4.3","bluebird":"3.5.4","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.5","cross-spawn":"5.1.0","decamelize":"1.2.0","envinfo":"5.12.1","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.5","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.1.15","hosted-git-info":"2.7.1","is-stream":"1.1.0","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.0.0","path-exists":"3.0.0","path-key":"2.0.1","pretty-error":"2.1.1","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","semver":"5.7.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"range","registry":true,"raw":"gatsby@^2.0.76","name":"gatsby","escapedName":"gatsby","rawSpec":"^2.0.76","saveSpec":null,"fetchSpec":"^2.0.76"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.3.14.tgz","_shasum":"38df02cbb33407cf7cb48bbf5d53b25dd7aeb8cc","_spec":"gatsby@^2.0.76","_where":"/Users/julianduque/Personal/NodeConf/colombia","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.5","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.5","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"deprecated":false,"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"169c9640938864414189bfb744694678bf973a89","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.3.14","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-swipeable/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-swipeable/es/index.js ***!
  \**************************************************/
/*! exports provided: LEFT, RIGHT, UP, DOWN, useSwipeable, Swipeable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSwipeable", function() { return useSwipeable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swipeable", function() { return Swipeable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var defaultProps = {
  preventDefaultTouchmoveEvent: false,
  delta: 10,
  rotationAngle: 0,
  trackMouse: false,
  trackTouch: true
};
var initialState = {
  xy: [0, 0],
  swiping: false,
  lastEventData: undefined,
  start: undefined
};
var LEFT = 'Left';
var RIGHT = 'Right';
var UP = 'Up';
var DOWN = 'Down';
var touchStart = 'touchstart';
var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';

function getDirection(absX, absY, deltaX, deltaY) {
  if (absX > absY) {
    if (deltaX > 0) {
      return LEFT;
    }

    return RIGHT;
  } else if (deltaY > 0) {
    return UP;
  }

  return DOWN;
}

function rotateXYByAngle(pos, angle) {
  if (angle === 0) return pos;
  var angleInRadians = Math.PI / 180 * angle;
  var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
  return [x, y];
}

function getHandlers(set, props) {
  var onStart = function onStart(event) {
    // if more than a single touch don't track, for now...
    if (event.touches && event.touches.length > 1) return;
    set(function (state) {
      // setup mouse listeners on document to track swipe since swipe can leave container
      if (state.props.trackMouse) {
        document.addEventListener(mouseMove, onMove);
        document.addEventListener(mouseUp, onUp);
      }

      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var xy = rotateXYByAngle([clientX, clientY], state.props.rotationAngle);
      return _extends({}, state, initialState, {
        xy: xy,
        start: event.timeStamp || 0
      });
    });
  };

  var onMove = function onMove(event) {
    set(function (state) {
      if (!state.xy[0] || !state.xy[1] || event.touches && event.touches.length > 1) {
        return state;
      }

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], state.props.rotationAngle),
          x = _rotateXYByAngle[0],
          y = _rotateXYByAngle[1];

      var deltaX = state.xy[0] - x;
      var deltaY = state.xy[1] - y;
      var absX = Math.abs(deltaX);
      var absY = Math.abs(deltaY);
      var time = (event.timeStamp || 0) - state.start;
      var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1); // if swipe is under delta and we have not started to track a swipe: skip update

      if (absX < props.delta && absY < props.delta && !state.swiping) return state;
      var dir = getDirection(absX, absY, deltaX, deltaY);
      var eventData = {
        event: event,
        absX: absX,
        absY: absY,
        deltaX: deltaX,
        deltaY: deltaY,
        velocity: velocity,
        dir: dir
      };
      state.props.onSwiping && state.props.onSwiping(eventData); // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
      // so we can call preventDefault if needed

      var cancelablePageSwipe = false;

      if (state.props.onSwiping || state.props.onSwiped || state.props["onSwiped" + dir]) {
        cancelablePageSwipe = true;
      }

      if (cancelablePageSwipe && state.props.preventDefaultTouchmoveEvent && state.props.trackTouch) event.preventDefault();
      return _extends({}, state, {
        lastEventData: eventData,
        swiping: true
      });
    });
  };

  var onEnd = function onEnd(event) {
    set(function (state) {
      if (state.swiping) {
        var eventData = _extends({}, state.lastEventData, {
          event: event
        });

        state.props.onSwiped && state.props.onSwiped(eventData);
        state.props["onSwiped" + eventData.dir] && state.props["onSwiped" + eventData.dir](eventData);
      }

      return _extends({}, state, initialState);
    });
  };

  var cleanUpMouse = function cleanUpMouse() {
    // safe to just call removeEventListener
    document.removeEventListener(mouseMove, onMove);
    document.removeEventListener(mouseUp, onUp);
  };

  var onUp = function onUp(e) {
    cleanUpMouse();
    onEnd(e);
  };

  var attachTouch = function attachTouch(el) {
    if (el && el.addEventListener) {
      // attach touch event listeners and handlers
      var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
      tls.forEach(function (_ref3) {
        var e = _ref3[0],
            h = _ref3[1];
        return el.addEventListener(e, h);
      }); // return properly scoped cleanup method for removing listeners

      return function () {
        return tls.forEach(function (_ref4) {
          var e = _ref4[0],
              h = _ref4[1];
          return el.removeEventListener(e, h);
        });
      };
    }
  };

  var onRef = function onRef(el) {
    // "inline" ref functions are called twice on render, once with null then again with DOM element
    // ignore null here
    if (el === null) return;
    set(function (state) {
      // if the same DOM el as previous just return state
      if (state.el === el) return state;
      var addState = {}; // if new DOM el clean up old DOM and reset cleanUpTouch

      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = null;
      } // only attach if we want to track touch


      if (state.props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el);
      } // store event attached DOM el for comparison, clean up, and re-attachment


      return _extends({}, state, {
        el: el
      }, addState);
    });
  }; // update state, props, and handlers


  set(function (state) {
    var addState = {}; // clean up touch handlers if no longer tracking touches

    if (!props.trackTouch && state.cleanUpTouch) {
      state.cleanUpTouch();
      addState.cleanUpTouch = null;
    } else if (props.trackTouch && !state.cleanUpTouch) {
      // attach/re-attach touch handlers
      if (state.el) {
        addState.cleanUpTouch = attachTouch(state.el);
      }
    }

    return _extends({}, state, {
      props: props
    }, addState);
  }); // set ref callback to attach touch event listeners

  var output = {
    ref: onRef // if track mouse attach mouse down listener

  };

  if (props.trackMouse) {
    output.onMouseDown = onStart;
  }

  return output;
}

function useSwipeable(props) {
  var transientState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(_extends({}, initialState, {
    type: 'hook'
  }));

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    return function (currentProps) {
      return getHandlers(function (cb) {
        return transientState.current = cb(transientState.current);
      }, _extends({}, defaultProps, currentProps));
    };
  }),
      spread = _React$useState[0];

  return spread(props);
}
var Swipeable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Swipeable, _React$PureComponent);

  function Swipeable(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this._state = _extends({}, initialState, {
      type: 'class'
    });

    _this._set = function (cb) {
      return _this._state = cb(_this._state);
    };

    return _this;
  }

  var _proto = Swipeable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        _this$props$nodeName = _this$props.nodeName,
        nodeName = _this$props$nodeName === void 0 ? 'div' : _this$props$nodeName,
        innerRef = _this$props.innerRef,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["className", "style", "nodeName", "innerRef", "children"]);

    var handlers = getHandlers(this._set, rest);
    var ref = innerRef ? function (el) {
      return innerRef(el), handlers.ref(el);
    } : handlers.ref;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeName, _extends({}, handlers, {
      className: className,
      style: style,
      ref: ref
    }), children);
  };

  return Swipeable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Swipeable.propTypes = {
  onSwiped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  delta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  preventDefaultTouchmoveEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  nodeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  trackMouse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  trackTouch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  rotationAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Swipeable.defaultProps = defaultProps;




/***/ }),

/***/ "./public/static/d/1025518380.json":
/*!*****************************************!*\
  !*** ./public/static/d/1025518380.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"NodeConf Colombia 2019 | June 21st and 22nd, 2019 - Medellín","description":"NodeConf Colombia 2019 is the first international event focused on the entire Node.js ecosystem.\n    It’s a non-profit event, where our attendees will be sharing in an environment of inclusion and respect, having access to relevant information through talks, workshops, and great experiences with the Colombian Node community.","author":"@NodeConfCo"}}}};

/***/ }),

/***/ "./public/static/d/1095674015.json":
/*!*****************************************!*\
  !*** ./public/static/d/1095674015.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUCAwYE/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGpNzlZeuaWiB5wuiDf/8QAGxAAAgMBAQEAAAAAAAAAAAAAAgMBBBI0ETH/2gAIAQEAAQUCsFhVYphsfLjJ2GxJB7Te6mnPlTl//8QAFREBAQAAAAAAAAAAAAAAAAAAIEH/2gAIAQMBAT8Bg//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAEDBAMAAAAAAAAAAAAAAAABAhAREjFBUVKB/9oACAEBAAY/AnKmaFOyRZoubrA13J4kMP/EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExEFFhcaHB/9oACAEBAAE/IV0ZhLlbEvzxdJsLmbGhlOxa40MAgvZPV+z/2gAMAwEAAgADAAAAEPQPwP/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EAgn/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAECAQE/EF2M/8QAIBABAAICAgEFAAAAAAAAAAAAAQARITFRcZFBgaGx8P/aAAgBAQABPxB5ayXC4v5l4KCyOFN47SKzBVtmYbu9+JTYkJxvxvuI4A3g0MrN0we6QbGsmD96w0Jz+0//2Q==","aspectRatio":1,"src":"/static/59bc45a27ae9d2910761a12e134bd533/eadbd/maleja.jpg","srcSet":"/static/59bc45a27ae9d2910761a12e134bd533/f01f2/maleja.jpg 75w,\n/static/59bc45a27ae9d2910761a12e134bd533/1986a/maleja.jpg 150w,\n/static/59bc45a27ae9d2910761a12e134bd533/eadbd/maleja.jpg 300w,\n/static/59bc45a27ae9d2910761a12e134bd533/0c55b/maleja.jpg 399w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1145165362.json":
/*!*****************************************!*\
  !*** ./public/static/d/1145165362.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQoz5WSS2vCQBSFYwVT8I1ZSJbiwpVWCqK19YExKnEsKMVMsqy4cdv/j+fKGZESXwMfdyb3zpk5uWNZCWMZahOzwAMD8Mn5VOnIPuV1ZN0dIhZEsZkPwetFriiiZq0eFWSsgAn4Bm+gCXzQBi5rUs8IOrSqQA/UwYrWq08JBvpseWQsKx2maXly07IIJJC6aIrY7oB3MBZRc7ukvacRbMN7ty4I/3/LleIww6IyKIEcG2Izis0Mb+sorV8QxX6eB0nO5boiQgfwBRa0tgZ98As+5N2BGeiyOT4P/wMx62v8vhTBLdhRUIR/wBzs2eUW5x7zG26O+X9FsMEXoI78tI7UyKLlDAAAAABJRU5ErkJggg==","aspectRatio":2.006172839506173,"src":"/static/b6eda60642311c5ed92ce94fa18f2524/fbe2f/example_nodesource.png","srcSet":"/static/b6eda60642311c5ed92ce94fa18f2524/e1fed/example_nodesource.png 75w,\n/static/b6eda60642311c5ed92ce94fa18f2524/08283/example_nodesource.png 150w,\n/static/b6eda60642311c5ed92ce94fa18f2524/fbe2f/example_nodesource.png 300w,\n/static/b6eda60642311c5ed92ce94fa18f2524/582b7/example_nodesource.png 325w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/123693547.json":
/*!****************************************!*\
  !*** ./public/static/d/123693547.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQIE/9oADAMBAAIQAxAAAAHTr5M7nQUwowNM8DX/xAAZEAADAQEBAAAAAAAAAAAAAAAAAhEDASP/2gAIAQEAAQUCpzauzZ30FRWZ8EpSn//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBL/2gAIAQMBAT8BCZv/xAAaEQABBQEAAAAAAAAAAAAAAAABABARIUFR/9oACAECAQE/AbGKTx//xAAgEAACAQEJAAAAAAAAAAAAAAAAASECERIgIjEyUYGR/9oACAEBAAY/AoGm0uDevSarexX4jUyVxg//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhQVGBsf/aAAgBAQABPyEGhKwTpcZ6YbuSB2UGQdzRvBzUWpeXn//aAAwDAQACAAMAAAAQMy99/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREFH/2gAIAQMBAT8QRHWT0ef/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAECAQE/EEhFyGm//8QAGxABAQADAQEBAAAAAAAAAAAAAREAITFhofD/2gAIAQEAAT8QBxOLGyd0N3Cbsm4dq4AMZsUDiKKzC1+3m9BSkF4usbjE+TPf5n//2Q==","aspectRatio":1,"src":"/static/f5278405a8c2048b325d2b754699d327/eadbd/speaker_erick-wendel.jpg","srcSet":"/static/f5278405a8c2048b325d2b754699d327/f01f2/speaker_erick-wendel.jpg 75w,\n/static/f5278405a8c2048b325d2b754699d327/1986a/speaker_erick-wendel.jpg 150w,\n/static/f5278405a8c2048b325d2b754699d327/eadbd/speaker_erick-wendel.jpg 300w,\n/static/f5278405a8c2048b325d2b754699d327/f7c4a/speaker_erick-wendel.jpg 450w,\n/static/f5278405a8c2048b325d2b754699d327/6d7df/speaker_erick-wendel.jpg 600w,\n/static/f5278405a8c2048b325d2b754699d327/2e726/speaker_erick-wendel.jpg 810w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1550470998.json":
/*!*****************************************!*\
  !*** ./public/static/d/1550470998.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAe1FUTuopvmbahf/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIRIRASMUL/2gAIAQEAAQUCLroIGV61MM4RKF4//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgIDAAAAAAAAAAAAAAAAABAhgQFBUf/aAAgBAQAGPwLhGVuinK//xAAeEAACAgEFAQAAAAAAAAAAAAABEQAxIRBBUXGRYf/aAAgBAQABPyGg053hPSvOQYpwRCPY/W06VUN5YRTxAW9g5uSitP/aAAwDAQACAAMAAAAQQPc8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAExEBH/2gAIAQMBAT8Q6xQdz//EABgRAQADAQAAAAAAAAAAAAAAAAEAECER/9oACAECAQE/EOsNIm1//8QAHhABAQACAgIDAAAAAAAAAAAAAREAITFBUXEQYbH/2gAIAQEAAT8QutYppVJYdc85KXF7APL495WUoiW7xFTYrpF0/MfKgKHZ17mMRN26dQw8jZwNJ6cqkZB4ftnPx//Z","aspectRatio":1,"src":"/static/eab7ffdc76c6aa295cbea30e501b6c06/eadbd/community-partner-nodebr.jpg","srcSet":"/static/eab7ffdc76c6aa295cbea30e501b6c06/f01f2/community-partner-nodebr.jpg 75w,\n/static/eab7ffdc76c6aa295cbea30e501b6c06/1986a/community-partner-nodebr.jpg 150w,\n/static/eab7ffdc76c6aa295cbea30e501b6c06/eadbd/community-partner-nodebr.jpg 300w,\n/static/eab7ffdc76c6aa295cbea30e501b6c06/7ef6a/community-partner-nodebr.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1578704802.json":
/*!*****************************************!*\
  !*** ./public/static/d/1578704802.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcRAAAXEQHKJvM/AAAA40lEQVQoz62RoQ7CMBRFu00sISELCruZGTIMiCEgCwEHDoImrHwQBgcBgcIi+AIMf9F+CGdru+Chycnte21vX/uEYCRSi6RUoM1cat/i1XmTE3GpA2LfxQ3sqQbrxuwfw5kKW2EPxpBDCEMYxFJ17Xqrrk6qNfO5qUqH5KK4VG3nEztTFnKCFbcs2RihRw694UX+jF7hAU9MD+iNMxf0BHco7MW+c04JJmwu0A5k5Ij1DhawZW2D9tEM3cMURjCD1Bp69sn2U3/4z6YXbtJo3VXl2S4HXx03XTcEPNnFvqus8vgApviRQDSpGt8AAAAASUVORK5CYII=","aspectRatio":2.98,"src":"/static/3ccf5170e6766b5c4b6a5094e3b68293/fbe2f/sponsor_nearform.png","srcSet":"/static/3ccf5170e6766b5c4b6a5094e3b68293/e1fed/sponsor_nearform.png 75w,\n/static/3ccf5170e6766b5c4b6a5094e3b68293/08283/sponsor_nearform.png 150w,\n/static/3ccf5170e6766b5c4b6a5094e3b68293/fbe2f/sponsor_nearform.png 300w,\n/static/3ccf5170e6766b5c4b6a5094e3b68293/59257/sponsor_nearform.png 450w,\n/static/3ccf5170e6766b5c4b6a5094e3b68293/26d9e/sponsor_nearform.png 600w,\n/static/3ccf5170e6766b5c4b6a5094e3b68293/06bde/sponsor_nearform.png 894w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1583801880.json":
/*!*****************************************!*\
  !*** ./public/static/d/1583801880.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAQBAgMF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAABm4VR0HYwFpwSnqjD/8QAGxABAAMBAAMAAAAAAAAAAAAAAQIDEQASISL/2gAIAQEAAQUCsh7SOEvEu3folnPUOXMRf//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEv/aAAgBAwEBPwEl/wD/xAAaEQACAgMAAAAAAAAAAAAAAAAAAQIhAxBB/9oACAECAQE/AaoeNEua/8QAGhAAAgIDAAAAAAAAAAAAAAAAABEhMQEQEv/aAAgBAQAGPwI5U2xEYK2ij//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQVGRof/aAAgBAQABPyHDeNF+oIUPQfkLJH3i1zGjz6yOptF8EVcN5N4J/9oADAMBAAIAAwAAABCPOID/xAAaEQEAAgMBAAAAAAAAAAAAAAABACEQETFB/9oACAEDAQE/EL8KiF3Djj//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhsf/aAAgBAgEBPxBVp6NOnArP/8QAHBABAAICAwEAAAAAAAAAAAAAAQAhETFBUWGR/9oACAEBAAE/EMOiEPQSyQZI141Az9FRiVZ0YE3CqjIVeic7Pyc4KjDeAVqWAxAoSp//2Q==","aspectRatio":1,"src":"/static/4a5cee1621d3676bd1ecd1787ba7c879/eadbd/speakers-matt.jpg","srcSet":"/static/4a5cee1621d3676bd1ecd1787ba7c879/f01f2/speakers-matt.jpg 75w,\n/static/4a5cee1621d3676bd1ecd1787ba7c879/1986a/speakers-matt.jpg 150w,\n/static/4a5cee1621d3676bd1ecd1787ba7c879/eadbd/speakers-matt.jpg 300w,\n/static/4a5cee1621d3676bd1ecd1787ba7c879/7ef6a/speakers-matt.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1605624759.json":
/*!*****************************************!*\
  !*** ./public/static/d/1605624759.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAZU45y9LDU1MyfRR/8QAHBAAAwABBQAAAAAAAAAAAAAAAAECEgMRIjND/9oACAEBAAEFArp5XxnItti3bPPR7T//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/ATFf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAAhEx/9oACAEBAAY/Ajsrh6tLvAv/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhUWGhsf/aAAgBAQABPyHHKeJRyKNimahazMLZUPA+x125Ln//2gAMAwEAAgADAAAAEBsnf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAwEBPxAZpP/EABkRAQACAwAAAAAAAAAAAAAAAAABEUFRYf/aAAgBAgEBPxCnJiVzt//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVGBkf/aAAgBAQABPxAnSuHh4PyC1phlfIlYy8sDWoxKoYXwNZdBGLWi6oTg0q/SMEGM/9k=","aspectRatio":1,"src":"/static/8ec5a8e7bdd06419a89058f7f534a2dc/eadbd/speaker_anna.jpg","srcSet":"/static/8ec5a8e7bdd06419a89058f7f534a2dc/f01f2/speaker_anna.jpg 75w,\n/static/8ec5a8e7bdd06419a89058f7f534a2dc/1986a/speaker_anna.jpg 150w,\n/static/8ec5a8e7bdd06419a89058f7f534a2dc/eadbd/speaker_anna.jpg 300w,\n/static/8ec5a8e7bdd06419a89058f7f534a2dc/f7c4a/speaker_anna.jpg 450w,\n/static/8ec5a8e7bdd06419a89058f7f534a2dc/6d7df/speaker_anna.jpg 600w,\n/static/8ec5a8e7bdd06419a89058f7f534a2dc/2e726/speaker_anna.jpg 810w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1682867201.json":
/*!*****************************************!*\
  !*** ./public/static/d/1682867201.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAAC8klEQVQ4y62U2U8TURyFbyrxrzAYjSgUu9CmbnErikZjKwkqSxRk7SZUZVGwLaBFoxCjRqNEfVETSy20tAhGo0NYFGkLQVFB4wMuzz64FDrTOU6nYLSCCeAv+fLdyeSenJuZXEImBwC5drWLON0vyf2OYXLxSjfxDnwgdWY3ufNmgpBGEHwcI4F3YyT4PorhUTLO7Q/VniVELJX7RCJJJvlfI0mSYt36nE871HcfKrc3dm7deYMKo9x+ndq26yaVnNJIbVDfpjy7Simo0yhGlUGxqvQ/UfPuZFOzHhLhygRamWKEruQR8jQuFOjcKNR7kKtpRZHBg3zOWfkuuK8+AV4PA/4hYPDF9AwMgQsUYmOyPnToSAdtONzCGIyuCIddjL7EyRiPupgsrZNxFDQwMFUzE5W1DDMjNfRUIN8mT2NHgdaB/N8o0jdjX7YNTRfauRZ+fH/6HIFn/dGwgb6I+cBNyQYYjO3csZuhK3b+QlvcgmKjE5kaJxx554BjVQiWmcGUm6JheZeZIoEblXroDnlQqLVDo+da6Rwo1IXbOaA1OJCZY4Pt0gNg+AW+eQcQ8A1Gwwb8ERNhYgKUO4zIKGpDanYT0nLvYU+eA7sP2JFe0IzU/TaoClvh1p0Hyo4jePQEmNKqaNgpkyXL43G61ITPj/0Y8XThbVsPz7v7PRht6+Y94u7Gl14vJnxcu34/At6/YKdMYoUiXNubCVRbgUoLUFU9LewxC5gK80ywTAX/niWL4+JxqcrM/0Nfu3rxo6dvWgK9/4QdnzRZzDW8nL4/hFP19LjZStOWuvkQJLHLVoSum2uBVyNAnw/gvuKc6R8AiZPKcHL1hpdISb0d3KKyY4uqaQ7YEN67VX2LyOSrsEyuqPxvt42UC5RKZJbwukaYtJBeKhJgySxZKhZgUbwAis0CIlesgVgqs4YD1yvWxrwuP0GYuoZZQYdtrSf0mfPcBSuRvRFJZAfDgSKpfAH3PL8jiyXymASxnF8nzjeMm5+DHk6olctXYQAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/e84f848b470f70568702db2c1a34fa0a/11f8c/country-united-states.png","srcSet":"/static/e84f848b470f70568702db2c1a34fa0a/0c7f8/country-united-states.png 43w,\n/static/e84f848b470f70568702db2c1a34fa0a/c5865/country-united-states.png 85w,\n/static/e84f848b470f70568702db2c1a34fa0a/11f8c/country-united-states.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/1705347300.json":
/*!*****************************************!*\
  !*** ./public/static/d/1705347300.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQY02P4V5gqzgAE/wpSOP6VZKj9S4u0/v//P9u/r194mx9+ZAGymfQvvY0wufwuGaQOSPMAMTcQs0PZLFC2AhD3MQANnAbEC4B40b+8pFX/agqXAw3p/vfnz6Rff/9NA7IXVj/6MlP9wttl5pfftQI1TQHiXiDOAeJVUPZ8IJ4OxCtABi4D4k1gOich7V99SRvQkIn//v6dCjSwC8hOm/j861yl829mAA3sAGqaDMRToQZtAOJ+IA4H4plAPAlk4BoglgF6medfVwPrXxtt7n9PH/MBDeIFeRHk/SkvvrEYXHorAfUyF9TLrEDMB6Kh4qIgcQAYgbprysJMmgAAAABJRU5ErkJggg==","aspectRatio":5.232142857142857,"src":"/static/2fa0fdaf9ac726878181bd7f405cbe7a/fcf39/sponsor_getonboard.png","srcSet":"/static/2fa0fdaf9ac726878181bd7f405cbe7a/e1fed/sponsor_getonboard.png 75w,\n/static/2fa0fdaf9ac726878181bd7f405cbe7a/08283/sponsor_getonboard.png 150w,\n/static/2fa0fdaf9ac726878181bd7f405cbe7a/fcf39/sponsor_getonboard.png 293w","sizes":"(max-width: 293px) 100vw, 293px"}}}}};

/***/ }),

/***/ "./public/static/d/174457870.json":
/*!****************************************!*\
  !*** ./public/static/d/174457870.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABApAAAQKQH1eOIPAAABuklEQVQ4y5WUSyhEURjHr7mIYi0rpbCQYqEsSB5bQolsSFKSkixIUraysSHNpDyykIUNymOhJCwIJcXKig0lzxnG/5v+pz6ne8fMqV/nzvea8z3OcZy/y1Xf+aAPBMEW2AYLYAAU+fh4BssDS+AdRH34AmugkD4BO5gRNIFnOv2AsA/ftHkFHXZQc7I2j5NElHOU3xEPux47/RLwQeURGASXcQJdgyGwr2QVOuU9pRilLAO0glrWSqgG7SCLNv3K79gEq6Hgk/s05SmO/zK6cfqYBjaKcNYK2KXq4bLYGlfVqll1XfYVEV6pY587ya8D5X8mgjfVydX/htVjbudUwEfH6uC636DGCRhSIya1jEU1/3CRQEPsy3Co/G9FsKv+QfY6Gqb5pO5SJ6vc8pV6xgZUfrxwfwClCZywGNzQx1yKSVHkMvd70ALuqFwGvSBTBUkHnRwPEySsxq7AGI5RGOKz9aRTYE1NzTat62jmd8pOYYeKBjpX8frZXR1Ww2yCnYBUu1vZ4JQGM3SsVzYm4Ih1s2QycuxxC6gazasxCHp0fELpF9VD4frNlawyvsjdytjo5QXaAJVevr+plqp3hRAIzwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/ec3a60c8c6539a07eb70b52f6737ea6e/fbe2f/sponsor_github.png","srcSet":"/static/ec3a60c8c6539a07eb70b52f6737ea6e/e1fed/sponsor_github.png 75w,\n/static/ec3a60c8c6539a07eb70b52f6737ea6e/08283/sponsor_github.png 150w,\n/static/ec3a60c8c6539a07eb70b52f6737ea6e/fbe2f/sponsor_github.png 300w,\n/static/ec3a60c8c6539a07eb70b52f6737ea6e/59257/sponsor_github.png 450w,\n/static/ec3a60c8c6539a07eb70b52f6737ea6e/6e610/sponsor_github.png 512w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1755578640.json":
/*!*****************************************!*\
  !*** ./public/static/d/1755578640.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAXAQEAAwAAAAAAAAAAAAAAAAADAAEC/9oADAMBAAIQAxAAAAHRGFbFpXJXCrCfcC3/AP/EABwQAAICAgMAAAAAAAAAAAAAAAECAAMREhMhMv/aAAgBAQABBQIgKEw80j3BpQ+h5Vl3UqYgjz//xAAZEQEAAgMAAAAAAAAAAAAAAAAAARIRITH/2gAIAQMBAT8BrpVPWH//xAAYEQACAwAAAAAAAAAAAAAAAAAAARASE//aAAgBAgEBPwG7NBR//8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAAhAhUf/aAAgBAQAGPwJmcy1SEJYldx+4J//EAB0QAAIDAAIDAAAAAAAAAAAAAAERACExEEFRcYH/2gAIAQEAAT8hOawIkb154h1YNcGwKU4DaF9nQ3UESPUItehmf//aAAwDAQACAAMAAAAQPy8+/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIVH/2gAIAQMBAT8QnTelsVCOH//EABgRAQEBAQEAAAAAAAAAAAAAAAEAIREx/9oACAECAQE/ENfJRjJ5K3//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhMVFB/9oACAEBAAE/EHY/UzBUdYgjnvzCWAgqN4+bjQYET44iivka4R9evmZoVqpSaSoeR+td/9k=","aspectRatio":1,"src":"/static/02f0aa62c66b875e0e4c13342013f00f/eadbd/speakers-vladimir.jpg","srcSet":"/static/02f0aa62c66b875e0e4c13342013f00f/f01f2/speakers-vladimir.jpg 75w,\n/static/02f0aa62c66b875e0e4c13342013f00f/1986a/speakers-vladimir.jpg 150w,\n/static/02f0aa62c66b875e0e4c13342013f00f/eadbd/speakers-vladimir.jpg 300w,\n/static/02f0aa62c66b875e0e4c13342013f00f/7ef6a/speakers-vladimir.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/1886207130.json":
/*!*****************************************!*\
  !*** ./public/static/d/1886207130.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABe0lEQVQoz22ShwoCQQxE7///SRQVGyr23jt2xd5GXmCPEwwMd8lmJ5NsPP2xz+djcDYYDFQul/+l6vV6qd/vazabme8RWC6XWq1W2u12Op/PfvL1etV6vValUlE2m7WcxWJhmM/nOhwOut1uRoaPCK9UKikWi6lWq9klqjkjMRwOK5lMKh6P2znI5XLK5/OKRqOaTCZ+V6YwEolov9+bAzntOSOZVofDoZ05e7/f9u12uyoWi36Mbj3UId0RBhVC6IrQNnmoBalUylRzP51OWwzVP4SFQkGj0cgnZC4oQGG1WrX/ZrNpswX80/7xeNR2u9XpdJIXCoXsMbBWq6VEIqF2u22gKrFer+eTZTIZ6wKQ2+l0fl7dI5mXciuA32g0VK/XbUbEqD6dTvV8Pq0AagGj4Dy4ah5rgnxIkYy51bnf73o8HgYsWBi41n8IUcR+QbLZbEzFeDy2y+wgX0YCKbO+XC4G8pkxd/4qJMlVdL6LOQJI6SIYd+od4Rdo0jjUmqd+gQAAAABJRU5ErkJggg==","aspectRatio":1.867816091954023,"src":"/static/c6a079c78fc47383eb2a893db1233c4c/fbe2f/example_rutan-grey.png","srcSet":"/static/c6a079c78fc47383eb2a893db1233c4c/e1fed/example_rutan-grey.png 75w,\n/static/c6a079c78fc47383eb2a893db1233c4c/08283/example_rutan-grey.png 150w,\n/static/c6a079c78fc47383eb2a893db1233c4c/fbe2f/example_rutan-grey.png 300w,\n/static/c6a079c78fc47383eb2a893db1233c4c/582b7/example_rutan-grey.png 325w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2149966145.json":
/*!*****************************************!*\
  !*** ./public/static/d/2149966145.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABUZVy8zB12EGWE//EAB0QAAICAgMBAAAAAAAAAAAAAAECAAMEIhEUISP/2gAIAQEAAQUCy2+r6wcAWHZvTOtTMpFSyf/EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/AWP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAbEAACAgMBAAAAAAAAAAAAAAAAARARAjJRgf/aAAgBAQAGPwLwfYsuNENYqP/EABwQAQADAQADAQAAAAAAAAAAAAEAESExEFGRof/aAAgBAQABPyF0GljJyZZu7iAfamYd/JsXZb7gHJEADx//2gAMAwEAAgADAAAAEOQHvf/EABcRAAMBAAAAAAAAAAAAAAAAAAAQESH/2gAIAQMBAT8QwV//xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxBLChR//8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFRQYGxof/aAAgBAQABPxArHlAyW4gFgKGdDn2HSxq15PY5lTQhoXZb2N3E3+xBwz2w0B1rb9gFWCBLtb7P/9k=","aspectRatio":1,"src":"/static/083dbced97a54ae381a2bbe3510be946/eadbd/speaker_james.jpg","srcSet":"/static/083dbced97a54ae381a2bbe3510be946/f01f2/speaker_james.jpg 75w,\n/static/083dbced97a54ae381a2bbe3510be946/1986a/speaker_james.jpg 150w,\n/static/083dbced97a54ae381a2bbe3510be946/eadbd/speaker_james.jpg 300w,\n/static/083dbced97a54ae381a2bbe3510be946/f7c4a/speaker_james.jpg 450w,\n/static/083dbced97a54ae381a2bbe3510be946/ee69c/speaker_james.jpg 460w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2188481302.json":
/*!*****************************************!*\
  !*** ./public/static/d/2188481302.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAACLUlEQVQ4y62Uz2sTQRTHJwbUu3+AP5r0ByHb/KhWEHryJuKhiuhF8KQWBakHsf7IxkLbICUrjQe1B6UX22QDFqokBgpC0XrQ2oBFK4qoFER0N7tpd2d2njPZhbQxOaTbgQ/zlvf2O29n33soKIR3Hjrc60VsXXnwxRPPQtOIWeqJy4BEGTxICEV/BILCObRVKxAIwLGzg99GcjATS+O8KNMcO7U5ZMiJWXjB7GnU1tpCTl1+CKOzAEMzAMPPN88IA7W3+eDkxZQ1/AyImCHkdpa6oiJ4vC9FxWmwBiaJdX0K6pOBxr51oBafH66KSbP4E/RXS3p5/tNaDQbDLL9eVMvzH5m9bNSJqYJ27/VTSZKAL6OsAjH0GsqAv78BaykF+Oss4DUNiKnXibNBe/b54c6oRCkA/fNXpUpJt1F1qpY0qiirVF2YoGT5CC29G6PKb5WqGvdr1dh1OBkmnQwVdoq2EZNluFIE8uFRJVM7E60hyMfusP/mXWvuM+D8wiouLBo1mLhQxLjwlvuw/fxfTJXKX+7tu0djT4Fee0LowBRsZNKh1m6AU4djvA5xXCaY1ZIreKdYp/vHIfnSrvREzh2VXj565tb7RB7GY2lzgvXy4+YBDnsX7qNwVzd0dLTf2LJpE4ocACG8f5DbJy5I22Npw8umxiag2/iOIl0Hgc3EIS4Y6e7xnk/M8UHZNLGMvaNgKPor2Bm9xAWZsJfZ7j5Z6IzuYkI7HEHXV/gP0b29HuOUh4IAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/ba165b34db83590868303321de08aec3/11f8c/country-argentina.png","srcSet":"/static/ba165b34db83590868303321de08aec3/0c7f8/country-argentina.png 43w,\n/static/ba165b34db83590868303321de08aec3/c5865/country-argentina.png 85w,\n/static/ba165b34db83590868303321de08aec3/11f8c/country-argentina.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/2267898602.json":
/*!*****************************************!*\
  !*** ./public/static/d/2267898602.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACu0lEQVQ4y42TX0hTYRjGv++cTbaZ5WZFwWbh0W6luuiqLorI1FNbEt5EKYYUTnfO2Uj6NzdKRYSgm1YIUluQrZKiop1vlkqwUrwK6S668CLIWTbMJbm9vedsCkUTP/jxPDvv+z3fe/6MkH9WyllJ1ruC8U1rN6RcVXndZUw5hcMpl3Dsh0s4vlhfdSAQL94XYKYTiBhgFjEYt1pyoRvXCHRW0LzakGSmQQA4KcBiXeW0n/Gsb4JA8DWBa6McBOIW/VYCrIgrGDjvFGhOK23oZ3A6+ImhC/VVU12Me949TqBLJUsBxv0OMrOQD6QFA3+JdppThy0t2ufA5QBoKIflo+XTlxnHeiYJ+HHCrlEKV5lZn/DKWhMmmmp1fddUuyFxpmYAGU40HXn2/lRdf4gVXQqp/EskGmLGx7dZyTatN8TMhSck0QzNq5VEs5OoMyS6/IU8hJegGgZB5WaRT+g/g1q8Q2sF1VQ4sCSS1IvWSHKzIZycNQwtgPFRGsi9xQ9ZlYtBggAwZISDjJp7KRn1P7csSZIO/yCtB5aFv26h97/N0yfLwD0FIJGljzjZCOAzhDcUYIyHrGrRv7G3A3t4n8+n5/j9/lzYyjrUO5Q77RVYaOT7MBeZS/CR5AQJpwezMUN/NkanMjE6lo3x4wsvbI6VfR6PhyqK8teEHKJ/qB2SbFI87aXr/bfgvu0r3uv15owsy3YkjCcV4Uk3samxXfbaO2SlGlVol5UKRZH2XvC6t/qUDqHT21Yqy1I19u1G7uLeFtxrWT0FQ3Zi4Q7iw+IN5CLSJ0nyQdROJIgB51Cvo/YgXi0E+2+h9iLdGFi8GogXHFh0op5F6tC3oJ5HRPQ1qPuRNvQuxI1e4zR6De3QRtSy1UC3201FUdR9a2urBs0/nzKs8XlfqvWhmvNDWDVtbm7WaibEqP3+AyfuV0ym0gZUAAAAAElFTkSuQmCC","aspectRatio":1.3109243697478992,"src":"/static/4b80108bd7987faad54b9bac0b1eb347/fbe2f/sponsor_microsoft.png","srcSet":"/static/4b80108bd7987faad54b9bac0b1eb347/e1fed/sponsor_microsoft.png 75w,\n/static/4b80108bd7987faad54b9bac0b1eb347/08283/sponsor_microsoft.png 150w,\n/static/4b80108bd7987faad54b9bac0b1eb347/fbe2f/sponsor_microsoft.png 300w,\n/static/4b80108bd7987faad54b9bac0b1eb347/59257/sponsor_microsoft.png 450w,\n/static/4b80108bd7987faad54b9bac0b1eb347/7eaa0/sponsor_microsoft.png 468w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2281034972.json":
/*!*****************************************!*\
  !*** ./public/static/d/2281034972.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAADNklEQVQ4y61Ua2yLURg+NdYfBIlEshKXSGxDu66duv5wiWRZYrPZsmHtbOa2revV6LCJ4IdrgiAEixAZXTtzqXVT20SNsOAHhqldsGz44Y/wfdvj/b6vzTrxQ8xJnrzvd85znvOe55zzMWWcVp6wQDWMUcs7MorZqhmzuv4BbjHKmEqt+aBUaTcysYENuc2aORdJ+ZM6HV7mtTjZXVrFZ3NLCOVb3DKfqYr57G4J4ZwQj9BAVXpYzHQdn2aNws4Ghq03GbZ5BlB6W4YSiuYbDLtqI2GluOWW1B/OC8Fxm7YYG61DilHRt9XDOGsV42klnqoQUeik6BrG1z9S8v1dqfyDFi3vqB7BF1xlvC3IEfhCHgTHYqeTYLECJAgSBG0PxRSLnAxn7kzA17ZE9L3JRWtjAbjX6/GjYzkuNkwBWQBjkE9C/SQsxqBglChoJpHNVxn23ByJJy0Lge7VCPhN0K89jvmLT2Bp4mH4r5mAnmy8eLYYBzxjQNXCLIlBEBUFV1CFJeSNwz0CNfdj8P1dBtBlAB9YjZpqLy5VvsQV5xOU721CetZJfH6+BvhkABfIQl2zCmU1cgQrlARTiyfARIa7mqKBj/lAhwH9HRk0MQcrM88jJb0C2bmXceJUI6qqX6D7WRHQmQa060l4A+48VIsW2d1hFYY8POebiN7WZKpwLfB+FcymQ5i35BIM6yqh1J2FvaQC+JBHgnp8e5uGy41TRR8HVRg6FAsJCp44rg1HfbOaJmai5/EmGAsP0lZPo7DoKFrvFoj9/sdzUHZdLvKtv3v4+ylbXJLwAc9YBF4tomr1+PqUrGg3oKdtGY55x4OuFMx/POWBe/iTBDka4IT7RESOrgVndDKusmka96Utibvhj+VIhCO/ODuNC7wQPwThpfSttClQfk+66aXeAeyok6JNeAW1wSj2ywbxwkFvWYfEnMlPS+vZaYtTdoFWrKCVRIRyqlbMhRjeH57TOxbmnmLxCTrMiJ29nf2vptbooIrX7Bby5CJFJFUZQSv+PVxBBL+ZJmEu6J+4TxCM16kjcvaPZjTwz2BKtbaXBI2CIP29Iygf2pZVau04ZZxGziTxIVv4C1KomONAdKh3AAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/b86526bcc019502fb3baafb35adcff9f/11f8c/country-brazil.png","srcSet":"/static/b86526bcc019502fb3baafb35adcff9f/0c7f8/country-brazil.png 43w,\n/static/b86526bcc019502fb3baafb35adcff9f/c5865/country-brazil.png 85w,\n/static/b86526bcc019502fb3baafb35adcff9f/11f8c/country-brazil.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/2313804021.json":
/*!*****************************************!*\
  !*** ./public/static/d/2313804021.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAABtUlEQVQ4y63UQWsTURAH8AmBfgdPCTRUCjbZ7DbRxGrYtLvLpq2n3WxfbVE8ijevnkQUg1goVCztoe3dqxcx9eYn8CIUWzyoB6GgImz2zd9J6hdIXx/8mLnsf+e9w1DZcuriEsmpX2vlfD8mz4vGFJPvj2qOKtUaZir2U7qoM2PZkMm+BkHyTv52KPoy5Ziivkz3QepbulK2dPP6PBY7txGGK0IZGQai0XB1GHSzwIuywDeSjgJrDZdbQVff8CJ904tNZFSSwAdNN/3YSX6/D6M//TA+t0NBhbLFG3NtYDkBFiMRG6GiTPh8rs241eV0KeJsOTYyDOTeVRdod5G5EVjAABWnLfTW5xm7SmdbieZXiYYBKk5K4OMFxq81zr4p5h+rDANULMkbPlrQ+L6WZkdqwF/UAAaoMGnpzSc+kN4Dft4BTu8aoalpGw/vtz7hdH1ncKT2+Vjt4TxO1IF8+5qqTh2ly9VnF7ZtLLsOq+psDPvtXjDx97PK42R1PMdnlaWS7FfIgn05DGw2a/k3Ox2S8ce0QnLtUT+6crnivPi/G/PSGy7YiuPKhIWz3s7N1maN8v4BC+zmlshdG0IAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/aba97931da181ed480bf94412e2edb3d/11f8c/country-germany.png","srcSet":"/static/aba97931da181ed480bf94412e2edb3d/0c7f8/country-germany.png 43w,\n/static/aba97931da181ed480bf94412e2edb3d/c5865/country-germany.png 85w,\n/static/aba97931da181ed480bf94412e2edb3d/11f8c/country-germany.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/2502890234.json":
/*!*****************************************!*\
  !*** ./public/static/d/2502890234.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIFAQME/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGEe7EJFsaddYktXBQ//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxESEyH/2gAIAQEAAQUCI3hqasbFwyCeGKi46NZZjI6Os//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMQMf/aAAgBAwEBPwGtRNY+Rn//xAAXEQEBAQEAAAAAAAAAAAAAAAABEAMx/9oACAECAQE/AVZp2f/EABsQAAICAwEAAAAAAAAAAAAAAAABAhESITFh/9oACAEBAAY/Aoxi6MshSRfC/DTFZRSej//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExUUH/2gAIAQEAAT8hroJLVm8CcJ2ATEC+MRquqnUAdVeSoOgdEAq1yXWuHBU//9oADAMBAAIAAwAAABBHKAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/ENRkiM1V0t//xAAYEQEBAQEBAAAAAAAAAAAAAAABACERUf/aAAgBAgEBPxATdfLAgy//xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhMUFhcf/aAAgBAQABPxBEglSPHXebr75oSfMAgIaxm+8tnxtzDnWWYQVUnuUssI6D7gZqk05tFbOmLbpEDC+mf//Z","aspectRatio":1,"src":"/static/2464d52a742542f060fe2d3dcce8b10f/eadbd/speaker_andrea_griffiths.jpg","srcSet":"/static/2464d52a742542f060fe2d3dcce8b10f/f01f2/speaker_andrea_griffiths.jpg 75w,\n/static/2464d52a742542f060fe2d3dcce8b10f/1986a/speaker_andrea_griffiths.jpg 150w,\n/static/2464d52a742542f060fe2d3dcce8b10f/eadbd/speaker_andrea_griffiths.jpg 300w,\n/static/2464d52a742542f060fe2d3dcce8b10f/f7c4a/speaker_andrea_griffiths.jpg 450w,\n/static/2464d52a742542f060fe2d3dcce8b10f/6d7df/speaker_andrea_griffiths.jpg 600w,\n/static/2464d52a742542f060fe2d3dcce8b10f/2e726/speaker_andrea_griffiths.jpg 810w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2680738788.json":
/*!*****************************************!*\
  !*** ./public/static/d/2680738788.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAQIE/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgEA/9oADAMBAAIQAxAAAAGeDAWuSFNu4crAd//EACAQAAEDAgcAAAAAAAAAAAAAAAIAAQMEEhETISIjMUH/2gAIAQEAAQUCOMGDKGwW2zVKv4h6h1c2wXv/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BxhP/xAAdEAACAQQDAAAAAAAAAAAAAAAAARECEDGBEkFx/9oACAEBAAY/Am+PROdCKlQpUZIzZmh+n//EABsQAAIDAQEBAAAAAAAAAAAAAAERACExQVGR/9oACAEBAAE/IQJBjHDLNHD4U+dGEMVAmHsfDGGEFDyoK58gKjBAi//aAAwDAQACAAMAAAAQu8AD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/ECRuOf/EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEhMf/aAAgBAgEBPxCziNgz/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFRQWFx/9oACAEBAAE/EG7XIrs7YlctUl7pqnrnIivdoAqOoGzXsqDPlLk83v3Yd+jbIXE9Z4jNeBL97CfBT//Z","aspectRatio":1,"src":"/static/42cc75e14b3bf27886a4f584a72be784/eadbd/adrian-estrada.jpg","srcSet":"/static/42cc75e14b3bf27886a4f584a72be784/f01f2/adrian-estrada.jpg 75w,\n/static/42cc75e14b3bf27886a4f584a72be784/1986a/adrian-estrada.jpg 150w,\n/static/42cc75e14b3bf27886a4f584a72be784/eadbd/adrian-estrada.jpg 300w,\n/static/42cc75e14b3bf27886a4f584a72be784/f7c4a/adrian-estrada.jpg 450w,\n/static/42cc75e14b3bf27886a4f584a72be784/9b3c4/adrian-estrada.jpg 500w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2690306979.json":
/*!*****************************************!*\
  !*** ./public/static/d/2690306979.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAQBAgMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHZ7YDVboB4+jcwP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMTIRAREv/aAAgBAQABBQIr4qBJ4stqw1WqsyIINlh1EbX/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAgEAAABAYDAAAAAAAAAAAAAAAAARESAhATICExMkFh/9oACAEBAAY/AiiBrvyTauU0Dd2OVn//xAAcEAADAQACAwAAAAAAAAAAAAAAAREhMUFRYYH/2gAIAQEAAT8hyF2L0S09q1FwbWoeWjGC6KkiqcC4MXxGKc+o/9oADAMBAAIAAwAAABBQB77/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExQf/aAAgBAwEBPxBSMpwWH//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QdpMZ/8QAHRABAAMBAAIDAAAAAAAAAAAAAQARIUExUWFx8P/aAAgBAQABPxBACpCXp8W+pShg0AnzcWPqBvjDNQBQ5mwuKmzg74/ZE6VQnbIAWUyi3vtiYDB4M//Z","aspectRatio":1,"src":"/static/5ba955912b87b7698e0b9a96aa2df39b/eadbd/alejandro-estrada.jpg","srcSet":"/static/5ba955912b87b7698e0b9a96aa2df39b/f01f2/alejandro-estrada.jpg 75w,\n/static/5ba955912b87b7698e0b9a96aa2df39b/1986a/alejandro-estrada.jpg 150w,\n/static/5ba955912b87b7698e0b9a96aa2df39b/eadbd/alejandro-estrada.jpg 300w,\n/static/5ba955912b87b7698e0b9a96aa2df39b/f7c4a/alejandro-estrada.jpg 450w,\n/static/5ba955912b87b7698e0b9a96aa2df39b/ee69c/alejandro-estrada.jpg 460w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2723169691.json":
/*!*****************************************!*\
  !*** ./public/static/d/2723169691.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/2gAMAwEAAhADEAAAAaRxUHq5FNxRsNv/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIRITH/2gAIAQEAAQUCvsqXDHXd2dZJPh//xAAWEQADAAAAAAAAAAAAAAAAAAABESD/2gAIAQMBAT8BCj//xAAVEQEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAgEBPwGj/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAEBEhQVH/2gAIAQEABj8CwuoCrMR3N6nkN//EAB4QAAIBBQADAAAAAAAAAAAAAAABESExQWFxUZGx/9oACAEBAAE/IXcBJ0lYG4A6BTvocprGSVtwg86Qj6FrYj//2gAMAwEAAgADAAAAEPPPQf/EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExQf/aAAgBAwEBPxBu4els/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQIBAT8QnBBYRH//xAAdEAEBAQACAwEBAAAAAAAAAAABEQAhYTFBgXGR/9oACAEBAAE/EKkoAHNPKd4SKg9I+/01QX18zGwKqsEH+6rRQGG3jvLJ9GHZQjTx1lUgILMSeB+b/9k=","aspectRatio":1,"src":"/static/9a142a547924d48865027d8b05f947a0/eadbd/speaker_miguel_bolivar.jpg","srcSet":"/static/9a142a547924d48865027d8b05f947a0/f01f2/speaker_miguel_bolivar.jpg 75w,\n/static/9a142a547924d48865027d8b05f947a0/1986a/speaker_miguel_bolivar.jpg 150w,\n/static/9a142a547924d48865027d8b05f947a0/eadbd/speaker_miguel_bolivar.jpg 300w,\n/static/9a142a547924d48865027d8b05f947a0/f7c4a/speaker_miguel_bolivar.jpg 450w,\n/static/9a142a547924d48865027d8b05f947a0/6d7df/speaker_miguel_bolivar.jpg 600w,\n/static/9a142a547924d48865027d8b05f947a0/2e726/speaker_miguel_bolivar.jpg 810w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/275546198.json":
/*!****************************************!*\
  !*** ./public/static/d/275546198.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAECAwQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/aAAwDAQACEAMQAAABtrWlKQkGfrFEoGz/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAEBESE//aAAgBAQABBQLF5o827LQnJxp4rJ5iagtr/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIQMf/aAAgBAwEBPwEmNs//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQETH/2gAIAQIBAT8BSMI8r//EAB0QAAIBBAMAAAAAAAAAAAAAAAABEQIQMVESIYH/2gAIAQEABj8CH21StGSEOMs4ul+Dnd//xAAbEAADAQEBAQEAAAAAAAAAAAAAAREhMUFh8P/aAAgBAQABPyFv9RpHRNtZuuo5aNJ3vp1tcNLQPuhg6yjw9P/aAAwDAQACAAMAAAAQ9Bj+/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxCAmWf/xAAYEQADAQEAAAAAAAAAAAAAAAAAATEQEf/aAAgBAgEBPxBlG3YQz//EABwQAQEBAAIDAQAAAAAAAAAAAAERACExQVFxYf/aAAgBAQABPxBAE79aGLsAU9GTkROhQe8kRmqkD7kHTEMce/zjU4RoEN1Uqi8THP1lRG//2Q==","aspectRatio":1,"src":"/static/e3d5ea99919ff52cd320b4d6585a009f/eadbd/nicole.jpg","srcSet":"/static/e3d5ea99919ff52cd320b4d6585a009f/f01f2/nicole.jpg 75w,\n/static/e3d5ea99919ff52cd320b4d6585a009f/1986a/nicole.jpg 150w,\n/static/e3d5ea99919ff52cd320b4d6585a009f/eadbd/nicole.jpg 300w,\n/static/e3d5ea99919ff52cd320b4d6585a009f/7ef6a/nicole.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2790026016.json":
/*!*****************************************!*\
  !*** ./public/static/d/2790026016.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQID/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/9oADAMBAAIQAxAAAAFvMiyz2GKzkTrsU//EABkQAQEBAQEBAAAAAAAAAAAAAAIBAxETIf/aAAgBAQABBQLQFvxoWjhW3IJpNt3nEr25n5oL0//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPwEhk//EABwQAQACAgMBAAAAAAAAAAAAAAEAEQIxECFRUv/aAAgBAQAGPwKsK7hab41MKGWkVXXsK+YLP//EABwQAQACAgMBAAAAAAAAAAAAAAEAETFRIUFxgf/aAAgBAQABPyE9ShRIvH7Kg6jW4d0RKJSLepzISzHag+QiZwz/2gAMAwEAAgADAAAAEGs/wP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPxCBhP/EABcRAQADAAAAAAAAAAAAAAAAABABITH/2gAIAQIBAT8QxZAf/8QAHBABAQEAAgMBAAAAAAAAAAAAAREAITFBYYGh/9oACAEBAAE/ECsZxBge/WiTwAtB4MxlitfrhkAF4Sgi/miWxGcuvmb1gg3xqJqkVPJ18wLCIw17EmQihy7/2Q==","aspectRatio":1,"src":"/static/fc7cb827ea3d42a4ec0a6985dcf4f469/eadbd/stiwar.jpg","srcSet":"/static/fc7cb827ea3d42a4ec0a6985dcf4f469/f01f2/stiwar.jpg 75w,\n/static/fc7cb827ea3d42a4ec0a6985dcf4f469/1986a/stiwar.jpg 150w,\n/static/fc7cb827ea3d42a4ec0a6985dcf4f469/eadbd/stiwar.jpg 300w,\n/static/fc7cb827ea3d42a4ec0a6985dcf4f469/7ef6a/stiwar.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/2961514891.json":
/*!*****************************************!*\
  !*** ./public/static/d/2961514891.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUCAwQG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAbnJE1J6hAJNE3mA/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIAAwQQEhMUQf/aAAgBAQABBQLYSlcch2hungrsh7DTxcf/xAAWEQADAAAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8BK//EABYRAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwEj/8QAGhAAAgIDAAAAAAAAAAAAAAAAECEAEQECMv/aAAgBAQAGPwKZVFK50NR//8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERECExYVFxsf/aAAgBAQABPyHYQGwsEeWKRGR5csj2bQ/Q1+1P/9oADAMBAAIAAwAAABA37z//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QxxkZ/8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAECAQE/EIU//8QAIBABAAIBAwUBAAAAAAAAAAAAAQARITFBgVFhcZGxwf/aAAgBAQABPxDdrAd11Xdl1nvAfyJ1luKX5AcsWLlXtUEMeyKg0WauJqANbuIuXzP/2Q==","aspectRatio":1,"src":"/static/1be92fcfe1bd5fbb4231aa564d3466a7/eadbd/diego.jpg","srcSet":"/static/1be92fcfe1bd5fbb4231aa564d3466a7/f01f2/diego.jpg 75w,\n/static/1be92fcfe1bd5fbb4231aa564d3466a7/1986a/diego.jpg 150w,\n/static/1be92fcfe1bd5fbb4231aa564d3466a7/eadbd/diego.jpg 300w,\n/static/1be92fcfe1bd5fbb4231aa564d3466a7/f7c4a/diego.jpg 450w,\n/static/1be92fcfe1bd5fbb4231aa564d3466a7/6d7df/diego.jpg 600w,\n/static/1be92fcfe1bd5fbb4231aa564d3466a7/b4295/diego.jpg 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3186016781.json":
/*!*****************************************!*\
  !*** ./public/static/d/3186016781.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAACmklEQVQ4y62US0wTURSGDzRRdy7YESNoCiKP2g61EiPgI6USEl0Yl8aVMcortsQIPmNMWIEgEQiJUXFhkNLaB2+QEEJcVKMYiSagRojGB+HRMqUznXuPd6amTJVNU07my3/vuf/8OTOLC7k6btuxQqMGWPlaj0C4twQErzluRI/yXhLo9PnfsvO4C7BZlZFjxFvnDs7jmGUw6DK/EDzmUdFbEheCR1bzGNNe2JlpkFprChEnyxCHSxFHE2CkFCEt04BN1YcIjhyX1twWSfDGIsrqsbCzEkVF7/8eFSIL5LCpqoDiYDFZcxYR0RWL8LyISJ5igoNHCfEeVvb/elRIkK7NxobbVhF/jq8GZvr44OeBKPynfl6cG+J/TLn4ScdDft7n4MNsL/fVPjWQtktLG5vvo1z+oIS8gBFCFENhxF+LAj5+Oq3w4Mk7nPvOo0AQV9l51KsC0ndnYENjI0UM0+XlBRoILCn4/Ys0FPLTDx+/0raOcdrUMkpb2sboq9czVBQDdGVlMepVo0x4r7ldmVAMIhIhgsSgbMK1AKLb9QXt3bPYY5/FpQU2nsSe0LpXDWi1Oqy6cZoOz1wnrjdXiGeqNoqb0fe+jvT4LpO7zvOk62UN6Z++StxvY31qYO+eA1hWnkKr3UAvdgEtf6aim/WYVtiBWl1AK+2RvdyP8alggSY8WbmD1PaDaHNowjXOjUgO2xzJim58vg5kZZrIKVsq3pwArB0ArBtKDMjNMaHlbPpU3TB0XLIndVod8ChebBHtZNoOBqMJs7P2X9u020bPmVBn4O7I6xMVqVvYlBqbE+LG+hfgjAWo03P1cqDBpNecqd8ObPS4sfZEFPL0+b/z9uVXyYEsWMPWiX0yu7FTWOhWiIQn/Av/AAxkKAp4LluEAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/9faf1cedf5dec4959e0f75146f7ec8e7/11f8c/country-india.png","srcSet":"/static/9faf1cedf5dec4959e0f75146f7ec8e7/0c7f8/country-india.png 43w,\n/static/9faf1cedf5dec4959e0f75146f7ec8e7/c5865/country-india.png 85w,\n/static/9faf1cedf5dec4959e0f75146f7ec8e7/11f8c/country-india.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/3188359146.json":
/*!*****************************************!*\
  !*** ./public/static/d/3188359146.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABpqjIunLE/8QAHBAAAQMFAAAAAAAAAAAAAAAAAAECAxETFCEx/9oACAEBAAEFAkmqXHoZJx0jtKf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8BmI//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8Buq//xAAcEAACAAcAAAAAAAAAAAAAAAAAARARITEycaH/2gAIAQEABj8CvwnR7MROP//EABwQAAMAAgMBAAAAAAAAAAAAAAABETFBIWGRof/aAAgBAQABPyFixeBCq+wvfMw23gYu1g0cdZ//2gAMAwEAAgADAAAAEFPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/ECFcf//EABYRAQEBAAAAAAAAAAAAAAAAABEAAf/aAAgBAgEBPxDWMlf/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFRof/aAAgBAQABPxAmUT23BdECgK+OxBqjrsBeYrw1LEZ2Fi3Khsan/9k=","aspectRatio":1.5053763440860215,"src":"/static/0473afc4b80f21d64932064ea3db0b76/eadbd/ruta-n-banner.jpg","srcSet":"/static/0473afc4b80f21d64932064ea3db0b76/f01f2/ruta-n-banner.jpg 75w,\n/static/0473afc4b80f21d64932064ea3db0b76/1986a/ruta-n-banner.jpg 150w,\n/static/0473afc4b80f21d64932064ea3db0b76/eadbd/ruta-n-banner.jpg 300w,\n/static/0473afc4b80f21d64932064ea3db0b76/f7c4a/ruta-n-banner.jpg 450w,\n/static/0473afc4b80f21d64932064ea3db0b76/6d7df/ruta-n-banner.jpg 600w,\n/static/0473afc4b80f21d64932064ea3db0b76/8c3c8/ruta-n-banner.jpg 900w,\n/static/0473afc4b80f21d64932064ea3db0b76/4a4d8/ruta-n-banner.jpg 980w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3231487550.json":
/*!*****************************************!*\
  !*** ./public/static/d/3231487550.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB1whzl3uyYIlAa//EABsQAAICAwEAAAAAAAAAAAAAAAECABIDERMh/9oACAEBAAEFAtqJiKl6CAEqmkz3ljyTyFjP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAAYDAAAAAAAAAAAAAAAAAAECECExUXGB/9oACAEBAAY/AgqbpqgwnDHocJv/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAxIaH/2gAIAQEAAT8hSVaBaOH1erWa8+4bRw5kqNqZF3h4bU1R3f/aAAwDAQACAAMAAAAQ2xj8/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8QI//EABcRAQADAAAAAAAAAAAAAAAAAAERIDH/2gAIAQIBAT8QGdp//8QAIBABAAMAAQMFAAAAAAAAAAAAAQARITFBUWGBkaGxwf/aAAgBAQABPxAQS0YNE94rfm4sL47Z08RiS5JUDI2azliUAsXopX7D0anPKLfUGy2rr3LfmekJ/9k=","aspectRatio":1,"src":"/static/4bd39ba0796a799dbe2d41d7b770be98/eadbd/jhonatan.jpg","srcSet":"/static/4bd39ba0796a799dbe2d41d7b770be98/f01f2/jhonatan.jpg 75w,\n/static/4bd39ba0796a799dbe2d41d7b770be98/1986a/jhonatan.jpg 150w,\n/static/4bd39ba0796a799dbe2d41d7b770be98/eadbd/jhonatan.jpg 300w,\n/static/4bd39ba0796a799dbe2d41d7b770be98/7ef6a/jhonatan.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3249945969.json":
/*!*****************************************!*\
  !*** ./public/static/d/3249945969.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB4akvyzuJp9iAP//EABwQAAICAgMAAAAAAAAAAAAAAAECAxEABBATIf/aAAgBAQABBQJraWY0RsGg9SHrfLHLeZ//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/AUbf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGxAAAQQDAAAAAAAAAAAAAAAAAAIQERIgIjL/2gAIAQEABj8CgTq1ibHOH//EABwQAQACAwADAAAAAAAAAAAAAAEAESExQWGBkf/aAAgBAQABPyGjJdERFAMHycgPUcHGdxRyUrQS8Q3NTIeS5//aAAwDAQACAAMAAAAQ+xc+/8QAGBEAAgMAAAAAAAAAAAAAAAAAAREAEFH/2gAIAQMBAT8QEI7Gv//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EGtKn//EABwQAQADAAMBAQAAAAAAAAAAAAEAESExQVFhcf/aAAgBAQABPxAHYW0uVexApWh5en5KntOKa324dnDodnkM84ja63PYj7Os2NR2ycMnAbSr+z//2Q==","aspectRatio":1,"src":"/static/cdf2b2bdd779bda3aeb81aee01423e9e/eadbd/speaker_kat.jpg","srcSet":"/static/cdf2b2bdd779bda3aeb81aee01423e9e/f01f2/speaker_kat.jpg 75w,\n/static/cdf2b2bdd779bda3aeb81aee01423e9e/1986a/speaker_kat.jpg 150w,\n/static/cdf2b2bdd779bda3aeb81aee01423e9e/eadbd/speaker_kat.jpg 300w,\n/static/cdf2b2bdd779bda3aeb81aee01423e9e/7ef6a/speaker_kat.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3339401997.json":
/*!*****************************************!*\
  !*** ./public/static/d/3339401997.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEAgUG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABxgtViwiEXQBrAf/EABwQAAICAgMAAAAAAAAAAAAAAAECAAMREgQhMv/aAAgBAQABBQLsg2FGxPM5OrBThKDsWqRwyAN//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgECBwAAAAAAAAAAAAAAAAERECECEiIxUaHR/9oACAEBAAY/ArSxLGu6eGbYV0KeTUpp/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExYZFx/9oACAEBAAE/IQ5A4C5XF7IzBL9Y2VXwsVMYbDccujqLivglIrRgWz//2gAMAwEAAgADAAAAECDPPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQVFhkbHB0f/aAAgBAQABPxACHRG71qJRuW2sSiBiXBAcRaRD38wGnQYSuPuNF0N3r7ZUg2TD+R8BtDw9nmCLC9z/2Q==","aspectRatio":1,"src":"/static/d8c26b61753fada15c974afac112d074/eadbd/speaker_rauch.jpg","srcSet":"/static/d8c26b61753fada15c974afac112d074/f01f2/speaker_rauch.jpg 75w,\n/static/d8c26b61753fada15c974afac112d074/1986a/speaker_rauch.jpg 150w,\n/static/d8c26b61753fada15c974afac112d074/eadbd/speaker_rauch.jpg 300w,\n/static/d8c26b61753fada15c974afac112d074/7ef6a/speaker_rauch.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3418496277.json":
/*!*****************************************!*\
  !*** ./public/static/d/3418496277.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVQoz33TSyhEURjA8WtMHmFqvPMMCUOSBeWRjVgRC7JB0ozktWBpYYOFnVjbjRVJKBYeKQslCws2HgsxzYKFhbKY8f/0HZ2mmPrNd+4953z3O+ee60SjUQfxyqUc85P7GjtQqW23Ncf016LR+eunD7KvL+D/Z/xSJBJZk0aCXOAcc1hBqjVwFocMDhPviEfEM5zoQ1aRjXKpUib48YYZbb/AayU804TXxF1MCK7HicN4xbRd6iI2tV2GR3is/lP0yRiM6L06NKECe9hHG7qlcwE71sY+xCQ8RgBbmMQGPnArW4B3hKn4nrhuEm7r5BqEYhJeYgxBzONJKrT6gyRb/10yF8vcPNB2Eu0rPGuiG3zq0qTSKV16SF+ijPliXo/Od5t9q7GemKF71o8hBpmz14wiPXvSH6BPXmKV9seZBPV0dBGLie3ETD0CLfpU6UuEz4zX6EMyBn6Oi0nKX6uevwImd0rUN9iLNAxKVbIsYop+MXlSGbIwigZN6JI/D/KZUKpLkoS5UjGqkaNtqTof6bqnJSjUOV7zdX0DzJ13E7NedSkAAAAASUVORK5CYII=","aspectRatio":1.7160493827160495,"src":"/static/9a9a4d79f9601aec62b8885aeb907eb6/cfb3d/rutan.png","srcSet":"/static/9a9a4d79f9601aec62b8885aeb907eb6/e1fed/rutan.png 75w,\n/static/9a9a4d79f9601aec62b8885aeb907eb6/cfb3d/rutan.png 139w","sizes":"(max-width: 139px) 100vw, 139px"}}}}};

/***/ }),

/***/ "./public/static/d/3597247544.json":
/*!*****************************************!*\
  !*** ./public/static/d/3597247544.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAACbklEQVQ4y+2UTW8SURSGT9OFCaN7d/4Ay1eHUrXawqB8TMGPZEitujDGX+JGF417rKmFxMRFTdpIGgP4I+qiQsWoK5qYaGQGpszcucd3iiVhXRYuvMmb97J58hzm3kuhiBoPhoLnaVIrHI1xKBJf8/dXk0/OJTPrgUR6PZDMvAy024cBx7EV07SUnoV0u4rFrAze7gR4MafIworCy0VFIqwbZ7E/Q8FwiOcuP/ilZcv7iXSpCeCnRPqF3/vtL4d7ALYAbALYBLAFYBPAjwC2AGwC1mQ/unGA3qOZ0EVvfuERX9dfs5bd4FTuFRrJbTCAHmM5jstCCBYDhx38BpA5mWe+fY+5sDIWAGc4fuWh1LKbAoYezDwY+u0CaMFQwlDA0IOhB0MBYI+Xch4MBay8YQy/xQkQVpsMIAMk8R/6LQDsue4RAygBlAAygBJAG0AGUALCyKgnBRzlP/DfAf5tY/SVPQBdAIUPwjn02wHQxDn0AHQtC2ex2xUAugBaAAoAXdaLYhjDb9e/KXJ+4THfWH7DKb2MG1NBV9Bl/vrtB48tKYe1XWXWCsx37jPfXB3L8C5fWv2uZSvvYdiAWQOGftfwOFRhWIdhDYZ1GNZhWBts7ezCsAHDhtSNBszqMPyAsasUVeMcDEfXJvZ84TnE86U+9/dRNTW9lHpGyXSJUpkSdTo/yXUG1O/3ybZtsns96jOT826XeDFD8tZd4rxBEuF8kfBRpsaAEVWbvqY9JYxMGJkOPnfIGdhkmiZhZLJ+d8kE8GhrmzAyYWTCqEhx1Mcjh8Lq8cjByOw09qcbORhWkzC8MNzPTsXmYqfi/QFiPUeE5oLm7QAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/2df040618c44b09ed1bb894646e5b6f2/11f8c/country-francia.png","srcSet":"/static/2df040618c44b09ed1bb894646e5b6f2/0c7f8/country-francia.png 43w,\n/static/2df040618c44b09ed1bb894646e5b6f2/c5865/country-francia.png 85w,\n/static/2df040618c44b09ed1bb894646e5b6f2/11f8c/country-francia.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/3622736579.json":
/*!*****************************************!*\
  !*** ./public/static/d/3622736579.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG8q4zRA82gyB//xAAaEAEAAgMBAAAAAAAAAAAAAAACAQMAERIQ/9oACAEBAAEFAjCWXg6EXc2WxAsfM73nU40l5//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EACAQAAEDBAIDAAAAAAAAAAAAAAEAAhESISJRA2EQcYH/2gAIAQEABj8CzZPxTQB2Fg2ypa+4WTIGtq3KB7KPaFRnx//EABwQAQEBAAIDAQAAAAAAAAAAAAERADFREEFhkf/aAAgBAQABPyHhcz3Oq3glOHS6dYavRGzjIYDc1+sA07rAMX71UiCF68f/2gAMAwEAAgADAAAAEOAIAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EACAQAQACAgEEAwAAAAAAAAAAAAEAESExYRBBUXGh0fD/2gAIAQEAAT8QfctNBZrBeJU1E6ghWgzUzyetnlv7bbK+omOkFpT85gR7NwT4ghMBXMlIo27MsdP/2Q==","aspectRatio":1,"src":"/static/2a0929d99ef0432992bc9c6a04201780/eadbd/julian-duque.jpg","srcSet":"/static/2a0929d99ef0432992bc9c6a04201780/f01f2/julian-duque.jpg 75w,\n/static/2a0929d99ef0432992bc9c6a04201780/1986a/julian-duque.jpg 150w,\n/static/2a0929d99ef0432992bc9c6a04201780/eadbd/julian-duque.jpg 300w,\n/static/2a0929d99ef0432992bc9c6a04201780/f7c4a/julian-duque.jpg 450w,\n/static/2a0929d99ef0432992bc9c6a04201780/9b3c4/julian-duque.jpg 500w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3780444341.json":
/*!*****************************************!*\
  !*** ./public/static/d/3780444341.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAeCcajVKcbjnIV//xAAaEAACAwEBAAAAAAAAAAAAAAABAgADESIj/9oACAEBAAEFAq2VBbuwDq4+gdQNmcz/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BK//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASn/xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhEEECMaH/2gAIAQEABj8CdqRXKOhbGp2Xx9xOP//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExcRBBUWGh/9oACAEBAAE/IWBs+e0NvLMWTj4jUcqjGU2lYVfTII01Gwe16f/aAAwDAQACAAMAAAAQv9BA/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQMBAT8QiXSBZ//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBEhMf/aAAgBAgEBPxC8IV3/xAAeEAEAAgICAwEAAAAAAAAAAAABABEhMUFhUXGRof/aAAgBAQABPxBXYQAIDkHmYihoArqiO2gL1AQmFZLxt9YmCwLDvX5O0NAfIGqWKaaxCVKwbfEdz//Z","aspectRatio":1,"src":"/static/f20f18519ec26dcc58db238dea01bd0a/eadbd/speaker_bnb.jpg","srcSet":"/static/f20f18519ec26dcc58db238dea01bd0a/f01f2/speaker_bnb.jpg 75w,\n/static/f20f18519ec26dcc58db238dea01bd0a/1986a/speaker_bnb.jpg 150w,\n/static/f20f18519ec26dcc58db238dea01bd0a/eadbd/speaker_bnb.jpg 300w,\n/static/f20f18519ec26dcc58db238dea01bd0a/f7c4a/speaker_bnb.jpg 450w,\n/static/f20f18519ec26dcc58db238dea01bd0a/6d7df/speaker_bnb.jpg 600w,\n/static/f20f18519ec26dcc58db238dea01bd0a/8c3c8/speaker_bnb.jpg 900w,\n/static/f20f18519ec26dcc58db238dea01bd0a/c9636/speaker_bnb.jpg 1283w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3861628944.json":
/*!*****************************************!*\
  !*** ./public/static/d/3861628944.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABvzaYC2E7Rh8CqQn/xAAaEAADAQADAAAAAAAAAAAAAAABAgMAITJB/9oACAEBAAEFArAFHmEYhNanE6saHU7ehiB//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgIBBAMAAAAAAAAAAAAAAREAAiIDICExMmFx/9oACAEBAAY/AlSofyVOmS30Z4iKhzmZQ97ODP/EABsQAQADAQADAAAAAAAAAAAAAAEAESFBMZGh/9oACAEBAAE/IVIDQviL50Z+SW89Eqq22BDVid6Yp8pqbVlEQJ//2gAMAwEAAgADAAAAEBwPgv/EABgRAAMBAQAAAAAAAAAAAAAAAAARIRBB/9oACAEDAQE/EIqI5n//xAAYEQACAwAAAAAAAAAAAAAAAAAAARARQf/aAAgBAgEBPxDS1P8A/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFBUWGRsf/aAAgBAQABPxAyMgChQX5iRWDr2j1jdWexkdoC6rNv5irSGnAdPXOLSbJzcSCa2k1N4KCF5W4a8ACzP//Z","aspectRatio":1,"src":"/static/b3f0b78e1681b54ee902dbb7af1600a6/eadbd/speaker_diego_paez.jpg","srcSet":"/static/b3f0b78e1681b54ee902dbb7af1600a6/f01f2/speaker_diego_paez.jpg 75w,\n/static/b3f0b78e1681b54ee902dbb7af1600a6/1986a/speaker_diego_paez.jpg 150w,\n/static/b3f0b78e1681b54ee902dbb7af1600a6/eadbd/speaker_diego_paez.jpg 300w,\n/static/b3f0b78e1681b54ee902dbb7af1600a6/f7c4a/speaker_diego_paez.jpg 450w,\n/static/b3f0b78e1681b54ee902dbb7af1600a6/6d7df/speaker_diego_paez.jpg 600w,\n/static/b3f0b78e1681b54ee902dbb7af1600a6/2e726/speaker_diego_paez.jpg 810w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/3927946743.json":
/*!*****************************************!*\
  !*** ./public/static/d/3927946743.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFe0lEQVQ4y31VaUxUVxjFGtP+bxpjE238Uana1FpNNfYHEUFkGxhkhk0GBoZ9ERHKIJsiMEhBdqUitKBEFikiW1FALANirUgLGhGhBRRBARmGWd979/Q+XErV9iYn77x7v++8c1/eO9fEhA4AS+CHVqvh+UqTl4PydRTlFOd4vmx+pU6nW+KEkNf9/5AX/D2KFTyfGH/0PuWxWq1W1dDQgitXOrCgXligc3EUH7ysX8H3LOt/QTiOW/GGKyeKe/1/3EF0TDSijrkwZ6oTmfxTBejr76NLGKIQLXfLa7y+WbawhaJ5fGIcmdkZ8PaWMdlnfbjOB3I030tCjTKTKyuvYIpLz2D0r1FeuJVi23LhV+RDiuyZ2Rm2ovI8fP2k7OGoQ2xK8gmUXPIg96crycDkVVJ0NYQMDg7j5q+32NyCPLamthqTk48J7S2kWP1KTMowzJOu7i5ERIYjLDyUUSgUJD09DbHyeJKYGkgqOr1Q3CaBNNyR5OQUkPGJx5iYmCTtHdeY/MJ8KHu6oDfon1GtMF7waU7+Sbi4iQzh4aFELo9BcEgQ8ZRIiNN+ZwgEYrh6iCF2F8LW2hEisQuOHksmjU3NpEvZDSpKqFtjwel8sCyrNjEajSNevp6wsDbnjh5PIt4yCcnKzoQiIw2p6Sk4nnYU8YnxiIyKRGyCHG6erggI8UdE1EF8eySaZGSdINaCfXwfDAbDhAlVHZX6eWH3XjOuqaWR1NX/BIYxQqfTYmx8DIuLi2houozq2irI42NQWVOJa9c7UN9Qh+4eJfIKc8nWHVuIN9Wgr26SdzgaFBYIe6Ed5x/sB19/b0j9ZfAPCUBYRCBkAV4ICpXBy8cdByODYedoBeoIQhdnhEYEQ+S2n+y1tSSB1DV1OGmi1WlHko4lIiUlmcsrOE1dJMNHag1zyx2wF7tB5CWFvcgVYokU0oAQSPxDYGljDg/xHrrlJBQWFSMtLYXEJRwB/QmevBY8HBXHZWUmo/fyIRgfyDDcLUFVjjOqM51QW+SOmtPuuHzBD1XFEnR/vw+qKwL01oYjMz2JRMkTXgpqqKBW+zA5JREXyw5yMwN+MPQ6QNVqDWO/K/CbEBgQASOeYDptQG450nsxDDeE0N7zhOG2Ex7X2ZHqXBlJSJRDo9VOmcypjcNVRWEw3hZwxlEfqJT7Md9ohYVueu12xny/BPohLyy0WGHmZ3vM94iw0CuCbliKhZsuUDdbEeMNW1JRHIq5eT0vyAzXFoXgeZ0Zp7omJIu0WDNwAJphGRba7UDazDHS6o6RtgPAIwm0Ax6YvbQXqjY7qG+IoL7jQfQPJaTqxzDM8oIzKuP9mkI/cEobbvF3T6JSOhNVJ93qkCtUnY4oyQrDLo9T2C46jpKz4VD3uYLrsoH6thtUvWLCm8CQG6k440eezememDAsJi+UZ6Kz0sLAjUkJ+pyhb9pNWkt9iEOAAusdz8FUfA7r9iRjjVkqBP6paL0YRDBBawfdoGk0J+25243lpQoYWaiX/mWtnnna2XUd5acluFpqxwRHK8gG8QWstfyOrLM9QTYKC/CZQzY2uJWT9YKzZK2FAv4x8fShtkxZujOuK3+BVs9OUS3fVwHxEUXu1PQsW1pRjU02cewntvmsqSAH+ywOkdKdliRvlwOxFmaRzeIfsPqbaPZTs0C25Hwlpmees3xS8Yn1rjz8kqJpZupPxGacgstOB6bn803c4Nfb0L71K9SabuaEO50YuSIXs9NjfB42UnzxVh6+I7HpB4fBB3fv4KTMG2UbTZncDRuZNB9vDA0uJfZdvua/EvudZ0pL19gqyqMXCTfX0liP5oZ6aAj3nJ9r7Li/6n/PlH+depq3Tr01FOcpKig+Xu5KQ2vf7P8bg0uJ1P0ALH4AAAAASUVORK5CYII=","aspectRatio":0.8648648648648649,"src":"/static/12fc0c2192df73ab763c2d0366e97c75/57ff5/logo.png","srcSet":"/static/12fc0c2192df73ab763c2d0366e97c75/0c7f8/logo.png 43w,\n/static/12fc0c2192df73ab763c2d0366e97c75/c5865/logo.png 85w,\n/static/12fc0c2192df73ab763c2d0366e97c75/57ff5/logo.png 170w,\n/static/12fc0c2192df73ab763c2d0366e97c75/47fa1/logo.png 255w,\n/static/12fc0c2192df73ab763c2d0366e97c75/d4345/logo.png 340w,\n/static/12fc0c2192df73ab763c2d0366e97c75/56381/logo.png 510w,\n/static/12fc0c2192df73ab763c2d0366e97c75/a3fa0/logo.png 800w","sizes":"(max-width: 170px) 100vw, 170px","presentationWidth":170}}}}};

/***/ }),

/***/ "./public/static/d/3985006560.json":
/*!*****************************************!*\
  !*** ./public/static/d/3985006560.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACp0lEQVQ4y62T20uTYRzHnyZeddE/0FXMbak7Od/NuZskMy2bbotQJ4YK4SHMU9h50lp0kIKii4giEIk0Qk0vmtLEFoEXZW4ewBOlSUEq6Q5u77v32/OqeWdt2Q8+z/e5+vD8nh8/UnqydE/y2SvxhNYcERE/TZ6Cf0Gs2kXUqbqVDA3TKAgJQHZcMrkSJcaCrzhR1ofM3IGwsdAVySt0gcLHxgBvsjqJIkHCKRscOPViCLPl9cDhfCAzDzho3MgYIXKJFOoaW0T2doFV9ni5e/aH3FqTjUPzdS500c6xl+wcFz3sulB1phna/mloejwQOydxfGge7uUAhBLOnxQf+KjYEir7Z6Dq+gRDrxcJL4eh7BrBjY+fsbS0DCwvwb+6Cp/PB/9fIAoqVNbYkPZmFlXvpvBkYgFZfRPQ9o4iocsDk3MUg/efgq2/AE6gYTO3gSikUsipMMf9BWPfFwFuDXc981D3eKGnr933agxMqxszuVZAlwHekAWkH9qWjaHQlpOc03jgmYNr7gdKBich7RyBrNuDMtc4xh61IWK/ibCjBazj9h9ZFwota2nL6XQoqu4ROhwvdLTlx+MLCNC/iwT8WA2H4YuCraEwfVNQUJHs9STK389ifHEFYEPwBYNYCQThDwTg2x7+d24KbRGx+xur7/zAPjvfwqKqjkVtExuqbmS5041sJAaoUBLR1F/D5VYXfEUVQLaJYgGyzHRrYofusgrlRywTsJS0ITu/I2Qubqc72c6brRsZDWbrc5odvKW4lag0WjAaxkH+V6lSGDA6wy3hflWcGO9X6EV8kk6EWEim7GdEYA6IqFCLVK3+jiBUSxLjhssqCSrrYqeilqC6gZCUVF1Ql2Y4JwilifK4gqLinbV8LM+0N+eocbdwN+abd/yFvwBWzENHKheYMwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/4233723f9f3bc9a276558d11f096c765/57ff5/country-puerto-rico.png","srcSet":"/static/4233723f9f3bc9a276558d11f096c765/0c7f8/country-puerto-rico.png 43w,\n/static/4233723f9f3bc9a276558d11f096c765/c5865/country-puerto-rico.png 85w,\n/static/4233723f9f3bc9a276558d11f096c765/57ff5/country-puerto-rico.png 170w,\n/static/4233723f9f3bc9a276558d11f096c765/47fa1/country-puerto-rico.png 255w,\n/static/4233723f9f3bc9a276558d11f096c765/d4345/country-puerto-rico.png 340w,\n/static/4233723f9f3bc9a276558d11f096c765/56381/country-puerto-rico.png 510w,\n/static/4233723f9f3bc9a276558d11f096c765/6e610/country-puerto-rico.png 512w","sizes":"(max-width: 170px) 100vw, 170px","presentationWidth":170}}}}};

/***/ }),

/***/ "./public/static/d/4017003676.json":
/*!*****************************************!*\
  !*** ./public/static/d/4017003676.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABcSAAAXEgFnn9JSAAACkUlEQVQ4y41T30sUURSe2dF21R1nxp395azMrkZEPUSKIQq9Rm1gFojp/qgsM8HEpMheilChbFt3KynyJYheDHqIQrPNzVDBit56CXqrf2P67uydYWZc1y58c84995zvnnPPGYaxrHPFvA5DT6/mGeciNoA1dMN/27Ie2PUcj30ACIPA7/Qpd6kRaHOErAXU9GquCVIBmhHcBr/jsO1zXlw2OysZgmRd//zIPfB+VuxdnPKUMspVAydBvJ8mwu5GWoWAOqq3JpYedI78fKFc+/va1//2nnz5x4KLEu+xVsZUaIabyq7kSraDutQA9UQ5kZ+ouvr7FbMjmf2BS+lj35D88LCH6GI4dkYMR4tiKLoGxImtIdLiSixnjJiKhHo5qcJc68Wtp4cp4ZYQVA+BTAYUavu/DCFNwktfnxFCFsHfQLgXZB4gZCfctctmyTJKPkV0qTHWD6INYBPo1ktuanGhQZVLLtOUo6mP2XbqInAMr49R98IkN/T9eeUMHVmSsamltvbEUqZz/M9i4K62xg+8m/UPbsxz1rEp+6eUGew6BPhooAeD7et7M8PTQWdhI38LHey8fbDxLqWagip5L+bg6WP6HgPtTRfmoqlCNoLS/cnlTCOa1QbE059yB4jPkeFeVlKaCQdr5TINzqVpGnP+y2P+wvoTZfTXywj+EnmnJxODDjIhpNZDDxgOsa4OMkLWi7z6R1KkO1qRFQKqF/4khgUkZ4YicAXoAaaBPjwBkYPAPOZuAhiFfguYxFkc8iwwTvYAOXObV8OBh2GIECH1G9Rhil4yjfMxyNvADHAduAkMAyPwHwPuQxfMZtCSORzUVHgjjlbDUVQDLsphb4pBSgNZ69sSicu2+TmnxJD/ALjKDHVy33K7AAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/31b7a967a657b7a01a6abb0b9b65b8c4/fbe2f/community-partner-changelog_stack.png","srcSet":"/static/31b7a967a657b7a01a6abb0b9b65b8c4/e1fed/community-partner-changelog_stack.png 75w,\n/static/31b7a967a657b7a01a6abb0b9b65b8c4/08283/community-partner-changelog_stack.png 150w,\n/static/31b7a967a657b7a01a6abb0b9b65b8c4/fbe2f/community-partner-changelog_stack.png 300w,\n/static/31b7a967a657b7a01a6abb0b9b65b8c4/ea55d/community-partner-changelog_stack.png 375w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/4121633037.json":
/*!*****************************************!*\
  !*** ./public/static/d/4121633037.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAHcyKVJHWMc1DETpOJb/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAwQREv/aAAgBAQABBQITrNr5F0WAPazWLpZJUoLeB67P/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAC/9oACAEDAQE/ARmZ/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwGMxH//xAAbEAADAAIDAAAAAAAAAAAAAAAAARExMhASIf/aAAgBAQAGPwI8zTZm7tOzyRpsheP/xAAdEAEAAwADAAMAAAAAAAAAAAABABEhMUFRYXGB/9oACAEBAAE/IeMSLINb19T5/hkFV2VtlRAfOAPkV3JnGS0s2/YIWvZ//9oADAMBAAIAAwAAABCIGEP/xAAXEQEBAQEAAAAAAAAAAAAAAAARAQAQ/9oACAEDAQE/EIFZnQvP/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQBBMf/aAAgBAgEBPxBHLskJTL//xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMUFRYZFx/9oACAEBAAE/ECGCqcYST58MWtp/A+TCZ4gmkEC984lQ5zjqSYcPESKEDF9bw0yI6N5fRLu246wlXNPwz//Z","aspectRatio":1,"src":"/static/bc76eab9c9f3b0110a72060c761d16f0/eadbd/hamilton.jpg","srcSet":"/static/bc76eab9c9f3b0110a72060c761d16f0/f01f2/hamilton.jpg 75w,\n/static/bc76eab9c9f3b0110a72060c761d16f0/1986a/hamilton.jpg 150w,\n/static/bc76eab9c9f3b0110a72060c761d16f0/eadbd/hamilton.jpg 300w,\n/static/bc76eab9c9f3b0110a72060c761d16f0/f7c4a/hamilton.jpg 450w,\n/static/bc76eab9c9f3b0110a72060c761d16f0/9b3c4/hamilton.jpg 500w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/4163863290.json":
/*!*****************************************!*\
  !*** ./public/static/d/4163863290.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEg0lEQVQ4y2VUeUzcRRSe3eWSshzFgjVyEyoIchiu5Sw3u8vuAuUoIEcpLOBSKrRFECilFElT01oJ2oqWXqSNLYci1RJtkdBaSbQ1Ro1pY2pqYpE/jDGt7i7z+X4L7G7jS77MvJn3vt/3Zt5vGCOTipXMiSAVK9iaLyZfzNaM/BbCYYKT4DuJlAIkQt56/vr8CYdGEUFiRZRNWJSK1ZCKNQTlfUKN1b5YuvbhdVEmW1WntFkPdBIpQsmfkIpVcDaRKQ0E/apvIr5BMalmYiu1Fqlk7g6aTc6SvGPOEqXBRZKPDUy+QjASBBIQyYojyzUIip0lKrjY5I252qoCrBSvTp5iuQ5E0uLI5EuOTAV7lgMHlmOQp3VwZUYnclLbuTztNS5P70CBvIeIVEbaX7FnClDOIyI6SB91MSsjsh0bWD6ecS6Cl3uJ3s+zjIcF1CI+Usfjwl/h8RE6RAVrIYts5s+6FnE/z3III60ZaIQTKyDFygPWpTYylglSoz9/ZhZz12/zx/885n3dpzFyYtqErvYRVBQP4OzoZ7h08TofOjbOJy7PI8SvRu/AlEL5b5gJ6Ry0DiR/i3eVUZPbzRtrj6Jz7wiK1ftRVtiPQkU/clK6oKCSM5LakJ3SjtL8g8LI7Vi26byp7EPM6lYbhNujAzfasEwuYukQsa1gLBdilgV/rwwE+mTS2ebSWgbsqBoJgcjWOkAjXJiFkBYbpCJTexjplvlGBxUFaxAemoWhCzJM3IrG2BcxGBiWISwkm/ZUcLOnFpLkCUSGtR59UuFqKwiECs7oliPDM/DlL4m4+SAJ4wupuDS/FZ/eScHkzRREhGWSUkGdQsj5P6Gg0M22ANQ+RikRBvvUoUmnxe49Nago243SbW3QKJtRoG6CbpcWO+saEBHUCFc7lZBjcLMrFIgthPYsWyvc8kZ7tTEhSsertw9yTXY/gjY3I+aFDiRFvY7okL140f9VhAe0IiupG7r6tyCjWEGhkGvLsiyEYYG1TSeGpvHr/WX9RxOLeN6nmsdHaXl3fzUuXN2OUxMleP9DAWXoHaxGbHg9fylEy8fOzOHe3Yf6t49OgfrV0jZpstbKpYd/A/gTc7dO67v763jxyzIE+CbyhlYZH3gnBj1vxqC0MpH7PpfI80tkaO/ayWc+f8/A8Ts4B+oqj/QyK7NJS2jZsa9T99vt729AsKW/FgzeT1fwqIhMnL0q48fPJXFvzywEe9fjwfKCkUJWfr53Bz0HWh9tU+8jsgjpOpcVb7BrR+v5I+8OfWzsaBtFRVWRcfRKtHH2xxhMfBWLQ8NxK4WF5YaGmuPo6zqHwb7LFxmrCrTkJ5t/PranZdiK2S3U3Tl6+tRMHBb/iMXsT9GGya9j9Fe+i8XIVDx8vWK/Ycw7az169IMpyk21PDmT4/Omua9Hmejk8Iz5gd3iL9e09Sb/8Mm3Cbh2V4bOwaTl2OicXfiXfiQyKlscHlQnXpszF1uVhXSzS5FZnyMrEXcdThatetckCnX6/uLytJOMlXpYWk0l8dtUa5p7OBWa38L/AIgCF/nzPndCAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/64aea62a828e75267d7cdb2d5842568f/fbe2f/community-partner-nodeconf-argentina.png","srcSet":"/static/64aea62a828e75267d7cdb2d5842568f/e1fed/community-partner-nodeconf-argentina.png 75w,\n/static/64aea62a828e75267d7cdb2d5842568f/08283/community-partner-nodeconf-argentina.png 150w,\n/static/64aea62a828e75267d7cdb2d5842568f/fbe2f/community-partner-nodeconf-argentina.png 300w,\n/static/64aea62a828e75267d7cdb2d5842568f/09dab/community-partner-nodeconf-argentina.png 350w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/4206163770.json":
/*!*****************************************!*\
  !*** ./public/static/d/4206163770.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAACeElEQVQ4y62Uy08TURTGLzZR9+5LIsGItcN0hoeVaimtfUxRBFpsmxRjRNFEXRgkNoDy0hIxmm54aa0imLjSSKIBXeo/4B4tRsSgJibGRtrO/bwzAq2Imqbc5JfvnO+cOXNmFpfoOGFrnduoIey8edVYgLlAAeL+nKBzigYImBKOF+dLdMIpslGnuERET3vNO3wNPk3O+p/TuH+GbZkbcUX9L5hOEe12Pj066AB+HAMWm4HPefClGaSwiEek3y5jMZhOzgbS8tu/EP9HLQuiZQOHB2wU3/wy5ptkLBzJ8HGZD8x/72V1b8ZbWB+yc5cePq8veb1/4PuVSz2Jq5d7Vwl39yV6O7oTN8PhxEhkMBG5NsBypadvmd4/IHpOR4XKVlSaJ1GxP8qIqVSaYxCqomgKPsLZthkEW57gzPlpNDMtM0XV+kpvNmQ3p4PR1EIdUowecA5Tu2uUOhgW2xANHp2goY4panOM0GrrEK1mXtuFx/RE60M1d0ijan826oaGqlaUOx+g3B5lsDc5YjBYozjZ/gyWhknwNWwj112ItjswSvdwOjSt9q0H2cFxOG7yyPelrtSY82LqtjP0C1coNX6oU1UVZ0YVP7rGW4FoOR4j+ywUtQ0U0mEKd30G15r8N3/9GilkAyMmq4xaX2pJ8qbS2bjX5P/zGUSr5+VbZjtQHwTqAnlDinkBnXvNr3HQF01KngkqecZzBW4Ge5bpGBHEChRxhq4Nu214oQI8L/Yr8Q1TzeYlyaOB5M0Nt1dDJe8mRYlQtgfsTgwrA42GMs1Lq0TY6rkhNa7GRM+Ln/Sl4jllIBusYXF+n8yVitvYoC3LA/P+hT8BsiwBKRDjwvwAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/c196015694a29b0893e5dc9fc8663897/11f8c/country-venezuela.png","srcSet":"/static/c196015694a29b0893e5dc9fc8663897/0c7f8/country-venezuela.png 43w,\n/static/c196015694a29b0893e5dc9fc8663897/c5865/country-venezuela.png 85w,\n/static/c196015694a29b0893e5dc9fc8663897/11f8c/country-venezuela.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./public/static/d/4282232400.json":
/*!*****************************************!*\
  !*** ./public/static/d/4282232400.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/2gAMAwEAAhADEAAAAeGK/J1kVEOmxGYLP//EABsQAAICAwEAAAAAAAAAAAAAAAECABEDEiEE/9oACAEBAAEFAjdsrqvZyUJq4jKFw+RBrZM//8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBQf/aAAgBAwEBPwFccR//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/ASPKz//EACAQAAEDAgcAAAAAAAAAAAAAAAABAhEhIhIxQVFhgZH/2gAIAQEABj8ChIMau6EtT0ykq1K7FrB3I52pMn//xAAcEAACAgMBAQAAAAAAAAAAAAABEQAhMVFhQXH/2gAIAQEAAT8hFACJu4tIrPMLAgRh3GJoXjja5EYYCIkLPo8lU6fJqj1P/9oADAMBAAIAAwAAABAY+ID/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExUf/aAAgBAwEBPxCJj6C0Qf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAYSH/2gAIAQIBAT8QGyk6W1//xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhQTFRYYHw/9oACAEBAAE/EIds7YAdzbRqM19MIAB8CXmAGWScd/jEXjwRa+yYA6DtCfHnIcaKtZsGLUkiFbE5iYSYqSC+5n//2Q==","aspectRatio":1,"src":"/static/218e0e18ecdeadcc63b844a4255d654a/eadbd/speakers-ujjwal.jpg","srcSet":"/static/218e0e18ecdeadcc63b844a4255d654a/f01f2/speakers-ujjwal.jpg 75w,\n/static/218e0e18ecdeadcc63b844a4255d654a/1986a/speakers-ujjwal.jpg 150w,\n/static/218e0e18ecdeadcc63b844a4255d654a/eadbd/speakers-ujjwal.jpg 300w,\n/static/218e0e18ecdeadcc63b844a4255d654a/07544/speakers-ujjwal.jpg 340w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/504763219.json":
/*!****************************************!*\
  !*** ./public/static/d/504763219.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAZwhU612YDP4VcJ//8QAHRAAAwACAgMAAAAAAAAAAAAAAQIDABEEEiEjMv/aAAgBAQABBQJU9p6NdY6FK+UoFw8k7c5L6ahVv//EABgRAAIDAAAAAAAAAAAAAAAAAAARARAS/9oACAEDAQE/AcCpyf/EABcRAAMBAAAAAAAAAAAAAAAAAAAQERL/2gAIAQIBAT8B0V//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhAhAiMYH/2gAIAQEABj8CH34cbQ2JxZSyI04P/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPyEyicblRrTkYXR24Dt4k64QkbQFZjG+CekLKbvJ/9oADAMBAAIAAwAAABBY90H/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREQIVH/2gAIAQMBAT8Qh13FPY+x/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREAEP/aAAgBAgEBPxAQTqG//8QAGhABAQEBAQEBAAAAAAAAAAAAAREhAEExYf/aAAgBAQABPxADgZXKDvHzWkDq7fzjn7Ggbex9X6MLnYsOYBBy/vTCiMwEzzpGomBzQ/TMvnJ2BVfU7//Z","aspectRatio":1,"src":"/static/c3e54ebe4464e153b51cfb8d4b501a5c/eadbd/sebastian.jpg","srcSet":"/static/c3e54ebe4464e153b51cfb8d4b501a5c/f01f2/sebastian.jpg 75w,\n/static/c3e54ebe4464e153b51cfb8d4b501a5c/1986a/sebastian.jpg 150w,\n/static/c3e54ebe4464e153b51cfb8d4b501a5c/eadbd/sebastian.jpg 300w,\n/static/c3e54ebe4464e153b51cfb8d4b501a5c/f7c4a/sebastian.jpg 450w,\n/static/c3e54ebe4464e153b51cfb8d4b501a5c/6d7df/sebastian.jpg 600w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/667525985.json":
/*!****************************************!*\
  !*** ./public/static/d/667525985.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAAB5lOlAuc0RmoGoxuf/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxESEyH/2gAIAQEAAQUCRGJZGrmyrJbnX5CxDudXkZ//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAwEBPwFcpWLP/8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQIBAT8BKf/EABwQAAICAgMAAAAAAAAAAAAAAAERABAhIjFBUf/aAAgBAQAGPwJAMzai+/Jws04K/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUWH/2gAIAQEAAT8huD8PIeZ3io24iuAtO1S85SOXWfZAQdIo81uUdz//2gAMAwEAAgADAAAAEO/Awf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQMBAT8QCqMFf//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExQf/aAAgBAgEBPxDeFM0o/8QAHRABAAICAgMAAAAAAAAAAAAAAQARIUFRYTFxof/aAAgBAQABPxBtwW05iiUnJfHuX7oFQObx5VGauboUbEDb6gAqh6lVrIRCAHVHUVULE//Z","aspectRatio":1,"src":"/static/0db914895cfc90e711904aebef93d9b4/eadbd/speaker-kevin.jpg","srcSet":"/static/0db914895cfc90e711904aebef93d9b4/f01f2/speaker-kevin.jpg 75w,\n/static/0db914895cfc90e711904aebef93d9b4/1986a/speaker-kevin.jpg 150w,\n/static/0db914895cfc90e711904aebef93d9b4/eadbd/speaker-kevin.jpg 300w,\n/static/0db914895cfc90e711904aebef93d9b4/7ef6a/speaker-kevin.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/755544856.json":
/*!****************************************!*\
  !*** ./public/static/d/755544856.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"NodeConf Colombia 2019 | June 21st and 22nd, 2019 - Medellín"}}}};

/***/ }),

/***/ "./public/static/d/82316795.json":
/*!***************************************!*\
  !*** ./public/static/d/82316795.json ***!
  \***************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVQY002Q3yuDcRTGT0u5sLSxhK1NY2MxmWISuZiLSSslUsqWGyOaXy21hCm2sbRRVnqVzY/UynYj+TuUG7du7N27H3Lr9ZxMOfXpec7pe55OX7qJk1k4qZ33zpLF76XxeJCchCqVviySlB+WJKmpUCgooR3ACrSgHTMtv4On/0qPTy9dmYfMdjabXXx9k61XF0v+5TlyfMvyaD6fC+DhOpanwRj8HlgFO+htvA+tQq+A/oamkreedDp7KgjJjCCkwpFwaN8zpXDKsqzMfbybKpepQRuWDMAMrwLd8NXQeu7pr+6vt/oSZyvu8/jCSCy6NnkYdLs0NaTChQZRFPs5CGhAMwdCjVBjJZi/gJXnetDKmQrhiFzPdyRGAuTjnofFYlHHV4BOYAN1CGmpLOrhG4AJNAI1K/83JS83hhLxGW8sNHh8sDuxGQ37HBxYLn9yoB0PB4AdnsN08D0MfC+wwCvoX/0Aa6cWQAjh0UwAAAAASUVORK5CYII=","aspectRatio":3.3260869565217392,"src":"/static/89a3ca52d879850b7972fc0f3d52781a/fbe2f/10hotel.png","srcSet":"/static/89a3ca52d879850b7972fc0f3d52781a/e1fed/10hotel.png 75w,\n/static/89a3ca52d879850b7972fc0f3d52781a/08283/10hotel.png 150w,\n/static/89a3ca52d879850b7972fc0f3d52781a/fbe2f/10hotel.png 300w,\n/static/89a3ca52d879850b7972fc0f3d52781a/f9c4b/10hotel.png 306w","sizes":"(max-width: 300px) 100vw, 300px"}}}}};

/***/ }),

/***/ "./public/static/d/960045303.json":
/*!****************************************!*\
  !*** ./public/static/d/960045303.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAN2AAADdgF91YLMAAABvUlEQVQ4y63Uz0sUYRgH8McGrHv3FRSLZZnZd2d0aXNDUix7p7ByBttZ3ehSnTp68QeIimgQtQni0hLE0j8geKiO9Q90rmULOpgGnkRndt9vz1h4X19f+PA8p+/7Pi8vL6Us+8KYmzOIV/3LeAd+BB1oFNqi/lWKe7KE8yuZsp/SWa3epIOF6aGf2J/aDr8XPvJuH/iUp/GJbVGiWzQ3n98EDh8Bv0vAnoY/JVBXj0B5eaSFvcmoWS9EfMKIdzqdRhAdB75eHlHYnVQcqFQj0BIHqldLN4CdKRx9C9CsF7XEd4jNtWGFw4kWdjwe3ddCl5ImHhYnmpWXi2F5dS5cX5vXQmY6pTL9T5DNv0f/QJW91UKmlYKTf6xysqZyt96wqha6bFkoDfhhRS4clEdnDtZHZ7VQwhLYuHa9hdv3Q8i7EVw9lDBFqzLIz+Yev/SxgBW1UK+wMXt18CvuPKiG0qsp6b1rm3tca1wrZDtZ9FiZuTP7bYSdhRDOUty/yA91HknPgPTb4/qGkv65uJLddwX8J67EgblMn/F5WBJcrz1y/KQnUzi7Ztp5FgdysMG93shW2rnIQef/B2pf4V//chyWWiiZPAAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/857edf5884d3f1fd67c9b91f3ad3d823/11f8c/country-colombia.png","srcSet":"/static/857edf5884d3f1fd67c9b91f3ad3d823/0c7f8/country-colombia.png 43w,\n/static/857edf5884d3f1fd67c9b91f3ad3d823/c5865/country-colombia.png 85w,\n/static/857edf5884d3f1fd67c9b91f3ad3d823/11f8c/country-colombia.png 128w","sizes":"(max-width: 128px) 100vw, 128px","presentationWidth":128}}}}};

/***/ }),

/***/ "./src/components/about/index.js":
/*!***************************************!*\
  !*** ./src/components/about/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/about/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var About =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(About, _Component);

  function About() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = About.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "About-component",
      id: "about"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "About-title"
    }, " About "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " NodeConf Colombia 2019 is the first international event focused on the entire Node.js ecosystem. It\u2019s a non-profit event, where our attendees will be sharing in an environment of inclusion and respect, having access to relevant information through talks, workshops, and great experiences with the Colombian Node community."));
  };

  return About;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/components/about/index.scss":
/*!*****************************************!*\
  !*** ./src/components/about/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var Footer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Footer, _Component);

  function Footer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "footer-component"
    }, "NodeConf Colombia is an event by Mantid LLC - ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "http://jsconf.com/codeofconduct.html",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Code of conduct"));
  };

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/components/footer/index.scss":
/*!******************************************!*\
  !*** ./src/components/footer/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var _images_image_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/image-logo */ "./src/components/images/image-logo.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/components/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);







var Header =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Header, _React$Component);

  function Header(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.resize = function () {
      _this.setState({
        width: window.document.getElementsByClassName('header-component')[0].clientWidth
      });
    };

    _this.scroll = function (e, anchorId, offset) {
      if (offset === void 0) {
        offset = 125;
      }

      e.preventDefault();
      var menuItems = document.getElementsByClassName('menu-item');

      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
      }

      if (document.getElementById(anchorId)) {
        var target = document.getElementById(anchorId).offsetTop - offset;
        window.scroll({
          top: offset === 0 ? offset : target,
          behavior: 'smooth'
        });
      } else {
        Object(gatsby__WEBPACK_IMPORTED_MODULE_2__["navigate"])("/#" + anchorId);
      }
    };

    _this.scrollMobile = function (e, section, offset) {
      _this.scroll(e, section, offset);

      _this.handleToggleMenu();
    };

    _this.handleToggleMenu = function () {
      _this.setState({
        mobileMenuActive: !_this.state.mobileMenuActive
      });
    };

    _this.activeClass = function () {
      return _this.state.mobileMenuActive ? 'active' : '';
    };

    _this.state = {
      width: 1000,
      mobileMenuActive: false
    };
    return _this;
  }

  var _proto = Header.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      width: window.document.getElementsByClassName('header-component')[0].clientWidth
    });
    window.addEventListener('resize', this.resize, {
      passive: true
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (this.state.width > 768) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "header-component header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#home",
        title: "Home",
        onClick: function onClick(e) {
          return _this2.scroll(e, 'home', 0);
        }
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#about",
        title: "About",
        onClick: function onClick(e) {
          return _this2.scroll(e, 'about');
        }
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#speakers",
        title: "Speakers",
        onClick: function onClick(e) {
          return _this2.scroll(e, 'speakers');
        }
      }, "Speakers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#venue",
        title: "Venue",
        onClick: function onClick(e) {
          return _this2.scroll(e, 'venue');
        }
      }, "Venue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_image_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "logo"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#sponsors",
        title: "Sponsors",
        onClick: function onClick(e) {
          return _this2.scroll(e, 'sponsors');
        }
      }, "Sponsors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item schedule"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/schedule"
      }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item organizer-team"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/organizers"
      }, "Organizing Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-item tickets"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#tickets",
        title: "Tickets",
        className: "tag-tickets",
        onClick: function onClick(e) {
          return _this2.scroll(e, 'tickets');
        }
      }, "Tickets")));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_3__["Swipeable"], {
      onSwipedLeft: this.handleToggleMenu,
      className: "header-component header mobile-menu-toggle mobile " + this.activeClass()
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-menu icon-three-bars",
      onClick: this.handleToggleMenu
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "main-nav end-nav " + this.activeClass()
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "auth-menu mobile-menu"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "logo-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-menu icon-cancel",
      onClick: this.handleToggleMenu
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "items"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_image_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "logo"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#home",
      title: "Home",
      onClick: function onClick(e) {
        return _this2.scrollMobile(e, 'home', 0);
      }
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#about",
      title: "About",
      onClick: function onClick(e) {
        return _this2.scrollMobile(e, 'about');
      }
    }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#speakers",
      title: "Speakers",
      onClick: function onClick(e) {
        return _this2.scrollMobile(e, 'speakers');
      }
    }, "Speakers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#venue",
      title: "Venue",
      onClick: function onClick(e) {
        return _this2.scrollMobile(e, 'venue');
      }
    }, "Venue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#sponsors",
      title: "Sponsors",
      onClick: function onClick(e) {
        return _this2.scrollMobile(e, 'sponsors');
      }
    }, "Sponsors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item schedule"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/schedule"
    }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item organizer-team"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/organizers"
    }, "Organizing Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#tickets",
      title: "Tickets",
      className: "tag-tickets-mobile",
      onClick: function onClick(e) {
        return _this2.scrollMobile(e, 'tickets');
      }
    }, "Tickets"))))));
  };

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/index.scss":
/*!******************************************!*\
  !*** ./src/components/header/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/images/country-ar.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-ar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2188481302_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2188481302.json */ "./public/static/d/2188481302.json");
var _public_static_d_2188481302_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2188481302.json */ "./public/static/d/2188481302.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2188481302",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2188481302_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-br.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-br.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2281034972_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2281034972.json */ "./public/static/d/2281034972.json");
var _public_static_d_2281034972_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2281034972.json */ "./public/static/d/2281034972.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2281034972",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2281034972_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-co.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-co.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_960045303_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/960045303.json */ "./public/static/d/960045303.json");
var _public_static_d_960045303_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/960045303.json */ "./public/static/d/960045303.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "960045303",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_960045303_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-fr.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-fr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3597247544_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3597247544.json */ "./public/static/d/3597247544.json");
var _public_static_d_3597247544_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3597247544.json */ "./public/static/d/3597247544.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3597247544",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3597247544_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-ge.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-ge.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2313804021_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2313804021.json */ "./public/static/d/2313804021.json");
var _public_static_d_2313804021_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2313804021.json */ "./public/static/d/2313804021.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2313804021",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2313804021_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-in.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-in.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3186016781_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3186016781.json */ "./public/static/d/3186016781.json");
var _public_static_d_3186016781_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3186016781.json */ "./public/static/d/3186016781.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3186016781",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3186016781_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-pr.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-pr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3985006560_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3985006560.json */ "./public/static/d/3985006560.json");
var _public_static_d_3985006560_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3985006560.json */ "./public/static/d/3985006560.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3985006560",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3985006560_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-us.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-us.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1682867201_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1682867201.json */ "./public/static/d/1682867201.json");
var _public_static_d_1682867201_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1682867201.json */ "./public/static/d/1682867201.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1682867201",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_1682867201_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/country-ve.js":
/*!*********************************************!*\
  !*** ./src/components/images/country-ve.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4206163770_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/4206163770.json */ "./public/static/d/4206163770.json");
var _public_static_d_4206163770_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/4206163770.json */ "./public/static/d/4206163770.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "4206163770",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_4206163770_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/image-10hotels.js":
/*!*************************************************!*\
  !*** ./src/components/images/image-10hotels.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_82316795_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/82316795.json */ "./public/static/d/82316795.json");
var _public_static_d_82316795_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/82316795.json */ "./public/static/d/82316795.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "82316795",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_82316795_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/image-hotel.js":
/*!**********************************************!*\
  !*** ./src/components/images/image-hotel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3418496277_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3418496277.json */ "./public/static/d/3418496277.json");
var _public_static_d_3418496277_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3418496277.json */ "./public/static/d/3418496277.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3418496277",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3418496277_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/image-logo.js":
/*!*********************************************!*\
  !*** ./src/components/images/image-logo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3927946743_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3927946743.json */ "./public/static/d/3927946743.json");
var _public_static_d_3927946743_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3927946743.json */ "./public/static/d/3927946743.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3927946743",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        className: props.className
      });
    },
    data: _public_static_d_3927946743_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/image-venue-image.js":
/*!****************************************************!*\
  !*** ./src/components/images/image-venue-image.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3188359146_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3188359146.json */ "./public/static/d/3188359146.json");
var _public_static_d_3188359146_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3188359146.json */ "./public/static/d/3188359146.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3188359146",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3188359146_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_andrea_griffiths.js":
/*!***********************************************************!*\
  !*** ./src/components/images/speaker_andrea_griffiths.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2502890234_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2502890234.json */ "./public/static/d/2502890234.json");
var _public_static_d_2502890234_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2502890234.json */ "./public/static/d/2502890234.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2502890234",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2502890234_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_bnb.js":
/*!**********************************************!*\
  !*** ./src/components/images/speaker_bnb.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3780444341_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3780444341.json */ "./public/static/d/3780444341.json");
var _public_static_d_3780444341_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3780444341.json */ "./public/static/d/3780444341.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3780444341",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3780444341_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_cropped_anna.js":
/*!*******************************************************!*\
  !*** ./src/components/images/speaker_cropped_anna.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1605624759_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1605624759.json */ "./public/static/d/1605624759.json");
var _public_static_d_1605624759_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1605624759.json */ "./public/static/d/1605624759.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1605624759",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_1605624759_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_diego_paez.js":
/*!*****************************************************!*\
  !*** ./src/components/images/speaker_diego_paez.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3861628944_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3861628944.json */ "./public/static/d/3861628944.json");
var _public_static_d_3861628944_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3861628944.json */ "./public/static/d/3861628944.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3861628944",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3861628944_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_erick-wendel.js":
/*!*******************************************************!*\
  !*** ./src/components/images/speaker_erick-wendel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_123693547_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/123693547.json */ "./public/static/d/123693547.json");
var _public_static_d_123693547_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/123693547.json */ "./public/static/d/123693547.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "123693547",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_123693547_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_james.js":
/*!************************************************!*\
  !*** ./src/components/images/speaker_james.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2149966145_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2149966145.json */ "./public/static/d/2149966145.json");
var _public_static_d_2149966145_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2149966145.json */ "./public/static/d/2149966145.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2149966145",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2149966145_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_kat.js":
/*!**********************************************!*\
  !*** ./src/components/images/speaker_kat.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3249945969_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3249945969.json */ "./public/static/d/3249945969.json");
var _public_static_d_3249945969_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3249945969.json */ "./public/static/d/3249945969.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3249945969",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3249945969_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_kevin.js":
/*!************************************************!*\
  !*** ./src/components/images/speaker_kevin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_667525985_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/667525985.json */ "./public/static/d/667525985.json");
var _public_static_d_667525985_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/667525985.json */ "./public/static/d/667525985.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "667525985",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_667525985_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_matt.js":
/*!***********************************************!*\
  !*** ./src/components/images/speaker_matt.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1583801880_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1583801880.json */ "./public/static/d/1583801880.json");
var _public_static_d_1583801880_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1583801880.json */ "./public/static/d/1583801880.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1583801880",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_1583801880_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_miguel_bolivar.js":
/*!*********************************************************!*\
  !*** ./src/components/images/speaker_miguel_bolivar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2723169691_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2723169691.json */ "./public/static/d/2723169691.json");
var _public_static_d_2723169691_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2723169691.json */ "./public/static/d/2723169691.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2723169691",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2723169691_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_rauch.js":
/*!************************************************!*\
  !*** ./src/components/images/speaker_rauch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3339401997_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3339401997.json */ "./public/static/d/3339401997.json");
var _public_static_d_3339401997_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3339401997.json */ "./public/static/d/3339401997.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3339401997",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3339401997_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_ujjwal.js":
/*!*************************************************!*\
  !*** ./src/components/images/speaker_ujjwal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4282232400_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/4282232400.json */ "./public/static/d/4282232400.json");
var _public_static_d_4282232400_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/4282232400.json */ "./public/static/d/4282232400.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "4282232400",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_4282232400_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/speaker_vladimir.js":
/*!***************************************************!*\
  !*** ./src/components/images/speaker_vladimir.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1755578640_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1755578640.json */ "./public/static/d/1755578640.json");
var _public_static_d_1755578640_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1755578640.json */ "./public/static/d/1755578640.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1755578640",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_1755578640_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_example_changelog.js":
/*!************************************************************!*\
  !*** ./src/components/images/sponsor_example_changelog.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4017003676_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/4017003676.json */ "./public/static/d/4017003676.json");
var _public_static_d_4017003676_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/4017003676.json */ "./public/static/d/4017003676.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "4017003676",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "Changelog"
      });
    },
    data: _public_static_d_4017003676_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_example_nodebr.js":
/*!*********************************************************!*\
  !*** ./src/components/images/sponsor_example_nodebr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1550470998_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1550470998.json */ "./public/static/d/1550470998.json");
var _public_static_d_1550470998_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1550470998.json */ "./public/static/d/1550470998.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1550470998",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "Node Br"
      });
    },
    data: _public_static_d_1550470998_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_example_nodeconfarg.js":
/*!**************************************************************!*\
  !*** ./src/components/images/sponsor_example_nodeconfarg.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4163863290_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/4163863290.json */ "./public/static/d/4163863290.json");
var _public_static_d_4163863290_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/4163863290.json */ "./public/static/d/4163863290.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "4163863290",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "NodeConfAr"
      });
    },
    data: _public_static_d_4163863290_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_example_nodesource.js":
/*!*************************************************************!*\
  !*** ./src/components/images/sponsor_example_nodesource.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1145165362_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1145165362.json */ "./public/static/d/1145165362.json");
var _public_static_d_1145165362_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1145165362.json */ "./public/static/d/1145165362.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1145165362",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "NodeSource"
      });
    },
    data: _public_static_d_1145165362_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_example_rutan-grey.js":
/*!*************************************************************!*\
  !*** ./src/components/images/sponsor_example_rutan-grey.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1886207130_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1886207130.json */ "./public/static/d/1886207130.json");
var _public_static_d_1886207130_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1886207130.json */ "./public/static/d/1886207130.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1886207130",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "RutaN"
      });
    },
    data: _public_static_d_1886207130_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_getOnBoard.js":
/*!*****************************************************!*\
  !*** ./src/components/images/sponsor_getOnBoard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1705347300_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1705347300.json */ "./public/static/d/1705347300.json");
var _public_static_d_1705347300_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1705347300.json */ "./public/static/d/1705347300.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1705347300",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "Get On Board"
      });
    },
    data: _public_static_d_1705347300_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_github.js":
/*!*************************************************!*\
  !*** ./src/components/images/sponsor_github.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_174457870_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/174457870.json */ "./public/static/d/174457870.json");
var _public_static_d_174457870_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/174457870.json */ "./public/static/d/174457870.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "174457870",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "Github"
      });
    },
    data: _public_static_d_174457870_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_microsoft.js":
/*!****************************************************!*\
  !*** ./src/components/images/sponsor_microsoft.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2267898602_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2267898602.json */ "./public/static/d/2267898602.json");
var _public_static_d_2267898602_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2267898602.json */ "./public/static/d/2267898602.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2267898602",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "Microsoft"
      });
    },
    data: _public_static_d_2267898602_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/sponsor_nearform.js":
/*!***************************************************!*\
  !*** ./src/components/images/sponsor_nearform.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1578704802_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1578704802.json */ "./public/static/d/1578704802.json");
var _public_static_d_1578704802_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1578704802.json */ "./public/static/d/1578704802.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1578704802",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid,
        title: "Nearform"
      });
    },
    data: _public_static_d_1578704802_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-adrian.js":
/*!**********************************************!*\
  !*** ./src/components/images/team-adrian.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2680738788_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2680738788.json */ "./public/static/d/2680738788.json");
var _public_static_d_2680738788_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2680738788.json */ "./public/static/d/2680738788.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2680738788",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2680738788_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-alejandro.js":
/*!*************************************************!*\
  !*** ./src/components/images/team-alejandro.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2690306979_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2690306979.json */ "./public/static/d/2690306979.json");
var _public_static_d_2690306979_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2690306979.json */ "./public/static/d/2690306979.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2690306979",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2690306979_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-diego.js":
/*!*********************************************!*\
  !*** ./src/components/images/team-diego.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2961514891_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2961514891.json */ "./public/static/d/2961514891.json");
var _public_static_d_2961514891_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2961514891.json */ "./public/static/d/2961514891.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2961514891",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2961514891_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-hamilton.js":
/*!************************************************!*\
  !*** ./src/components/images/team-hamilton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4121633037_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/4121633037.json */ "./public/static/d/4121633037.json");
var _public_static_d_4121633037_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/4121633037.json */ "./public/static/d/4121633037.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "4121633037",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_4121633037_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-jhonatan.js":
/*!************************************************!*\
  !*** ./src/components/images/team-jhonatan.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3231487550_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3231487550.json */ "./public/static/d/3231487550.json");
var _public_static_d_3231487550_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3231487550.json */ "./public/static/d/3231487550.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3231487550",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3231487550_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-julian.js":
/*!**********************************************!*\
  !*** ./src/components/images/team-julian.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3622736579_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/3622736579.json */ "./public/static/d/3622736579.json");
var _public_static_d_3622736579_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/3622736579.json */ "./public/static/d/3622736579.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3622736579",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_3622736579_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-maleja.js":
/*!**********************************************!*\
  !*** ./src/components/images/team-maleja.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1095674015_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/1095674015.json */ "./public/static/d/1095674015.json");
var _public_static_d_1095674015_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/1095674015.json */ "./public/static/d/1095674015.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1095674015",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_1095674015_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-nicole.js":
/*!**********************************************!*\
  !*** ./src/components/images/team-nicole.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_275546198_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/275546198.json */ "./public/static/d/275546198.json");
var _public_static_d_275546198_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/275546198.json */ "./public/static/d/275546198.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "275546198",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_275546198_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-sebastian.js":
/*!*************************************************!*\
  !*** ./src/components/images/team-sebastian.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_504763219_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/504763219.json */ "./public/static/d/504763219.json");
var _public_static_d_504763219_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/504763219.json */ "./public/static/d/504763219.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "504763219",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_504763219_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/images/team-stiwar.js":
/*!**********************************************!*\
  !*** ./src/components/images/team-stiwar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2790026016_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/2790026016.json */ "./public/static/d/2790026016.json");
var _public_static_d_2790026016_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/2790026016.json */ "./public/static/d/2790026016.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "2790026016",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_2790026016_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json");
var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/components/header/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/components/footer/index.js");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seo */ "./src/components/seo.js");
/* harmony import */ var _components_tuned__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tuned */ "./src/components/tuned/index.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.scss */ "./src/components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_8__);










var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "755544856",
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_seo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "NodeConfCo",
        keywords: ["nodeconfco", "colombia"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_tuned__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    },
    data: _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout.scss":
/*!************************************!*\
  !*** ./src/components/layout.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/section_speakers/index.js":
/*!**************************************************!*\
  !*** ./src/components/section_speakers/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_speaker_diego_paez__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/speaker_diego_paez */ "./src/components/images/speaker_diego_paez.js");
/* harmony import */ var _images_speaker_andrea_griffiths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/speaker_andrea_griffiths */ "./src/components/images/speaker_andrea_griffiths.js");
/* harmony import */ var _images_speaker_miguel_bolivar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/speaker_miguel_bolivar */ "./src/components/images/speaker_miguel_bolivar.js");
/* harmony import */ var _images_speaker_cropped_anna__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/speaker_cropped_anna */ "./src/components/images/speaker_cropped_anna.js");
/* harmony import */ var _images_speaker_erick_wendel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/speaker_erick-wendel */ "./src/components/images/speaker_erick-wendel.js");
/* harmony import */ var _images_speaker_bnb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/speaker_bnb */ "./src/components/images/speaker_bnb.js");
/* harmony import */ var _images_speaker_kat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/speaker_kat */ "./src/components/images/speaker_kat.js");
/* harmony import */ var _images_speaker_james__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/speaker_james */ "./src/components/images/speaker_james.js");
/* harmony import */ var _images_speaker_rauch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/speaker_rauch */ "./src/components/images/speaker_rauch.js");
/* harmony import */ var _images_speaker_matt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/speaker_matt */ "./src/components/images/speaker_matt.js");
/* harmony import */ var _images_speaker_ujjwal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/speaker_ujjwal */ "./src/components/images/speaker_ujjwal.js");
/* harmony import */ var _images_speaker_vladimir__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/speaker_vladimir */ "./src/components/images/speaker_vladimir.js");
/* harmony import */ var _images_speaker_kevin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/speaker_kevin */ "./src/components/images/speaker_kevin.js");
/* harmony import */ var _images_country_co__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/country-co */ "./src/components/images/country-co.js");
/* harmony import */ var _images_country_ve__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/country-ve */ "./src/components/images/country-ve.js");
/* harmony import */ var _images_country_ar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/country-ar */ "./src/components/images/country-ar.js");
/* harmony import */ var _images_country_ge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/country-ge */ "./src/components/images/country-ge.js");
/* harmony import */ var _images_country_br__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/country-br */ "./src/components/images/country-br.js");
/* harmony import */ var _images_country_us__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/country-us */ "./src/components/images/country-us.js");
/* harmony import */ var _images_country_fr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/country-fr */ "./src/components/images/country-fr.js");
/* harmony import */ var _images_country_pr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/country-pr */ "./src/components/images/country-pr.js");
/* harmony import */ var _images_country_in__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/country-in */ "./src/components/images/country-in.js");
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./speaker */ "./src/components/section_speakers/speaker.js");
/* harmony import */ var _speakers_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./speakers.scss */ "./src/components/section_speakers/speakers.scss");
/* harmony import */ var _speakers_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_speakers_scss__WEBPACK_IMPORTED_MODULE_24__);


























var SectionSpeakers = function SectionSpeakers() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-speakers",
    id: "speakers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-speakers__title"
  }, "Speakers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop first-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Anna Henningsen",
    twitterUrl: "https://twitter.com/addaleax",
    country: _images_country_ge__WEBPACK_IMPORTED_MODULE_17__["default"],
    figure: _images_speaker_cropped_anna__WEBPACK_IMPORTED_MODULE_4__["default"],
    description: "Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master\u2019s degree in mathematics in Germany, she is fueled by a passion for Node and its community."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Tierney Cyren",
    twitterUrl: "https://twitter.com/bitandbang",
    country: _images_country_us__WEBPACK_IMPORTED_MODULE_19__["default"],
    figure: _images_speaker_bnb__WEBPACK_IMPORTED_MODULE_6__["default"],
    description: "Tierney is a member of the Node.js Community Committee, a Senior Cloud Developer Advocate at Microsoft, and a contributor to various initiatives in the Node.js project focusing on the continued growth and success of the Node.js community."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Kat March\xE1n",
    twitterUrl: "https://twitter.com/maybekatz",
    country: _images_country_pr__WEBPACK_IMPORTED_MODULE_21__["default"],
    figure: _images_speaker_kat__WEBPACK_IMPORTED_MODULE_7__["default"],
    description: "npm CLI maintainer; tc39 delegate; wealljs admin; cat mom"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop additional-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "James Snell",
    twitterUrl: "https://twitter.com/jasnell",
    country: _images_country_us__WEBPACK_IMPORTED_MODULE_19__["default"],
    figure: _images_speaker_james__WEBPACK_IMPORTED_MODULE_8__["default"],
    description: "nearForm Community Engineering Manager & Node.js TSC"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Guillermo Rauch",
    twitterUrl: "https://twitter.com/rauchg",
    country: _images_country_ar__WEBPACK_IMPORTED_MODULE_16__["default"],
    figure: _images_speaker_rauch__WEBPACK_IMPORTED_MODULE_9__["default"],
    description: "Founder of \u25B2ZEIT, creator of Next.js and Socket.io"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop additional-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Diego Paez",
    twitterUrl: "https://twitter.com/carax",
    country: _images_country_ar__WEBPACK_IMPORTED_MODULE_16__["default"],
    figure: _images_speaker_diego_paez__WEBPACK_IMPORTED_MODULE_1__["default"],
    description: "JS developer with a Computer Science degree and a passion for HCI. He was born in the southernmost place in America, Tierra del Fuego but he is living in La Plata these days where he co-founded GEUT along with Martin and Max. He also loves the community, in fact, in 2014 he co-founded LaPlataJS a local JS community."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Andrea Griffinths",
    twitterUrl: "https://twitter.com/AlaColombia",
    country: _images_country_co__WEBPACK_IMPORTED_MODULE_14__["default"],
    figure: _images_speaker_andrea_griffiths__WEBPACK_IMPORTED_MODULE_2__["default"],
    description: "Community Support @GitHub, @USArmy Veteran, \uD83C\uDDE8\uD83C\uDDF4 Immigrant Latina in technology, OSS superfan, & breast cancer slayer. She/Her/Hers. Opiniones son m\xEDas."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Miguel Bolivar",
    twitterUrl: "https://twitter.com/darking360",
    country: _images_country_ve__WEBPACK_IMPORTED_MODULE_15__["default"],
    figure: _images_speaker_miguel_bolivar__WEBPACK_IMPORTED_MODULE_3__["default"],
    description: "An informatics engineering student for the last semester, I'm working on my thesis right now, implementing a sentiment analysis app powered by Node to talk with IBM Watson to help the services problems info in my city, focusing all the work towards the transformation of a traditional city into a smart city."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop single-speaker-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Erick Wendel",
    twitterUrl: "https://twitter.com/erickwendel",
    country: _images_country_br__WEBPACK_IMPORTED_MODULE_18__["default"],
    figure: _images_speaker_erick_wendel__WEBPACK_IMPORTED_MODULE_5__["default"],
    description: "Speaker, Software Consultant and community Co-organizer in Brazil. Named by Microsoft as Most Valuable Professional, and by Google as Google Developer Expert, a specialist in Node.js and Javascript Applications. Also working as voluntary Leader of NodeBR, Javascript S\xE3o Paulo and Nerdz\xE3o Communities."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Matt Podwysocki",
    twitterUrl: "https://twitter.com/mattpodwysocki",
    country: _images_country_us__WEBPACK_IMPORTED_MODULE_19__["default"],
    figure: _images_speaker_matt__WEBPACK_IMPORTED_MODULE_10__["default"],
    description: "Open Sourcerer at @VSAppCenter Author of RxJS/@ReactiveX TC39 Member @Twitch streamer."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop second-speaker-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Ujjwal Sharma",
    twitterUrl: "https://twitter.com/ryzokuken",
    country: _images_country_in__WEBPACK_IMPORTED_MODULE_22__["default"],
    figure: _images_speaker_ujjwal__WEBPACK_IMPORTED_MODULE_11__["default"],
    description: "Core collaborator @nodejs, Prole @electronjs. International Speaker and JavaScript/C++ developer. Helping out with @v8js and @tc39. GSoC mentor and ex-student."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Vladimir Turckheim",
    twitterUrl: "https://twitter.com/poledesfetes",
    country: _images_country_fr__WEBPACK_IMPORTED_MODULE_20__["default"],
    figure: _images_speaker_vladimir__WEBPACK_IMPORTED_MODULE_12__["default"],
    description: "Web security engineer. @nodejs collaborator .Unicorn admirer, cheese eater, Node.js Software engineer at @SqreenIO tweets are my own. My heart is in @strasbourg."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_speaker__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: "Kevin Ball",
    twitterUrl: "https://twitter.com/kbal11",
    country: _images_country_us__WEBPACK_IMPORTED_MODULE_19__["default"],
    figure: _images_speaker_kevin__WEBPACK_IMPORTED_MODULE_13__["default"],
    description: "Web Front-end Consultant and Trainer. Panelist @JSPartyFM. Former lead @ZURBFoundation. Coffee addict. He/Him."
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionSpeakers);

/***/ }),

/***/ "./src/components/section_speakers/speaker.js":
/*!****************************************************!*\
  !*** ./src/components/section_speakers/speaker.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return speaker; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var speaker =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(speaker, _React$Component);

  function speaker() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = speaker.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
      className: "section-speakers__content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "section-speakers__img"
    }, this.props.figure()), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "section-speakers__description"
    }, this.props.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "section-speakers__data"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "section-speakers__name"
    }, this.props.name, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "section-speakers__country"
    }, this.props.country())), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "section-speakers__social"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: this.props.twitterUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "section-speakers__icon"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "icon-twitter"
    })))));
  };

  return speaker;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "./src/components/section_speakers/speakers.scss":
/*!*******************************************************!*\
  !*** ./src/components/section_speakers/speakers.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/section_sponsors/index.js":
/*!**************************************************!*\
  !*** ./src/components/section_sponsors/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_sponsor_example_changelog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/sponsor_example_changelog */ "./src/components/images/sponsor_example_changelog.js");
/* harmony import */ var _images_sponsor_example_nodebr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sponsor_example_nodebr */ "./src/components/images/sponsor_example_nodebr.js");
/* harmony import */ var _images_sponsor_example_nodeconfarg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sponsor_example_nodeconfarg */ "./src/components/images/sponsor_example_nodeconfarg.js");
/* harmony import */ var _images_sponsor_example_nodesource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sponsor_example_nodesource */ "./src/components/images/sponsor_example_nodesource.js");
/* harmony import */ var _images_sponsor_microsoft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/sponsor_microsoft */ "./src/components/images/sponsor_microsoft.js");
/* harmony import */ var _images_sponsor_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/sponsor_github */ "./src/components/images/sponsor_github.js");
/* harmony import */ var _images_sponsor_nearform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/sponsor_nearform */ "./src/components/images/sponsor_nearform.js");
/* harmony import */ var _images_sponsor_getOnBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/sponsor_getOnBoard */ "./src/components/images/sponsor_getOnBoard.js");
/* harmony import */ var _images_sponsor_example_rutan_grey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/sponsor_example_rutan-grey */ "./src/components/images/sponsor_example_rutan-grey.js");
/* harmony import */ var _sponsors_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sponsors.scss */ "./src/components/section_sponsors/sponsors.scss");
/* harmony import */ var _sponsors_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sponsors_scss__WEBPACK_IMPORTED_MODULE_10__);












var SectionSponsors = function SectionSponsors() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-sponsors-view",
    id: "sponsors"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-sponsors-view__title"
  }, "Sponsors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "section-sponsors-view__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-sponsors-view__medal  platinum"
  }, "Platinum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-sponsors-view__data  big"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card",
    href: "https://nodesource.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_example_nodesource__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card",
    href: "https://www.rutanmedellin.org/es/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_example_rutan_grey__WEBPACK_IMPORTED_MODULE_9__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "section-sponsors-view__content bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-sponsors-view__tag  opportunity"
  }, "Opportunity Supporter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-sponsors-view__data  small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card getonboard",
    href: "https://www.getonbrd.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_getOnBoard__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "section-sponsors-view__content bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-sponsors-view__tag  community"
  }, "Community Parners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-sponsors-view__data  small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card",
    href: "https://changelog.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_example_changelog__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card",
    href: "https://nodeconf.com.ar/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_example_nodeconfarg__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card",
    href: "https://nodebr.org/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_example_nodebr__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "section-sponsors-view__content bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-sponsors-view__tag  travel"
  }, "Travel Parners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-sponsors-view__data  small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card",
    href: "https://www.microsoft.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_microsoft__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card github",
    href: "https://github.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_github__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "section-sponsors-view__card nearform",
    href: "https://www.nearform.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_sponsor_nearform__WEBPACK_IMPORTED_MODULE_7__["default"], null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionSponsors); // [7:46 AM, 4/8/2019] +1 (941) 914-7392: Y hay una sección para travel partners
// [7:47 AM, 4/8/2019] +1 (941) 914-7392: Ahí pondremos a Microsoft, nearForm y GitHub por ahora

/***/ }),

/***/ "./src/components/section_sponsors/sponsors.scss":
/*!*******************************************************!*\
  !*** ./src/components/section_sponsors/sponsors.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/section_tickets/index.js":
/*!*************************************************!*\
  !*** ./src/components/section_tickets/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tickets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets.scss */ "./src/components/section_tickets/tickets.scss");
/* harmony import */ var _tickets_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tickets_scss__WEBPACK_IMPORTED_MODULE_1__);



var SectionSpeakers = function SectionSpeakers() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__background",
    id: "tickets"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-tickets"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-tickets__title"
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-tickets__subtittle"
  }, "We want to meet you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-tickets__description"
  }, "Get access to NodeConf Colombia at Ruta N\u2019s complex on June 21st & 22nd with national and international speakers, goodie bag, live translation services (ES \u27A1\uFE0E EN :: EN \u27A1\uFE0E ES) and the opportunity to participate in Code+Learn and start contributing to the Node.js project!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-wrap-desktop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__content-ticket"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ti.to/nodeconfco/2019",
    className: "section-tickets__card-ticket",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__info"
  }, "Regular Tickets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__price"
  }, "$ 125"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticket-soul-out"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__content-ticket"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__out-ticket",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__info"
  }, "Early Bird Tickets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__price"
  }, "$ 100"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__soul"
  }, "SOLD OUT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__content-ticket"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__out-ticket",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__info"
  }, "Second Early Bird Tickets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__price"
  }, "$ 100"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tickets__soul"
  }, "SOLD OUT")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionSpeakers);

/***/ }),

/***/ "./src/components/section_tickets/tickets.scss":
/*!*****************************************************!*\
  !*** ./src/components/section_tickets/tickets.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1025518380.json */ "./public/static/d/1025518380.json");
var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1025518380.json */ "./public/static/d/1025518380.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");






function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: detailsQuery,
    render: function render(data) {
      var metaDescription = description || data.site.siteMetadata.description;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
        htmlAttributes: {
          lang: lang
        },
        title: title,
        titleTemplate: data.site.siteMetadata.title,
        meta: [{
          name: "description",
          content: metaDescription
        }, {
          property: "og:title",
          content: data.site.siteMetadata.titleShort
        }, {
          property: "og:description",
          content: metaDescription
        }, {
          property: "og:type",
          content: "website"
        }, {
          name: "twitter:card",
          content: "summary_large_image"
        }, {
          name: "twitter:creator",
          content: data.site.siteMetadata.author
        }, {
          name: "twitter:title",
          content: data.site.siteMetadata.titleShort
        }, {
          name: "twitter:description",
          content: metaDescription
        }, {
          name: "twitter:image",
          content: data.site.siteMetadata.image
        }, {
          name: "twitter:url",
          content: data.site.siteMetadata.url
        }, {
          name: "og:type",
          content: "website"
        }, {
          name: "og:url",
          content: data.site.siteMetadata.url
        }, {
          name: "og:title",
          content: data.site.siteMetadata.titleShort
        }, {
          name: "og:description",
          content: metaDescription
        }, {
          name: "og:image",
          content: data.site.siteMetadata.image
        }, {
          name: "theme-color",
          content: '#97c33b'
        }, {
          name: "msapplication-navbutton-color",
          content: '#97c33b'
        }, {
          name: "apple-mobile-web-app-status-bar-style",
          content: '#97c33b'
        }].concat(keywords.length > 0 ? {
          name: "keywords",
          content: keywords.join(", ")
        } : []).concat(meta)
      });
    },
    data: _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__
  });
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};
SEO.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);
var detailsQuery = "1025518380";

/***/ }),

/***/ "./src/components/team/index.js":
/*!**************************************!*\
  !*** ./src/components/team/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_team_alejandro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/team-alejandro */ "./src/components/images/team-alejandro.js");
/* harmony import */ var _images_team_julian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/team-julian */ "./src/components/images/team-julian.js");
/* harmony import */ var _images_team_maleja__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/team-maleja */ "./src/components/images/team-maleja.js");
/* harmony import */ var _images_team_adrian__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/team-adrian */ "./src/components/images/team-adrian.js");
/* harmony import */ var _images_team_diego__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/team-diego */ "./src/components/images/team-diego.js");
/* harmony import */ var _images_team_nicole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/team-nicole */ "./src/components/images/team-nicole.js");
/* harmony import */ var _images_team_jhonatan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/team-jhonatan */ "./src/components/images/team-jhonatan.js");
/* harmony import */ var _images_team_sebastian__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/team-sebastian */ "./src/components/images/team-sebastian.js");
/* harmony import */ var _images_team_hamilton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/team-hamilton */ "./src/components/images/team-hamilton.js");
/* harmony import */ var _images_team_stiwar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/team-stiwar */ "./src/components/images/team-stiwar.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/components/team/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);














var Team =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Team, _Component);

  function Team() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Team.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Team-component",
      id: "team"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-top"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "ORGANIZING TEAM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_alejandro__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Alejandro Estrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Open source enthusiast, creating some GraphQL tools @easygraphql - Co-Organizer at NodeConfCO "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Sponsorships "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/estrada9166",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_julian__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Juli\xE1n Duque"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Developer and Educator - Engineer at @NodeSource - Co-Organizer at @Colombia_Dev, @JSConfCO, @NodeConfCO, @Suncoastjs, & @MedellinJS - #EStreamerCoders ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji"
    }, "\uD83D\uDE08")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Finance / Logistics "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/julian_duque",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_maleja__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Alejandra Giraldo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Co-Organizer @SheCodesAngular and", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "http://nodeconf.co",
      rel: "noopener noreferrer"
    }, "NodeConfCo"), " ", "Fullstack developer at: @wearebunnyinc - auth0 ambassador"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Communication / Logistics "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/maleja111",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_adrian__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Adrian Estrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Developer in love with Node.js, thirsty for new technologies, working at @NodeSource - organizer @MedellinJS, @JSConfCO and @NodeConfCO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Finances / Content "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/edsadr",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_diego__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Diego Rodriguez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Software Engineer & Researcher. Node.js and Open Source Advocate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Content "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/DiegoRBaquero",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_nicole__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Nicole Jimenez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Full stack software engineer at Elizabeth&Clarke"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Opportunity / Communication "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/nicole_jimenez",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_jhonatan__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Jonathan Avenda\xF1o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Coderiser (@coderiseorg) . Developer. Co-Organizer at @scaleconfco, @mde_devops, @jsconfco& @nodeconfco. Warrior & Weirdo ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji"
    }, "\uD83D\uDC9B")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Logistics / Opportunity "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/jdavidavendano",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_sebastian__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Sebastian Velez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "JS dev, Open source, Bicycle Downhill rider, Digital nomad - Co-Organizer @NodeConfCO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Communication / Content "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/jvelezpo",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_hamilton__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Hamilton G. Moreno"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "#Developer web", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji"
    }, "\uD83C\uDF10"), " and # Programmer.\uD83D\uDCBB Passionate about the Design and active tracking of #SoftwareLibre. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji"
    }, "\uD83D\uDC27")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Team Web "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/MiltonCode",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "team-members"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-data"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_team_stiwar__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-description"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Stiwar Asprilla"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Developer web in progress ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji"
    }, "\uD83D\uDCBB"), " passionate for the design web and app desktop ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji"
    }, "\uD83D\uDD8C\uFE0F  ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "team-role"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " Team Web "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/AsprillaStiwar",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    })))))))));
  };

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/components/team/index.scss":
/*!****************************************!*\
  !*** ./src/components/team/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/top-info/index.js":
/*!******************************************!*\
  !*** ./src/components/top-info/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/top-info/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);



var TopInfo = function TopInfo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-info-component top-info",
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "NodeConf"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Colombia 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ti.to/nodeconfco/2019",
    target: "_blank",
    className: "get-your-tickets",
    rel: "noopener noreferrer"
  }, "Get your tickets ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "right-arrow"
  }, ">"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dates"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopInfo);

/***/ }),

/***/ "./src/components/top-info/index.scss":
/*!********************************************!*\
  !*** ./src/components/top-info/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/tuned/index.js":
/*!***************************************!*\
  !*** ./src/components/tuned/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tuned; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/tuned/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var Tuned =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Tuned, _React$Component);

  function Tuned() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tuned.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tuned-section"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "social"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tuned"
    }, "Stay Tuned"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "email"
    }, "hola@nodeconf.co"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "networks"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/nodeconfco",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-twitter"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.facebook.com/nodeconfco/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-facebook-alt"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.instagram.com/nodeconf_co/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-instagram"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      action: "https://nodeconf.us18.list-manage.com/subscribe/post?u=33c93ca7e73c6c27cd0325b9f&id=e71faec96c",
      method: "post",
      id: "mc-embedded-subscribe-form",
      name: "mc-embedded-subscribe-form",
      className: "validate",
      target: "_blank",
      noValidate: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "enter-email"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "signup"
    }, "Sign up for updates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "email",
      className: "email-input",
      placeholder: "Email address"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "signup-button"
    }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "mce-responses",
      className: "clear"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "response",
      id: "mce-error-response",
      style: {
        display: 'none'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "response",
      id: "mce-success-response",
      style: {
        display: 'none'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'absolute',
        left: -5000
      },
      "aria-hidden": "true"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name",
      tabIndex: "-1"
    })))));
  };

  return Tuned;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/components/tuned/index.scss":
/*!*****************************************!*\
  !*** ./src/components/tuned/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/venue/index.js":
/*!***************************************!*\
  !*** ./src/components/venue/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Venue; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_image_hotel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/image-hotel */ "./src/components/images/image-hotel.js");
/* harmony import */ var _images_image_venue_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/image-venue-image */ "./src/components/images/image-venue-image.js");
/* harmony import */ var _images_image_10hotels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/image-10hotels */ "./src/components/images/image-10hotels.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/components/venue/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);







var Venue =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Venue, _Component);

  function Venue() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Venue.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Venue-component",
      id: "venue"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Venue-left"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "Venue-title"
    }, "VENUE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Hotels we"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "recommend "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Venue-hotels10"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.diezhotel.com/",
      target: "__blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_image_10hotels__WEBPACK_IMPORTED_MODULE_4__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://reservations.travelclick.com/103293?groupID=2323678",
      className: "Venue-btn",
      target: "__blank"
    }, "Reservation...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Venue-img"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_image_venue_image__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Venue-text"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Venue-rutan"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.rutanmedellin.org/es/",
      target: "__blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "logo"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_image_hotel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      alt: "Logo-rutan"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Complejo Ruta N Calle 67 N\xB0 52-20"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Medellin - Colombia. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "span-venue"
    }, "Strategic location, whit easy access  to all of "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "span-venue"
    }, "the city's points of interest."))));
  };

  return Venue;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/components/venue/index.scss":
/*!*****************************************!*\
  !*** ./src/components/venue/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");




var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "404: Not found"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ "core-js/modules/es6.string.starts-with");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about */ "./src/components/about/index.js");
/* harmony import */ var _components_section_speakers___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/section_speakers/ */ "./src/components/section_speakers/index.js");
/* harmony import */ var _components_section_tickets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section_tickets */ "./src/components/section_tickets/index.js");
/* harmony import */ var _components_venue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/venue */ "./src/components/venue/index.js");
/* harmony import */ var _components_section_sponsors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/section_sponsors */ "./src/components/section_sponsors/index.js");
/* harmony import */ var _components_top_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/top-info */ "./src/components/top-info/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);












var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(IndexPage, _React$Component);

  function IndexPage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = IndexPage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.handleScroll = function handleScroll() {
    var offset = 130;
    var position = window.pageYOffset;

    if (window.innerWidth > 678) {
      if (position > 160) {
        document.getElementsByClassName('header-component')[0].classList.add('header-small');
      } else {
        document.getElementsByClassName('header-component').length > 0 && document.getElementsByClassName('header-component')[0].classList.remove('header-small');
      }
    } // console.log(document.querySelectorAll('.header-component .menu-item a'));


    document.querySelectorAll('.header-component .menu-item a').forEach(function (a) {
      var anchorId = a.getAttribute('href');

      if (anchorId.startsWith('#') && document.querySelector(anchorId)) {
        var target = document.querySelector(anchorId).offsetTop - offset;
        var targetHeight = document.querySelector(anchorId).offsetHeight + target;

        if (position >= target && position < targetHeight) {
          var menuItems = document.querySelectorAll('.header-component .menu-item');

          for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
          }

          a.parentElement.classList.add('active');
        }
      }
    });
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_top_info__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_about__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_section_speakers___WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_venue__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_section_sponsors__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_section_tickets__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  };

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/organizers.js":
/*!*********************************!*\
  !*** ./src/pages/organizers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/team */ "./src/components/team/index.js");





var OrganizerTeam =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(OrganizerTeam, _React$Component);

  function OrganizerTeam() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = OrganizerTeam.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.querySelectorAll('.header-component .menu-item.organizer-team')[0].classList.add('active');
    window.addEventListener('scroll', this.handleScroll);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.handleScroll = function handleScroll() {
    var position = window.pageYOffset;

    if (window.innerWidth > 678) {
      if (position > 160) {
        document.getElementsByClassName('header-component')[0].classList.add('header-small');
      } else {
        document.getElementsByClassName('header-component').length > 0 && document.getElementsByClassName('header-component')[0].classList.remove('header-small');
      }
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_team__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  };

  return OrganizerTeam;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrganizerTeam);

/***/ }),

/***/ "./src/pages/schedule.js":
/*!*******************************!*\
  !*** ./src/pages/schedule.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");


 // import Schedule from '../components/page_schedule'

var Schedule =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Schedule, _React$Component);

  function Schedule() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Schedule.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.querySelectorAll('.header-component .menu-item.schedule')[0].classList.add('active');
    console.log(document.querySelectorAll('.header-component .menu-item.schedule')[0]);
    window.addEventListener('scroll', this.handleScroll);
    console.log('monto');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.handleScroll = function handleScroll() {
    var position = window.pageYOffset;

    if (window.innerWidth > 678) {
      if (position > 160) {
        document.getElementsByClassName('header-component')[0].classList.add('header-small');
      } else {
        document.getElementsByClassName('header-component').length > 0 && document.getElementsByClassName('header-component')[0].classList.remove('header-small');
      }
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        marginTop: '180px'
      }
    }, "We are working on it, stay tuned!"));
  };

  return Schedule;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/es6.string.starts-with":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.starts-with" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_starts_with__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map