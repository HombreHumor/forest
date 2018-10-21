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
eval("\n\nvar _scrollBy = __webpack_require__(/*! ./modules/scrollBy */ \"./src/assets/scripts/modules/scrollBy.js\");\n\nvar _scrollBy2 = _interopRequireDefault(_scrollBy);\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nvar _fullmenu = __webpack_require__(/*! ./modules/fullmenu */ \"./src/assets/scripts/modules/fullmenu.js\");\n\nvar _fullmenu2 = _interopRequireDefault(_fullmenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _fullmenu2.default)();\n(0, _preloader2.default)();\n\nvar articles = document.querySelectorAll('.blog__article');\nvar blogMenu = document.querySelector('.blog__nav-list');\nvar blog = document.querySelector('.blog__texts');\nvar blogMenuBtns = document.querySelectorAll('.blog__nav-btn');\n\nwindow.addEventListener('scroll', function () {\n  stickyNav();\n  articles.forEach(function (element) {\n    findActiveLink(element);\n  });\n});\n\nblogMenuBtns.forEach(function (element) {\n  scrollToArticle(element);\n});\n\nfunction scrollToArticle(element) {\n  element.addEventListener('click', function (event) {\n    var scrollTarget = document.getElementById(event.target.dataset.scrollto);\n    var scrollYCoord = scrollTarget.getBoundingClientRect().top;\n    (0, _scrollBy2.default)(scrollYCoord, 1000);\n  });\n}\n\nfunction findActiveLink(element) {\n  if (element.getBoundingClientRect().top <= 150) {\n    var targetLink = document.querySelector('[data-scrollto=\\'' + element.id + '\\']');\n    setActiveLink(targetLink);\n  }\n}\n\nfunction setActiveLink(targetBtn) {\n  blogMenuBtns.forEach(function (element) {\n    if (element == targetBtn) {\n      element.classList.add('js-blog-open-btn');\n    } else {\n      element.classList.remove('js-blog-open-btn');\n    }\n  });\n}\n\nfunction stickyNav() {\n  if (blog.getBoundingClientRect().top <= 0) {\n    blogMenu.classList.add('blog__nav-list--scroll');\n  } else {\n    blogMenu.classList.remove('blog__nav-list--scroll');\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImFydGljbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmxvZ01lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYmxvZyIsImJsb2dNZW51QnRucyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGlja3lOYXYiLCJmb3JFYWNoIiwiZmluZEFjdGl2ZUxpbmsiLCJlbGVtZW50Iiwic2Nyb2xsVG9BcnRpY2xlIiwic2Nyb2xsVGFyZ2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJzY3JvbGx0byIsInNjcm9sbFlDb29yZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRhcmdldExpbmsiLCJpZCIsInNldEFjdGl2ZUxpbmsiLCJ0YXJnZXRCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBOztBQUVBLElBQU1BLFdBQVdDLFNBQVNDLGdCQUFULENBQTBCLGdCQUExQixDQUFqQjtBQUNBLElBQU1DLFdBQVdGLFNBQVNHLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0FBQ0EsSUFBTUMsT0FBT0osU0FBU0csYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsSUFBTUUsZUFBZUwsU0FBU0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQXJCOztBQUVBSyxPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDQztBQUNBVCxXQUFTVSxPQUFULENBQWlCLG1CQUFXO0FBQzFCQyxtQkFBZUMsT0FBZjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BTixhQUFhSSxPQUFiLENBQXFCLG1CQUFXO0FBQzlCRyxrQkFBZ0JELE9BQWhCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTQyxlQUFULENBQXlCRCxPQUF6QixFQUFrQztBQUNoQ0EsVUFBUUosZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsaUJBQVM7QUFDekMsUUFBTU0sZUFBZWIsU0FBU2MsY0FBVCxDQUF3QkMsTUFBTUMsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxRQUE3QyxDQUFyQjtBQUNBLFFBQUlDLGVBQWVOLGFBQWFPLHFCQUFiLEdBQXFDQyxHQUF4RDtBQUNBLDRCQUFTRixZQUFULEVBQXVCLElBQXZCO0FBQ0QsR0FKRDtBQUtEOztBQUVELFNBQVNULGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLE1BQUlBLFFBQVFTLHFCQUFSLEdBQWdDQyxHQUFoQyxJQUF1QyxHQUEzQyxFQUFnRDtBQUM5QyxRQUFNQyxhQUFhdEIsU0FBU0csYUFBVCx1QkFBMENRLFFBQVFZLEVBQWxELFNBQW5CO0FBQ0FDLGtCQUFjRixVQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRSxhQUFULENBQXVCQyxTQUF2QixFQUFrQztBQUNoQ3BCLGVBQWFJLE9BQWIsQ0FBcUIsbUJBQVc7QUFDOUIsUUFBSUUsV0FBV2MsU0FBZixFQUEwQjtBQUN4QmQsY0FBUWUsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isa0JBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xoQixjQUFRZSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixrQkFBekI7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRCxTQUFTcEIsU0FBVCxHQUFxQjtBQUNuQixNQUFJSixLQUFLZ0IscUJBQUwsR0FBNkJDLEdBQTdCLElBQW9DLENBQXhDLEVBQTJDO0FBQ3pDbkIsYUFBU3dCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNELEdBRkQsTUFFTztBQUNMekIsYUFBU3dCLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLHdCQUExQjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JvbGxCeSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsQnknO1xyXG5pbXBvcnQgcHJlbG9hZGVyIGZyb20gXCIuL21vZHVsZXMvcHJlbG9hZGVyXCI7XHJcbmltcG9ydCBmdWxsbWVudSBmcm9tICcuL21vZHVsZXMvZnVsbG1lbnUnO1xyXG5cclxuZnVsbG1lbnUoKTtcclxucHJlbG9hZGVyKCk7XHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nX19hcnRpY2xlJyk7XHJcbmNvbnN0IGJsb2dNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2dfX25hdi1saXN0Jyk7XHJcbmNvbnN0IGJsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fdGV4dHMnKTtcclxuY29uc3QgYmxvZ01lbnVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dfX25hdi1idG4nKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgc3RpY2t5TmF2KCk7XHJcbiAgYXJ0aWNsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGZpbmRBY3RpdmVMaW5rKGVsZW1lbnQpXHJcbiAgfSk7XHJcbn0pXHJcblxyXG5ibG9nTWVudUJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICBzY3JvbGxUb0FydGljbGUoZWxlbWVudCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb0FydGljbGUoZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuZGF0YXNldC5zY3JvbGx0byk7XHJcbiAgICBsZXQgc2Nyb2xsWUNvb3JkID0gc2Nyb2xsVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIHNjcm9sbEJ5KHNjcm9sbFlDb29yZCwgMTAwMCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRBY3RpdmVMaW5rKGVsZW1lbnQpIHtcclxuICBpZiAoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMTUwKSB7XHJcbiAgICBjb25zdCB0YXJnZXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2Nyb2xsdG89JyR7ZWxlbWVudC5pZH0nXWApO1xyXG4gICAgc2V0QWN0aXZlTGluayh0YXJnZXRMaW5rKTtcclxuICB9IFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVMaW5rKHRhcmdldEJ0bikge1xyXG4gIGJsb2dNZW51QnRucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQgPT0gdGFyZ2V0QnRuKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanMtYmxvZy1vcGVuLWJ0bicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdqcy1ibG9nLW9wZW4tYnRuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0aWNreU5hdigpIHtcclxuICBpZiAoYmxvZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMCkge1xyXG4gICAgYmxvZ01lbnUuY2xhc3NMaXN0LmFkZCgnYmxvZ19fbmF2LWxpc3QtLXNjcm9sbCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBibG9nTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdibG9nX19uYXYtbGlzdC0tc2Nyb2xsJyk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/fullmenu.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/fullmenu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var menuBtn = document.querySelector('.hamburger-btn');\n  var menuWrapper = document.querySelector('.menu');\n  var body = document.querySelector('body');\n\n  menuBtn.addEventListener('click', function (event) {\n    menuBtn.classList.toggle('hamburger-btn--active');\n    menuWrapper.classList.toggle('menu--show');\n    body.classList.toggle('noscroll');\n  });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsbWVudS5qcz9kZjI2Il0sIm5hbWVzIjpbIm1lbnVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51V3JhcHBlciIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsWUFBTTtBQUNuQixNQUFNQSxVQUFVQyxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFoQjtBQUNBLE1BQU1DLGNBQWNGLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBcEI7QUFDQSxNQUFNRSxPQUFPSCxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUFGLFVBQVFLLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLGlCQUFTO0FBQ3pDTCxZQUFRTSxTQUFSLENBQWtCQyxNQUFsQixDQUF5Qix1QkFBekI7QUFDQUosZ0JBQVlHLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLFlBQTdCO0FBQ0FILFNBQUtFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtBQUNELEdBSkQ7QUFLRCxDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZnVsbG1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItYnRuJyk7XHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlci1idG4tLWFjdGl2ZScpO1xyXG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tc2hvdycpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xyXG4gIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/fullmenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var preloader = function () {\n    var preloadBlock = document.querySelector('.js-preloader');\n    var preloadText = document.querySelector('.js-preloader-text');\n    var wrapper = document.querySelector('.js-preloader-wrapper');\n\n    return {\n\n      show: function show() {\n        wrapper.classList.add('wrapper-hidden');\n\n        return new Promise(function (resolve) {\n          var i = 0;\n          var interval = setInterval(function () {\n            i++;\n            preloadText.innerText = i + '%';\n            if (i === 100) {\n              preloadText.innerText = i + '%';\n              clearInterval(interval);\n              resolve();\n            }\n          }, 10);\n        }).then(function () {\n          preloadBlock.style.display = 'none';\n          wrapper.classList.remove('wrapper-hidden');\n        });\n      }\n    };\n  }();\n\n  preloader.show();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJwcmVsb2FkQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVsb2FkVGV4dCIsIndyYXBwZXIiLCJzaG93IiwiY2xhc3NMaXN0IiwiYWRkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlubmVyVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsWUFBTTtBQUNuQixNQUFNQSxZQUFhLFlBQVk7QUFDN0IsUUFBTUMsZUFBZUMsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFyQjtBQUNBLFFBQU1DLGNBQWNGLFNBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXBCO0FBQ0EsUUFBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBaEI7O0FBRUEsV0FBTzs7QUFFTEcsWUFBTSxnQkFBWTtBQUNoQkQsZ0JBQVFFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGdCQUF0Qjs7QUFFQSxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsY0FBSUMsSUFBSSxDQUFSO0FBQ0EsY0FBSUMsV0FBV0MsWUFBWSxZQUFLO0FBQzlCRjtBQUNBUCx3QkFBWVUsU0FBWixHQUEyQkgsQ0FBM0I7QUFDQSxnQkFBSUEsTUFBTSxHQUFWLEVBQWU7QUFDYlAsMEJBQVlVLFNBQVosR0FBMkJILENBQTNCO0FBQ0FJLDRCQUFjSCxRQUFkO0FBQ0FGO0FBQ0Q7QUFDRixXQVJjLEVBUVosRUFSWSxDQUFmO0FBU0QsU0FYTSxFQVdKTSxJQVhJLENBV0MsWUFBWTtBQUNsQmYsdUJBQWFnQixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBYixrQkFBUUUsU0FBUixDQUFrQlksTUFBbEIsQ0FBeUIsZ0JBQXpCO0FBQ0QsU0FkTSxDQUFQO0FBZUQ7QUFwQkksS0FBUDtBQXNCRCxHQTNCaUIsRUFBbEI7O0FBNkJBbkIsWUFBVU0sSUFBVjtBQUNELEMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgcHJlbG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHByZWxvYWRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmVsb2FkZXInKTtcclxuICAgIGNvbnN0IHByZWxvYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByZWxvYWRlci10ZXh0Jyk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByZWxvYWRlci13cmFwcGVyJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgcHJlbG9hZFRleHQuaW5uZXJUZXh0ID0gYCR7aX0lYDtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgIHByZWxvYWRUZXh0LmlubmVyVGV4dCA9IGAke2l9JWA7XHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBwcmVsb2FkQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3JhcHBlci1oaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuXHJcbiAgcHJlbG9hZGVyLnNob3coKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/scrollBy.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/scrollBy.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (distance, duration) {\n  var initialY = window.pageYOffset;\n  var y = initialY + distance;\n  var baseY = (initialY + y) * 0.5;\n  var difference = initialY - baseY;\n  var startTime = performance.now();\n\n  function step() {\n    var normalizedTime = (performance.now() - startTime) / duration;\n    if (normalizedTime > 1) normalizedTime = 1;\n    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));\n    if (normalizedTime < 1) window.requestAnimationFrame(step);\n  }\n  window.requestAnimationFrame(step);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxCeS5qcz81OGQ1Il0sIm5hbWVzIjpbImRpc3RhbmNlIiwiZHVyYXRpb24iLCJpbml0aWFsWSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwieSIsImJhc2VZIiwiZGlmZmVyZW5jZSIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93Iiwic3RlcCIsIm5vcm1hbGl6ZWRUaW1lIiwic2Nyb2xsVG8iLCJNYXRoIiwiY29zIiwiUEkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDckMsTUFBSUMsV0FBV0MsT0FBT0MsV0FBdEI7QUFDQSxNQUFJQyxJQUFJSCxXQUFXRixRQUFuQjtBQUNBLE1BQUlNLFFBQVEsQ0FBQ0osV0FBV0csQ0FBWixJQUFpQixHQUE3QjtBQUNBLE1BQUlFLGFBQWFMLFdBQVdJLEtBQTVCO0FBQ0EsTUFBSUUsWUFBWUMsWUFBWUMsR0FBWixFQUFoQjs7QUFFQSxXQUFTQyxJQUFULEdBQWdCO0FBQ2QsUUFBSUMsaUJBQWlCLENBQUNILFlBQVlDLEdBQVosS0FBb0JGLFNBQXJCLElBQWtDUCxRQUF2RDtBQUNBLFFBQUlXLGlCQUFpQixDQUFyQixFQUF3QkEsaUJBQWlCLENBQWpCO0FBQ3hCVCxXQUFPVSxRQUFQLENBQWdCLENBQWhCLEVBQW1CUCxRQUFRQyxhQUFhTyxLQUFLQyxHQUFMLENBQVNILGlCQUFpQkUsS0FBS0UsRUFBL0IsQ0FBeEM7QUFDQSxRQUFJSixpQkFBaUIsQ0FBckIsRUFBd0JULE9BQU9jLHFCQUFQLENBQTZCTixJQUE3QjtBQUN6QjtBQUNEUixTQUFPYyxxQkFBUCxDQUE2Qk4sSUFBN0I7QUFDRCxDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc2Nyb2xsQnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZGlzdGFuY2UsIGR1cmF0aW9uKSA9PiB7XHJcbiAgbGV0IGluaXRpYWxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gIGxldCB5ID0gaW5pdGlhbFkgKyBkaXN0YW5jZTtcclxuICBsZXQgYmFzZVkgPSAoaW5pdGlhbFkgKyB5KSAqIDAuNTtcclxuICBsZXQgZGlmZmVyZW5jZSA9IGluaXRpYWxZIC0gYmFzZVk7XHJcbiAgbGV0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICBmdW5jdGlvbiBzdGVwKCkge1xyXG4gICAgbGV0IG5vcm1hbGl6ZWRUaW1lID0gKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uO1xyXG4gICAgaWYgKG5vcm1hbGl6ZWRUaW1lID4gMSkgbm9ybWFsaXplZFRpbWUgPSAxO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIGJhc2VZICsgZGlmZmVyZW5jZSAqIE1hdGguY29zKG5vcm1hbGl6ZWRUaW1lICogTWF0aC5QSSkpO1xyXG4gICAgaWYgKG5vcm1hbGl6ZWRUaW1lIDwgMSkgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICB9XHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/scrollBy.js\n");

/***/ })

/******/ });