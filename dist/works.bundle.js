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
eval("\n\nvar _slider = __webpack_require__(/*! ./modules/slider */ \"./src/assets/scripts/modules/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nvar _resizeSlider = __webpack_require__(/*! ./modules/resizeSlider */ \"./src/assets/scripts/modules/resizeSlider.js\");\n\nvar _resizeSlider2 = _interopRequireDefault(_resizeSlider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _slider2.default)();\n(0, _resizeSlider2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2xpZGVyIGZyb20gXCIuL21vZHVsZXMvc2xpZGVyXCI7XHJcbmltcG9ydCByZXNpemVTbGlkZXIgZnJvbSBcIi4vbW9kdWxlcy9yZXNpemVTbGlkZXJcIjtcclxuXHJcbnNsaWRlcigpO1xyXG5yZXNpemVTbGlkZXIoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });