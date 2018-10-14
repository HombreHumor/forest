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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toggleFace = __webpack_require__(/*! ./modules/toggleFace */ \"./src/assets/scripts/modules/toggleFace.js\");\n\nvar _toggleFace2 = _interopRequireDefault(_toggleFace);\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _toggleFace2.default)();\n(0, _preloader2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZ2dsZUZhY2UgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVGYWNlXCI7XHJcbmltcG9ydCBwcmVsb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9wcmVsb2FkZXJcIjtcclxuXHJcbnRvZ2dsZUZhY2UoKTtcclxucHJlbG9hZGVyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var preloader = function () {\n    var preloadImg = document.getElementsByTagName('*');\n    var preloadBlock = document.querySelector('.js-preloader');\n    var preloadText = document.querySelector('.js-preloader-text');\n    var regImgUrl = /background-image: url\\(['\"]?(.*?)['\"]?\\)/i;\n    var wrapper = document.querySelector('.js-preloader-wrapper');\n    var imgArr = [];\n    var progress = 0;\n    var img = void 0;\n    var allImg = void 0;\n    var shadowImg = void 0;\n\n    return {\n      shadowImgAdd: function shadowImgAdd() {\n        shadowImg = document.createElement('img');\n        shadowImg.setAttribute('src', img);\n        imgArr.push(shadowImg);\n      },\n\n      show: function show() {\n        var _this = this;\n\n        wrapper.classList.add('wrapper-hidden');\n\n        return new Promise(function (resolve) {\n          for (var i = 0; i < preloadImg.length; i++) {\n            if (preloadImg[i].matches('img')) {\n              img = preloadImg[i].getAttribute('src');\n              _this.shadowImgAdd();\n            } else if (preloadImg[i].hasAttribute('style') && regImgUrl.test(preloadImg[i].getAttribute('style'))) {\n              img = preloadImg[i].getAttribute('style').slice(22, -2);\n              _this.shadowImgAdd();\n            }\n\n            allImg = 100 / imgArr.length;\n\n            for (var j = 0; j < imgArr.length; j++) {\n              // preloadText.innerText = `${Math.ceil(progress)}%`;\n              imgArr[j].onload = function () {\n                progress += allImg;\n                if (progress < 100) {\n                  preloadText.innerText = Math.ceil(progress) + '%';\n                } else {\n                  progress = 100;\n                  preloadText.innerText = progress + '%';\n                }\n\n                if (Math.ceil(progress) === 100) {\n                  resolve();\n                }\n              };\n            }\n          }\n        }).then(function () {\n          preloadBlock.style.display = 'none';\n          wrapper.classList.remove('wrapper-hidden');\n        });\n      }\n    };\n  }();\n\n  preloader.show();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJwcmVsb2FkSW1nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInByZWxvYWRCbG9jayIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVsb2FkVGV4dCIsInJlZ0ltZ1VybCIsIndyYXBwZXIiLCJpbWdBcnIiLCJwcm9ncmVzcyIsImltZyIsImFsbEltZyIsInNoYWRvd0ltZyIsInNoYWRvd0ltZ0FkZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwdXNoIiwic2hvdyIsImNsYXNzTGlzdCIsImFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaSIsImxlbmd0aCIsIm1hdGNoZXMiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJ0ZXN0Iiwic2xpY2UiLCJqIiwib25sb2FkIiwiaW5uZXJUZXh0IiwiTWF0aCIsImNlaWwiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsWUFBTTtBQUNuQixNQUFNQSxZQUFhLFlBQVk7QUFDN0IsUUFBTUMsYUFBYUMsU0FBU0Msb0JBQVQsQ0FBOEIsR0FBOUIsQ0FBbkI7QUFDQSxRQUFNQyxlQUFlRixTQUFTRyxhQUFULENBQXVCLGVBQXZCLENBQXJCO0FBQ0EsUUFBTUMsY0FBY0osU0FBU0csYUFBVCxDQUF1QixvQkFBdkIsQ0FBcEI7QUFDQSxRQUFNRSxZQUFZLDJDQUFsQjtBQUNBLFFBQU1DLFVBQVVOLFNBQVNHLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWhCO0FBQ0EsUUFBTUksU0FBUyxFQUFmO0FBQ0EsUUFBSUMsV0FBVyxDQUFmO0FBQ0EsUUFBSUMsWUFBSjtBQUNBLFFBQUlDLGVBQUo7QUFDQSxRQUFJQyxrQkFBSjs7QUFFQSxXQUFPO0FBQ0xDLG9CQUFjLHdCQUFZO0FBQ3hCRCxvQkFBWVgsU0FBU2EsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FGLGtCQUFVRyxZQUFWLENBQXVCLEtBQXZCLEVBQThCTCxHQUE5QjtBQUNBRixlQUFPUSxJQUFQLENBQVlKLFNBQVo7QUFDRCxPQUxJOztBQU9MSyxZQUFNLGdCQUFZO0FBQUE7O0FBQ2hCVixnQkFBUVcsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsZ0JBQXRCOztBQUVBLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixlQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXRCLFdBQVd1QixNQUEvQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsZ0JBQUl0QixXQUFXc0IsQ0FBWCxFQUFjRSxPQUFkLENBQXNCLEtBQXRCLENBQUosRUFBa0M7QUFDaENkLG9CQUFNVixXQUFXc0IsQ0FBWCxFQUFjRyxZQUFkLENBQTJCLEtBQTNCLENBQU47QUFDQSxvQkFBS1osWUFBTDtBQUNELGFBSEQsTUFHTyxJQUFJYixXQUFXc0IsQ0FBWCxFQUFjSSxZQUFkLENBQTJCLE9BQTNCLEtBQXVDcEIsVUFBVXFCLElBQVYsQ0FBZTNCLFdBQVdzQixDQUFYLEVBQWNHLFlBQWQsQ0FBMkIsT0FBM0IsQ0FBZixDQUEzQyxFQUFnRztBQUNyR2Ysb0JBQU9WLFdBQVdzQixDQUFYLEVBQWNHLFlBQWQsQ0FBMkIsT0FBM0IsRUFBb0NHLEtBQXBDLENBQTBDLEVBQTFDLEVBQThDLENBQUMsQ0FBL0MsQ0FBUDtBQUNBLG9CQUFLZixZQUFMO0FBQ0Q7O0FBRURGLHFCQUFTLE1BQU1ILE9BQU9lLE1BQXRCOztBQUVBLGlCQUFLLElBQUlNLElBQUksQ0FBYixFQUFnQkEsSUFBSXJCLE9BQU9lLE1BQTNCLEVBQW1DTSxHQUFuQyxFQUF3QztBQUN0QztBQUNBckIscUJBQU9xQixDQUFQLEVBQVVDLE1BQVYsR0FBbUIsWUFBWTtBQUM3QnJCLDRCQUFZRSxNQUFaO0FBQ0Esb0JBQUlGLFdBQVcsR0FBZixFQUFvQjtBQUNsQkosOEJBQVkwQixTQUFaLEdBQXdCQyxLQUFLQyxJQUFMLENBQVV4QixRQUFWLElBQXNCLEdBQTlDO0FBQ0QsaUJBRkQsTUFFTztBQUNMQSw2QkFBVyxHQUFYO0FBQ0FKLDhCQUFZMEIsU0FBWixHQUF3QnRCLFdBQVcsR0FBbkM7QUFDRDs7QUFFRCxvQkFBSXVCLEtBQUtDLElBQUwsQ0FBVXhCLFFBQVYsTUFBd0IsR0FBNUIsRUFBaUM7QUFDL0JZO0FBQ0Q7QUFDRixlQVpEO0FBYUQ7QUFDRjtBQUNGLFNBN0JNLEVBNkJKYSxJQTdCSSxDQTZCQyxZQUFZO0FBQ2xCL0IsdUJBQWFnQyxLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBN0Isa0JBQVFXLFNBQVIsQ0FBa0JtQixNQUFsQixDQUF5QixnQkFBekI7QUFDRCxTQWhDTSxDQUFQO0FBaUNEO0FBM0NJLEtBQVA7QUE2Q0QsR0F6RGlCLEVBQWxCOztBQTJEQXRDLFlBQVVrQixJQUFWO0FBQ0QsQyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3ByZWxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBwcmVsb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcHJlbG9hZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XHJcbiAgICBjb25zdCBwcmVsb2FkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJlbG9hZGVyJyk7XHJcbiAgICBjb25zdCBwcmVsb2FkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmVsb2FkZXItdGV4dCcpO1xyXG4gICAgY29uc3QgcmVnSW1nVXJsID0gL2JhY2tncm91bmQtaW1hZ2U6IHVybFxcKFsnXCJdPyguKj8pWydcIl0/XFwpL2k7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByZWxvYWRlci13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBpbWdBcnIgPSBbXTtcclxuICAgIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgICBsZXQgaW1nO1xyXG4gICAgbGV0IGFsbEltZztcclxuICAgIGxldCBzaGFkb3dJbWc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2hhZG93SW1nQWRkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2hhZG93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgc2hhZG93SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nKTtcclxuICAgICAgICBpbWdBcnIucHVzaChzaGFkb3dJbWcpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWxvYWRJbWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHByZWxvYWRJbWdbaV0ubWF0Y2hlcygnaW1nJykpIHtcclxuICAgICAgICAgICAgICBpbWcgPSBwcmVsb2FkSW1nW2ldLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaGFkb3dJbWdBZGQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkSW1nW2ldLmhhc0F0dHJpYnV0ZSgnc3R5bGUnKSAmJiByZWdJbWdVcmwudGVzdChwcmVsb2FkSW1nW2ldLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSkpIHtcclxuICAgICAgICAgICAgICBpbWcgPSAocHJlbG9hZEltZ1tpXS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykuc2xpY2UoMjIsIC0yKSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaGFkb3dJbWdBZGQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWxsSW1nID0gMTAwIC8gaW1nQXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1nQXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgLy8gcHJlbG9hZFRleHQuaW5uZXJUZXh0ID0gYCR7TWF0aC5jZWlsKHByb2dyZXNzKX0lYDtcclxuICAgICAgICAgICAgICBpbWdBcnJbal0ub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gYWxsSW1nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHByZWxvYWRUZXh0LmlubmVyVGV4dCA9IE1hdGguY2VpbChwcm9ncmVzcykgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgcHJlbG9hZFRleHQuaW5uZXJUZXh0ID0gcHJvZ3Jlc3MgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguY2VpbChwcm9ncmVzcykgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcHJlbG9hZEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dyYXBwZXItaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcblxyXG4gIHByZWxvYWRlci5zaG93KCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/toggleFace.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/modules/toggleFace.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar welcomeContainer = document.querySelector('.welcome__container');\nvar authContainer = document.querySelector('.auth__container');\nvar authBtn = document.querySelector('.auth-btn');\nvar backToMainBtn = document.querySelector('.js-back-to-main');\n\nvar toggleFace = function toggleFace() {\n  welcomeContainer.classList.toggle('js-toogle-face');\n  authContainer.classList.toggle('js-toogle-face');\n};\n\nexports.default = function () {\n  authBtn.addEventListener('click', function () {\n    toggleFace();\n    authBtn.style.display = 'none';\n  });\n  backToMainBtn.addEventListener('click', function () {\n    toggleFace();\n    authBtn.style.display = 'block';\n  });\n\n  if (window.location.href.indexOf('auth') + 1) {\n    toggleFace();\n    authBtn.style.display = 'none';\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy90b2dnbGVGYWNlLmpzPzdlMzQiXSwibmFtZXMiOlsid2VsY29tZUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImF1dGhDb250YWluZXIiLCJhdXRoQnRuIiwiYmFja1RvTWFpbkJ0biIsInRvZ2dsZUZhY2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxtQkFBbUJDLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCRixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUNBLElBQU1FLFVBQVVILFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNRyxnQkFBZ0JKLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCOztBQUVBLElBQU1JLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCTixtQkFBaUJPLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQyxnQkFBbEM7QUFDQUwsZ0JBQWNJLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLGdCQUEvQjtBQUNELENBSEQ7O2tCQUtlLFlBQU07QUFDbkJKLFVBQVFLLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdENIO0FBQ0FGLFlBQVFNLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNELEdBSEQ7QUFJQU4sZ0JBQWNJLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUNIO0FBQ0FGLFlBQVFNLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNELEdBSEQ7O0FBS0EsTUFBSUMsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE9BQXJCLENBQTZCLE1BQTdCLElBQXVDLENBQTNDLEVBQThDO0FBQzVDVDtBQUNBRixZQUFRTSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDtBQUNGLEMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy90b2dnbGVGYWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VsY29tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lX19jb250YWluZXInKTtcclxuY29uc3QgYXV0aENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoX19jb250YWluZXInKTtcclxuY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ0bicpO1xyXG5jb25zdCBiYWNrVG9NYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJhY2stdG8tbWFpbicpO1xyXG5cclxuY29uc3QgdG9nZ2xlRmFjZSA9ICgpID0+IHtcclxuICB3ZWxjb21lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2pzLXRvb2dsZS1mYWNlJyk7XHJcbiAgYXV0aENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdqcy10b29nbGUtZmFjZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUZhY2UoKTtcclxuICAgIGF1dGhCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxuICBiYWNrVG9NYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9nZ2xlRmFjZSgpO1xyXG4gICAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9KTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2F1dGgnKSArIDEpIHtcclxuICAgIHRvZ2dsZUZhY2UoKTtcclxuICAgIGF1dGhCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/toggleFace.js\n");

/***/ })

/******/ });