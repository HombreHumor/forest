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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// const articles = document.querySelectorAll('.blog__article');\nvar blogMenu = document.querySelector('.blog__nav-list');\n// const blogMenuBtns = document.querySelectorAll('.blog__nav-btn');\n\nwindow.addEventListener('scroll', function () {\n  if (window.scrollY > blogMenu.offsetHeight) {\n    blogMenu.classList.add('blog__nav-list--scroll');\n  } else {\n    blogMenu.classList.remove('blog__nav-list--scroll');\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImJsb2dNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQSxJQUFNQSxXQUFXQyxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtBQUNBOztBQUVBQyxPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLE1BQUlELE9BQU9FLE9BQVAsR0FBaUJMLFNBQVNNLFlBQTlCLEVBQTRDO0FBQzFDTixhQUFTTyxTQUFULENBQW1CQyxHQUFuQixDQUF1Qix3QkFBdkI7QUFDRCxHQUZELE1BRU87QUFDTFIsYUFBU08sU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsd0JBQTFCO0FBQ0Q7QUFDRixDQU5EIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIGNvbnN0IGFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dfX2FydGljbGUnKTtcclxuY29uc3QgYmxvZ01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fbmF2LWxpc3QnKTtcclxuLy8gY29uc3QgYmxvZ01lbnVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dfX25hdi1idG4nKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gYmxvZ01lbnUub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICBibG9nTWVudS5jbGFzc0xpc3QuYWRkKCdibG9nX19uYXYtbGlzdC0tc2Nyb2xsJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJsb2dNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2dfX25hdi1saXN0LS1zY3JvbGwnKTtcclxuICB9XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ })

/******/ });