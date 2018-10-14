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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/works.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/data/works.json":
/*!************************************!*\
  !*** ./src/assets/data/works.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = [{\"title\":\"Сайт школы онлайн Образования\",\"image\":\"/assets/images/content/work-1.png\",\"used\":[\"html\",\"css\",\"javascript\"],\"link\":\"#1\"},{\"title\":\"Дизайн\",\"image\":\"/assets/images/content/work-2.png\",\"used\":[\"html\",\"css\"],\"link\":\"#2\"},{\"title\":\"Будда\",\"image\":\"/assets/images/content/work-3.png\",\"used\":[\"css\",\"javascript\"],\"link\":\"#3\"}];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9hc3NldHMvZGF0YS93b3Jrcy5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/data/works.json\n");

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

/***/ "./src/assets/scripts/modules/resizeSlider.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/modules/resizeSlider.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar resizeSlider = function resizeSlider() {\n  if (window.innerWidth <= 768) {\n    if (!document.querySelector('.slider__right-buttons--resize')) {\n      var sliderButtonsBlock = document.querySelector('.slider__right-buttons');\n      var slider = document.querySelector('.slider');\n      var changeSliderButtonsBlock = sliderButtonsBlock;\n\n      changeSliderButtonsBlock.classList.add('slider__right-buttons--resize');\n      sliderButtonsBlock.remove();\n      slider.insertBefore(changeSliderButtonsBlock, slider.children[0]);\n    }\n  } else {\n    if (document.querySelector('.slider__right-buttons--resize')) {\n      var _changeSliderButtonsBlock = document.querySelector('.slider__right-buttons--resize');\n      var _sliderButtonsBlock = _changeSliderButtonsBlock;\n      var sliderRightBlock = document.querySelector('.slider__right');\n\n      _sliderButtonsBlock.classList.remove('slider__right-buttons--resize');\n      sliderRightBlock.appendChild(_sliderButtonsBlock);\n    }\n  }\n};\n\nexports.default = function () {\n\n  resizeSlider();\n\n  window.addEventListener('resize', function () {\n    resizeSlider();\n  });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9yZXNpemVTbGlkZXIuanM/OGRlNyJdLCJuYW1lcyI6WyJyZXNpemVTbGlkZXIiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVyQnV0dG9uc0Jsb2NrIiwic2xpZGVyIiwiY2hhbmdlU2xpZGVyQnV0dG9uc0Jsb2NrIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJzbGlkZXJSaWdodEJsb2NrIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLE1BQUlDLE9BQU9DLFVBQVAsSUFBcUIsR0FBekIsRUFBOEI7QUFDNUIsUUFBSSxDQUFDQyxTQUFTQyxhQUFULENBQXVCLGdDQUF2QixDQUFMLEVBQStEO0FBQzdELFVBQUlDLHFCQUFxQkYsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBekI7QUFDQSxVQUFNRSxTQUFTSCxTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxVQUFJRywyQkFBMkJGLGtCQUEvQjs7QUFFQUUsK0JBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsK0JBQXZDO0FBQ0FKLHlCQUFtQkssTUFBbkI7QUFDQUosYUFBT0ssWUFBUCxDQUFvQkosd0JBQXBCLEVBQThDRCxPQUFPTSxRQUFQLENBQWdCLENBQWhCLENBQTlDO0FBQ0Q7QUFDRixHQVZELE1BVU87QUFDTCxRQUFJVCxTQUFTQyxhQUFULENBQXVCLGdDQUF2QixDQUFKLEVBQThEO0FBQzVELFVBQUlHLDRCQUEyQkosU0FBU0MsYUFBVCxDQUF1QixnQ0FBdkIsQ0FBL0I7QUFDQSxVQUFJQyxzQkFBcUJFLHlCQUF6QjtBQUNBLFVBQU1NLG1CQUFtQlYsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBekI7O0FBRUFDLDBCQUFtQkcsU0FBbkIsQ0FBNkJFLE1BQTdCLENBQW9DLCtCQUFwQztBQUNBRyx1QkFBaUJDLFdBQWpCLENBQTZCVCxtQkFBN0I7QUFDRDtBQUNGO0FBQ0YsQ0FyQkQ7O2tCQXlCZSxZQUFNOztBQUVuQkw7O0FBRUFDLFNBQU9jLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENmO0FBQ0QsR0FGRDtBQUlELEMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9yZXNpemVTbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXNpemVTbGlkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19yaWdodC1idXR0b25zLS1yZXNpemUnKSkge1xyXG4gICAgICBsZXQgc2xpZGVyQnV0dG9uc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fcmlnaHQtYnV0dG9ucycpO1xyXG4gICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XHJcbiAgICAgIGxldCBjaGFuZ2VTbGlkZXJCdXR0b25zQmxvY2sgPSBzbGlkZXJCdXR0b25zQmxvY2s7XHJcblxyXG4gICAgICBjaGFuZ2VTbGlkZXJCdXR0b25zQmxvY2suY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19yaWdodC1idXR0b25zLS1yZXNpemUnKTtcclxuICAgICAgc2xpZGVyQnV0dG9uc0Jsb2NrLnJlbW92ZSgpO1xyXG4gICAgICBzbGlkZXIuaW5zZXJ0QmVmb3JlKGNoYW5nZVNsaWRlckJ1dHRvbnNCbG9jaywgc2xpZGVyLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3JpZ2h0LWJ1dHRvbnMtLXJlc2l6ZScpKSB7XHJcbiAgICAgIGxldCBjaGFuZ2VTbGlkZXJCdXR0b25zQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19yaWdodC1idXR0b25zLS1yZXNpemUnKTtcclxuICAgICAgbGV0IHNsaWRlckJ1dHRvbnNCbG9jayA9IGNoYW5nZVNsaWRlckJ1dHRvbnNCbG9jaztcclxuICAgICAgY29uc3Qgc2xpZGVyUmlnaHRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3JpZ2h0Jyk7XHJcblxyXG4gICAgICBzbGlkZXJCdXR0b25zQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19yaWdodC1idXR0b25zLS1yZXNpemUnKTtcclxuICAgICAgc2xpZGVyUmlnaHRCbG9jay5hcHBlbmRDaGlsZChzbGlkZXJCdXR0b25zQmxvY2spO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgXHJcbiAgcmVzaXplU2xpZGVyKCk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICByZXNpemVTbGlkZXIoKTtcclxuICB9KTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/resizeSlider.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/slider.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/modules/slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar works = __webpack_require__(/*! ../../data/works.json */ \"./src/assets/data/works.json\");\nvar mainSlide = document.querySelector('.js-main-slide');\nvar sliderTitle = document.querySelector('.js-slider-title');\nvar sliderUsed = document.querySelector('.js-slider-used');\nvar sliderCiteBtn = document.querySelector('.js-slider-cite-btn');\nvar prevSlide = document.querySelector('.js-slider-prev');\nvar prevSlideImg = prevSlide.querySelector('img');\nvar nextSlide = document.querySelector('.js-slider-next');\nvar nextSlideImg = nextSlide.querySelector('img');\nvar sliderLength = works.length;\nvar currentSlide = 0;\n\nfunction slideLimiter(value) {\n  if (value >= sliderLength) {\n    return 0;\n  } else if (value < 0) {\n    return sliderLength - 1;\n  } else {\n    return value;\n  }\n}\n\nfunction fillSlider() {\n  var prev = slideLimiter(currentSlide - 1);\n  var next = slideLimiter(currentSlide + 1);\n\n  mainSlide.src = works[currentSlide].image;\n  prevSlideImg.src = works[prev].image;\n  nextSlideImg.src = works[next].image;\n  sliderTitle.innerText = works[currentSlide].title;\n  sliderUsed.innerText = works[currentSlide].used.join(', ');\n  sliderCiteBtn.href = works[currentSlide].link;\n}\n\nexports.default = function () {\n\n  prevSlide.addEventListener('click', function () {\n    currentSlide = slideLimiter(currentSlide - 1);\n    fillSlider();\n  });\n\n  nextSlide.addEventListener('click', function () {\n    currentSlide = slideLimiter(currentSlide + 1);\n    fillSlider();\n  });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/M2VhMSJdLCJuYW1lcyI6WyJ3b3JrcyIsInJlcXVpcmUiLCJtYWluU2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJUaXRsZSIsInNsaWRlclVzZWQiLCJzbGlkZXJDaXRlQnRuIiwicHJldlNsaWRlIiwicHJldlNsaWRlSW1nIiwibmV4dFNsaWRlIiwibmV4dFNsaWRlSW1nIiwic2xpZGVyTGVuZ3RoIiwibGVuZ3RoIiwiY3VycmVudFNsaWRlIiwic2xpZGVMaW1pdGVyIiwidmFsdWUiLCJmaWxsU2xpZGVyIiwicHJldiIsIm5leHQiLCJzcmMiLCJpbWFnZSIsImlubmVyVGV4dCIsInRpdGxlIiwidXNlZCIsImpvaW4iLCJocmVmIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsUUFBUUMsbUJBQU9BLENBQUMsMkRBQVIsQ0FBZDtBQUNBLElBQU1DLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBQ0EsSUFBTUMsY0FBY0YsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBcEI7QUFDQSxJQUFNRSxhQUFhSCxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFuQjtBQUNBLElBQU1HLGdCQUFnQkosU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBdEI7QUFDQSxJQUFNSSxZQUFZTCxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFsQjtBQUNBLElBQU1LLGVBQWVELFVBQVVKLGFBQVYsQ0FBd0IsS0FBeEIsQ0FBckI7QUFDQSxJQUFNTSxZQUFZUCxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFsQjtBQUNBLElBQU1PLGVBQWVELFVBQVVOLGFBQVYsQ0FBd0IsS0FBeEIsQ0FBckI7QUFDQSxJQUFNUSxlQUFlWixNQUFNYSxNQUEzQjtBQUNBLElBQUlDLGVBQWUsQ0FBbkI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsTUFBSUEsU0FBU0osWUFBYixFQUEyQjtBQUN6QixXQUFPLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUksUUFBUSxDQUFaLEVBQWU7QUFDcEIsV0FBT0osZUFBZSxDQUF0QjtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU9JLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQVNDLFVBQVQsR0FBc0I7QUFDcEIsTUFBSUMsT0FBT0gsYUFBYUQsZUFBZSxDQUE1QixDQUFYO0FBQ0EsTUFBSUssT0FBT0osYUFBYUQsZUFBZSxDQUE1QixDQUFYOztBQUVBWixZQUFVa0IsR0FBVixHQUFnQnBCLE1BQU1jLFlBQU4sRUFBb0JPLEtBQXBDO0FBQ0FaLGVBQWFXLEdBQWIsR0FBbUJwQixNQUFNa0IsSUFBTixFQUFZRyxLQUEvQjtBQUNBVixlQUFhUyxHQUFiLEdBQW1CcEIsTUFBTW1CLElBQU4sRUFBWUUsS0FBL0I7QUFDQWhCLGNBQVlpQixTQUFaLEdBQXdCdEIsTUFBTWMsWUFBTixFQUFvQlMsS0FBNUM7QUFDQWpCLGFBQVdnQixTQUFYLEdBQXVCdEIsTUFBTWMsWUFBTixFQUFvQlUsSUFBcEIsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBQXZCO0FBQ0FsQixnQkFBY21CLElBQWQsR0FBcUIxQixNQUFNYyxZQUFOLEVBQW9CYSxJQUF6QztBQUNEOztrQkFFYyxZQUFNOztBQUVuQm5CLFlBQVVvQixnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFNO0FBQ3hDZCxtQkFBZUMsYUFBYUQsZUFBZSxDQUE1QixDQUFmO0FBQ0FHO0FBQ0QsR0FIRDs7QUFLQVAsWUFBVWtCLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeENkLG1CQUFlQyxhQUFhRCxlQUFlLENBQTVCLENBQWY7QUFDQUc7QUFDRCxHQUhEO0FBS0QsQyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdvcmtzID0gcmVxdWlyZSgnLi4vLi4vZGF0YS93b3Jrcy5qc29uJyk7XHJcbmNvbnN0IG1haW5TbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tYWluLXNsaWRlJyk7XHJcbmNvbnN0IHNsaWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNsaWRlci10aXRsZScpO1xyXG5jb25zdCBzbGlkZXJVc2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNsaWRlci11c2VkJyk7XHJcbmNvbnN0IHNsaWRlckNpdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2xpZGVyLWNpdGUtYnRuJyk7XHJcbmNvbnN0IHByZXZTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zbGlkZXItcHJldicpO1xyXG5jb25zdCBwcmV2U2xpZGVJbWcgPSBwcmV2U2xpZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbmNvbnN0IG5leHRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zbGlkZXItbmV4dCcpO1xyXG5jb25zdCBuZXh0U2xpZGVJbWcgPSBuZXh0U2xpZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbmNvbnN0IHNsaWRlckxlbmd0aCA9IHdvcmtzLmxlbmd0aDtcclxubGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG5mdW5jdGlvbiBzbGlkZUxpbWl0ZXIodmFsdWUpIHtcclxuICBpZiAodmFsdWUgPj0gc2xpZGVyTGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgcmV0dXJuIHNsaWRlckxlbmd0aCAtIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxTbGlkZXIoKSB7XHJcbiAgbGV0IHByZXYgPSBzbGlkZUxpbWl0ZXIoY3VycmVudFNsaWRlIC0gMSk7XHJcbiAgbGV0IG5leHQgPSBzbGlkZUxpbWl0ZXIoY3VycmVudFNsaWRlICsgMSk7XHJcblxyXG4gIG1haW5TbGlkZS5zcmMgPSB3b3Jrc1tjdXJyZW50U2xpZGVdLmltYWdlO1xyXG4gIHByZXZTbGlkZUltZy5zcmMgPSB3b3Jrc1twcmV2XS5pbWFnZTtcclxuICBuZXh0U2xpZGVJbWcuc3JjID0gd29ya3NbbmV4dF0uaW1hZ2U7XHJcbiAgc2xpZGVyVGl0bGUuaW5uZXJUZXh0ID0gd29ya3NbY3VycmVudFNsaWRlXS50aXRsZTtcclxuICBzbGlkZXJVc2VkLmlubmVyVGV4dCA9IHdvcmtzW2N1cnJlbnRTbGlkZV0udXNlZC5qb2luKCcsICcpO1xyXG4gIHNsaWRlckNpdGVCdG4uaHJlZiA9IHdvcmtzW2N1cnJlbnRTbGlkZV0ubGluaztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICBwcmV2U2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjdXJyZW50U2xpZGUgPSBzbGlkZUxpbWl0ZXIoY3VycmVudFNsaWRlIC0gMSk7XHJcbiAgICBmaWxsU2xpZGVyKCk7XHJcbiAgfSlcclxuXHJcbiAgbmV4dFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3VycmVudFNsaWRlID0gc2xpZGVMaW1pdGVyKGN1cnJlbnRTbGlkZSArIDEpO1xyXG4gICAgZmlsbFNsaWRlcigpO1xyXG4gIH0pXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/slider.js\n");

/***/ }),

/***/ "./src/assets/scripts/works.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/works.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = __webpack_require__(/*! ./modules/slider */ \"./src/assets/scripts/modules/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nvar _resizeSlider = __webpack_require__(/*! ./modules/resizeSlider */ \"./src/assets/scripts/modules/resizeSlider.js\");\n\nvar _resizeSlider2 = _interopRequireDefault(_resizeSlider);\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _preloader2.default)();\n(0, _slider2.default)();\n(0, _resizeSlider2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL3dvcmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9tb2R1bGVzL3NsaWRlclwiO1xyXG5pbXBvcnQgcmVzaXplU2xpZGVyIGZyb20gXCIuL21vZHVsZXMvcmVzaXplU2xpZGVyXCI7XHJcbmltcG9ydCBwcmVsb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9wcmVsb2FkZXJcIjtcclxuXHJcbnByZWxvYWRlcigpO1xyXG5zbGlkZXIoKTtcclxucmVzaXplU2xpZGVyKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });