/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(nodes) {\n    this.nodes = nodes;\n  }\n  html(html){\n    if (typeof html === \"undefined\") {\n      return this.nodes[0].innerHTML;\n    }else if (typeof html === \"string\"){\n      this.each((el) => {\n        el.innerHTML = html;\n      });\n    }\n  }\n  each(cb) {\n    this.nodes.forEach(cb);\n  }\n\n  empty(){\n    this.html('');\n  }\n  append(children){\n    if (typeof children === \"string\"){\n      this.each( (el) => {\n        el.innerHTML += children;\n      });\n    }else if  (children instanceof \"DomNodeCollection\") {\n      this.each( (node) => {\n          children.each( (childNode) =>{\n            node.appendChild(childNode.clonenod(true));\n          });\n      });\n    }\n  }\n\n  attr(key,value){\n    if (typeof value === \"string\") {\n      this.each( (node) => {\n        node.setAttribute(key,value);\n      })\n    }else{\n      return this.nodes[0].getAttribute(key);\n    }\n  }\n\n  addClass(name){\n    this.each( (node) =>{\n      node.classList.add(name)\n    });\n  }\n  removeClass(name){\n    this.each( (node) => {\n      node.classList.remove(name)\n    });\n  }\n\n  children(){\n    let results = [];\n    this.each( (node)=>{\n      let childrenList = node.children;\n      results = results.concat(Array.from(childrenList));\n    } );\n    return new DomNodeCollection(results);\n  }\n\n  parent(){\n    let results = [];\n    this.each ( (node) =>{\n      let parent_node = node.parentNode;\n      results.push(parent_node);\n    });\n    return new DomNodeCollection(results);\n  }\n\n  find(el){\n    let nodeList = [];\n    this.each ( (node) => {\n      let results = node.querySelectorAll(el);\n      nodeList = nodeList.concat(Array.from(results));\n    });\n    return new DomNodeCollection(nodeList);\n  }\n\n  remove(){\n    this.each( (node) => {\n      node.remove();\n    } );\n  }\n\n  on(eventHandle,cb){\n    this.each( (node) => {\n      node.addEventListener(eventHandle,cb);\n    });\n  }\n}\n\nmodule.exports = DomNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = (selector)=> {\n  let obj;\n  if (typeof selector === \"string\") {\n    obj = document.querySelectorAll(selector);\n    return Array.from(obj);\n  }else if (typeof selector === \"object\") {\n    if(selector instanceof HTMLElement){\n      return new DomNodeCollection([selector]);\n    }\n  }\n}\nli = document.querySelectorAll(\"li\");\narr = Array.from(li);\ntest = new DomNodeCollection(arr);\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });