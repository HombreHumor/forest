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
eval("\n\nvar _scrollBy = __webpack_require__(/*! ./modules/scrollBy */ \"./src/assets/scripts/modules/scrollBy.js\");\n\nvar _scrollBy2 = _interopRequireDefault(_scrollBy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar articles = document.querySelectorAll('.blog__article');\nvar blogMenu = document.querySelector('.blog__nav-list');\nvar blog = document.querySelector('.blog__texts');\nvar blogMenuBtns = document.querySelectorAll('.blog__nav-btn');\n\nwindow.addEventListener('scroll', function () {\n  stickyNav();\n  articles.forEach(function (element) {\n    findActiveLink(element);\n  });\n});\n\nblogMenuBtns.forEach(function (element) {\n  scrollToArticle(element);\n});\n\nfunction scrollToArticle(element) {\n  element.addEventListener('click', function (event) {\n    var scrollTarget = document.getElementById(event.target.dataset.scrollto);\n    var scrollYCoord = scrollTarget.getBoundingClientRect().top;\n    (0, _scrollBy2.default)(scrollYCoord, 1000);\n  });\n}\n\nfunction findActiveLink(element) {\n  if (element.getBoundingClientRect().top <= 150) {\n    var targetLink = document.querySelector('[data-scrollto=\\'' + element.id + '\\']');\n    setActiveLink(targetLink);\n  }\n}\n\nfunction setActiveLink(targetBtn) {\n  blogMenuBtns.forEach(function (element) {\n    if (element == targetBtn) {\n      element.classList.add('js-blog-open-btn');\n    } else {\n      element.classList.remove('js-blog-open-btn');\n    }\n  });\n}\n\nfunction stickyNav() {\n  if (blog.getBoundingClientRect().top <= 0) {\n    blogMenu.classList.add('blog__nav-list--scroll');\n  } else {\n    blogMenu.classList.remove('blog__nav-list--scroll');\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImFydGljbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmxvZ01lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYmxvZyIsImJsb2dNZW51QnRucyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGlja3lOYXYiLCJmb3JFYWNoIiwiZmluZEFjdGl2ZUxpbmsiLCJlbGVtZW50Iiwic2Nyb2xsVG9BcnRpY2xlIiwic2Nyb2xsVGFyZ2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJzY3JvbGx0byIsInNjcm9sbFlDb29yZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRhcmdldExpbmsiLCJpZCIsInNldEFjdGl2ZUxpbmsiLCJ0YXJnZXRCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFNBQVNDLGdCQUFULENBQTBCLGdCQUExQixDQUFqQjtBQUNBLElBQU1DLFdBQVdGLFNBQVNHLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0FBQ0EsSUFBTUMsT0FBT0osU0FBU0csYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsSUFBTUUsZUFBZUwsU0FBU0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQXJCOztBQUVBSyxPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDQztBQUNBVCxXQUFTVSxPQUFULENBQWlCLG1CQUFXO0FBQzFCQyxtQkFBZUMsT0FBZjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BTixhQUFhSSxPQUFiLENBQXFCLG1CQUFXO0FBQzlCRyxrQkFBZ0JELE9BQWhCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTQyxlQUFULENBQXlCRCxPQUF6QixFQUFrQztBQUNoQ0EsVUFBUUosZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsaUJBQVM7QUFDekMsUUFBTU0sZUFBZWIsU0FBU2MsY0FBVCxDQUF3QkMsTUFBTUMsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxRQUE3QyxDQUFyQjtBQUNBLFFBQUlDLGVBQWVOLGFBQWFPLHFCQUFiLEdBQXFDQyxHQUF4RDtBQUNBLDRCQUFTRixZQUFULEVBQXVCLElBQXZCO0FBQ0QsR0FKRDtBQUtEOztBQUVELFNBQVNULGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLE1BQUlBLFFBQVFTLHFCQUFSLEdBQWdDQyxHQUFoQyxJQUF1QyxHQUEzQyxFQUFnRDtBQUM5QyxRQUFNQyxhQUFhdEIsU0FBU0csYUFBVCx1QkFBMENRLFFBQVFZLEVBQWxELFNBQW5CO0FBQ0FDLGtCQUFjRixVQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRSxhQUFULENBQXVCQyxTQUF2QixFQUFrQztBQUNoQ3BCLGVBQWFJLE9BQWIsQ0FBcUIsbUJBQVc7QUFDOUIsUUFBSUUsV0FBV2MsU0FBZixFQUEwQjtBQUN4QmQsY0FBUWUsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isa0JBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xoQixjQUFRZSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixrQkFBekI7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRCxTQUFTcEIsU0FBVCxHQUFxQjtBQUNuQixNQUFJSixLQUFLZ0IscUJBQUwsR0FBNkJDLEdBQTdCLElBQW9DLENBQXhDLEVBQTJDO0FBQ3pDbkIsYUFBU3dCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNELEdBRkQsTUFFTztBQUNMekIsYUFBU3dCLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLHdCQUExQjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JvbGxCeSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsQnknO1xyXG5cclxuY29uc3QgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZ19fYXJ0aWNsZScpO1xyXG5jb25zdCBibG9nTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19uYXYtbGlzdCcpO1xyXG5jb25zdCBibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2dfX3RleHRzJyk7XHJcbmNvbnN0IGJsb2dNZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nX19uYXYtYnRuJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gIHN0aWNreU5hdigpO1xyXG4gIGFydGljbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBmaW5kQWN0aXZlTGluayhlbGVtZW50KVxyXG4gIH0pO1xyXG59KVxyXG5cclxuYmxvZ01lbnVCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgc2Nyb2xsVG9BcnRpY2xlKGVsZW1lbnQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9BcnRpY2xlKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2Nyb2xsdG8pO1xyXG4gICAgbGV0IHNjcm9sbFlDb29yZCA9IHNjcm9sbFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBzY3JvbGxCeShzY3JvbGxZQ29vcmQsIDEwMDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQWN0aXZlTGluayhlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDE1MCkge1xyXG4gICAgY29uc3QgdGFyZ2V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbHRvPScke2VsZW1lbnQuaWR9J11gKTtcclxuICAgIHNldEFjdGl2ZUxpbmsodGFyZ2V0TGluayk7XHJcbiAgfSBcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlTGluayh0YXJnZXRCdG4pIHtcclxuICBibG9nTWVudUJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50ID09IHRhcmdldEJ0bikge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzLWJsb2ctb3Blbi1idG4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnanMtYmxvZy1vcGVuLWJ0bicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGlja3lOYXYoKSB7XHJcbiAgaWYgKGJsb2cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApIHtcclxuICAgIGJsb2dNZW51LmNsYXNzTGlzdC5hZGQoJ2Jsb2dfX25hdi1saXN0LS1zY3JvbGwnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYmxvZ01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYmxvZ19fbmF2LWxpc3QtLXNjcm9sbCcpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

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