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
eval("\n\nvar _scrollBy = __webpack_require__(/*! ./modules/scrollBy */ \"./src/assets/scripts/modules/scrollBy.js\");\n\nvar _scrollBy2 = _interopRequireDefault(_scrollBy);\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _preloader2.default)();\n\nvar articles = document.querySelectorAll('.blog__article');\nvar blogMenu = document.querySelector('.blog__nav-list');\nvar blog = document.querySelector('.blog__texts');\nvar blogMenuBtns = document.querySelectorAll('.blog__nav-btn');\n\nwindow.addEventListener('scroll', function () {\n  stickyNav();\n  articles.forEach(function (element) {\n    findActiveLink(element);\n  });\n});\n\nblogMenuBtns.forEach(function (element) {\n  scrollToArticle(element);\n});\n\nfunction scrollToArticle(element) {\n  element.addEventListener('click', function (event) {\n    var scrollTarget = document.getElementById(event.target.dataset.scrollto);\n    var scrollYCoord = scrollTarget.getBoundingClientRect().top;\n    (0, _scrollBy2.default)(scrollYCoord, 1000);\n  });\n}\n\nfunction findActiveLink(element) {\n  if (element.getBoundingClientRect().top <= 150) {\n    var targetLink = document.querySelector('[data-scrollto=\\'' + element.id + '\\']');\n    setActiveLink(targetLink);\n  }\n}\n\nfunction setActiveLink(targetBtn) {\n  blogMenuBtns.forEach(function (element) {\n    if (element == targetBtn) {\n      element.classList.add('js-blog-open-btn');\n    } else {\n      element.classList.remove('js-blog-open-btn');\n    }\n  });\n}\n\nfunction stickyNav() {\n  if (blog.getBoundingClientRect().top <= 0) {\n    blogMenu.classList.add('blog__nav-list--scroll');\n  } else {\n    blogMenu.classList.remove('blog__nav-list--scroll');\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImFydGljbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmxvZ01lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYmxvZyIsImJsb2dNZW51QnRucyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGlja3lOYXYiLCJmb3JFYWNoIiwiZmluZEFjdGl2ZUxpbmsiLCJlbGVtZW50Iiwic2Nyb2xsVG9BcnRpY2xlIiwic2Nyb2xsVGFyZ2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJzY3JvbGx0byIsInNjcm9sbFlDb29yZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRhcmdldExpbmsiLCJpZCIsInNldEFjdGl2ZUxpbmsiLCJ0YXJnZXRCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsV0FBV0MsU0FBU0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWpCO0FBQ0EsSUFBTUMsV0FBV0YsU0FBU0csYUFBVCxDQUF1QixpQkFBdkIsQ0FBakI7QUFDQSxJQUFNQyxPQUFPSixTQUFTRyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxJQUFNRSxlQUFlTCxTQUFTQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBckI7O0FBRUFLLE9BQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENDO0FBQ0FULFdBQVNVLE9BQVQsQ0FBaUIsbUJBQVc7QUFDMUJDLG1CQUFlQyxPQUFmO0FBQ0QsR0FGRDtBQUdELENBTEQ7O0FBT0FOLGFBQWFJLE9BQWIsQ0FBcUIsbUJBQVc7QUFDOUJHLGtCQUFnQkQsT0FBaEI7QUFDRCxDQUZEOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUJELE9BQXpCLEVBQWtDO0FBQ2hDQSxVQUFRSixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxpQkFBUztBQUN6QyxRQUFNTSxlQUFlYixTQUFTYyxjQUFULENBQXdCQyxNQUFNQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQTdDLENBQXJCO0FBQ0EsUUFBSUMsZUFBZU4sYUFBYU8scUJBQWIsR0FBcUNDLEdBQXhEO0FBQ0EsNEJBQVNGLFlBQVQsRUFBdUIsSUFBdkI7QUFDRCxHQUpEO0FBS0Q7O0FBRUQsU0FBU1QsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFDL0IsTUFBSUEsUUFBUVMscUJBQVIsR0FBZ0NDLEdBQWhDLElBQXVDLEdBQTNDLEVBQWdEO0FBQzlDLFFBQU1DLGFBQWF0QixTQUFTRyxhQUFULHVCQUEwQ1EsUUFBUVksRUFBbEQsU0FBbkI7QUFDQUMsa0JBQWNGLFVBQWQ7QUFDRDtBQUNGOztBQUVELFNBQVNFLGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDO0FBQ2hDcEIsZUFBYUksT0FBYixDQUFxQixtQkFBVztBQUM5QixRQUFJRSxXQUFXYyxTQUFmLEVBQTBCO0FBQ3hCZCxjQUFRZSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixrQkFBdEI7QUFDRCxLQUZELE1BRU87QUFDTGhCLGNBQVFlLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGtCQUF6QjtBQUNEO0FBQ0YsR0FORDtBQU9EOztBQUVELFNBQVNwQixTQUFULEdBQXFCO0FBQ25CLE1BQUlKLEtBQUtnQixxQkFBTCxHQUE2QkMsR0FBN0IsSUFBb0MsQ0FBeEMsRUFBMkM7QUFDekNuQixhQUFTd0IsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsd0JBQXZCO0FBQ0QsR0FGRCxNQUVPO0FBQ0x6QixhQUFTd0IsU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsd0JBQTFCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjcm9sbEJ5IGZyb20gJy4vbW9kdWxlcy9zY3JvbGxCeSc7XHJcbmltcG9ydCBwcmVsb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9wcmVsb2FkZXJcIjtcclxuXHJcbnByZWxvYWRlcigpO1xyXG5cclxuY29uc3QgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZ19fYXJ0aWNsZScpO1xyXG5jb25zdCBibG9nTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19uYXYtbGlzdCcpO1xyXG5jb25zdCBibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2dfX3RleHRzJyk7XHJcbmNvbnN0IGJsb2dNZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nX19uYXYtYnRuJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gIHN0aWNreU5hdigpO1xyXG4gIGFydGljbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBmaW5kQWN0aXZlTGluayhlbGVtZW50KVxyXG4gIH0pO1xyXG59KVxyXG5cclxuYmxvZ01lbnVCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgc2Nyb2xsVG9BcnRpY2xlKGVsZW1lbnQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9BcnRpY2xlKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2Nyb2xsdG8pO1xyXG4gICAgbGV0IHNjcm9sbFlDb29yZCA9IHNjcm9sbFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBzY3JvbGxCeShzY3JvbGxZQ29vcmQsIDEwMDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQWN0aXZlTGluayhlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDE1MCkge1xyXG4gICAgY29uc3QgdGFyZ2V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbHRvPScke2VsZW1lbnQuaWR9J11gKTtcclxuICAgIHNldEFjdGl2ZUxpbmsodGFyZ2V0TGluayk7XHJcbiAgfSBcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlTGluayh0YXJnZXRCdG4pIHtcclxuICBibG9nTWVudUJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50ID09IHRhcmdldEJ0bikge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzLWJsb2ctb3Blbi1idG4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnanMtYmxvZy1vcGVuLWJ0bicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGlja3lOYXYoKSB7XHJcbiAgaWYgKGJsb2cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApIHtcclxuICAgIGJsb2dNZW51LmNsYXNzTGlzdC5hZGQoJ2Jsb2dfX25hdi1saXN0LS1zY3JvbGwnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYmxvZ01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYmxvZ19fbmF2LWxpc3QtLXNjcm9sbCcpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var preloader = function () {\n    var preloadImg = document.getElementsByTagName('*');\n    var preloadBlock = document.querySelector('.js-preloader');\n    var preloadText = document.querySelector('.js-preloader-text');\n    var regImgUrl = /background-image: url\\(['\"]?(.*?)['\"]?\\)/i;\n    var wrapper = document.querySelector('.js-preloader-wrapper');\n    var imgArr = [];\n    var progress = 0;\n    var img = void 0;\n    var allImg = void 0;\n    var shadowImg = void 0;\n\n    return {\n      shadowImgAdd: function shadowImgAdd() {\n        shadowImg = document.createElement('img');\n        shadowImg.setAttribute('src', img);\n        imgArr.push(shadowImg);\n      },\n\n      show: function show() {\n        var _this = this;\n\n        wrapper.classList.add('wrapper-hidden');\n\n        return new Promise(function (resolve) {\n          for (var i = 0; i < preloadImg.length; i++) {\n            if (preloadImg[i].matches('img')) {\n              img = preloadImg[i].getAttribute('src');\n              _this.shadowImgAdd();\n            } else if (preloadImg[i].hasAttribute('style') && regImgUrl.test(preloadImg[i].getAttribute('style'))) {\n              img = preloadImg[i].getAttribute('style').slice(22, -2);\n              _this.shadowImgAdd();\n            }\n\n            allImg = 100 / imgArr.length;\n            for (var j = 0; j < imgArr.length; j++) {\n              imgArr[j].onload = function () {\n                progress += allImg;\n                console.log(progress);\n                if (progress < 100) {\n                  preloadText.innerText = Math.ceil(progress) + '%';\n                } else {\n                  progress = 100;\n                  preloadText.innerText = progress + '%';\n                }\n                console.log(preloadText);\n                console.log(preloadText.innerText);\n                if (Math.ceil(progress) === 100) {\n                  setTimeout(function () {\n                    resolve();\n                  }, 1000);\n                }\n              };\n            }\n          }\n        }).then(function () {\n          preloadBlock.style.display = 'none';\n          wrapper.classList.remove('wrapper-hidden');\n        });\n      }\n    };\n  }();\n\n  preloader.show();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJwcmVsb2FkSW1nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInByZWxvYWRCbG9jayIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVsb2FkVGV4dCIsInJlZ0ltZ1VybCIsIndyYXBwZXIiLCJpbWdBcnIiLCJwcm9ncmVzcyIsImltZyIsImFsbEltZyIsInNoYWRvd0ltZyIsInNoYWRvd0ltZ0FkZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwdXNoIiwic2hvdyIsImNsYXNzTGlzdCIsImFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaSIsImxlbmd0aCIsIm1hdGNoZXMiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJ0ZXN0Iiwic2xpY2UiLCJqIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsIk1hdGgiLCJjZWlsIiwic2V0VGltZW91dCIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxZQUFNO0FBQ25CLE1BQU1BLFlBQWEsWUFBWTtBQUM3QixRQUFNQyxhQUFhQyxTQUFTQyxvQkFBVCxDQUE4QixHQUE5QixDQUFuQjtBQUNBLFFBQU1DLGVBQWVGLFNBQVNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBckI7QUFDQSxRQUFNQyxjQUFjSixTQUFTRyxhQUFULENBQXVCLG9CQUF2QixDQUFwQjtBQUNBLFFBQU1FLFlBQVksMkNBQWxCO0FBQ0EsUUFBTUMsVUFBVU4sU0FBU0csYUFBVCxDQUF1Qix1QkFBdkIsQ0FBaEI7QUFDQSxRQUFNSSxTQUFTLEVBQWY7QUFDQSxRQUFJQyxXQUFXLENBQWY7QUFDQSxRQUFJQyxZQUFKO0FBQ0EsUUFBSUMsZUFBSjtBQUNBLFFBQUlDLGtCQUFKOztBQUVBLFdBQU87QUFDTEMsb0JBQWMsd0JBQVk7QUFDeEJELG9CQUFZWCxTQUFTYSxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUYsa0JBQVVHLFlBQVYsQ0FBdUIsS0FBdkIsRUFBOEJMLEdBQTlCO0FBQ0FGLGVBQU9RLElBQVAsQ0FBWUosU0FBWjtBQUNELE9BTEk7O0FBT0xLLFlBQU0sZ0JBQVk7QUFBQTs7QUFDaEJWLGdCQUFRVyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixnQkFBdEI7O0FBRUEsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLGVBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdEIsV0FBV3VCLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxnQkFBSXRCLFdBQVdzQixDQUFYLEVBQWNFLE9BQWQsQ0FBc0IsS0FBdEIsQ0FBSixFQUFrQztBQUNoQ2Qsb0JBQU1WLFdBQVdzQixDQUFYLEVBQWNHLFlBQWQsQ0FBMkIsS0FBM0IsQ0FBTjtBQUNBLG9CQUFLWixZQUFMO0FBQ0QsYUFIRCxNQUdPLElBQUliLFdBQVdzQixDQUFYLEVBQWNJLFlBQWQsQ0FBMkIsT0FBM0IsS0FBdUNwQixVQUFVcUIsSUFBVixDQUFlM0IsV0FBV3NCLENBQVgsRUFBY0csWUFBZCxDQUEyQixPQUEzQixDQUFmLENBQTNDLEVBQWdHO0FBQ3JHZixvQkFBT1YsV0FBV3NCLENBQVgsRUFBY0csWUFBZCxDQUEyQixPQUEzQixFQUFvQ0csS0FBcEMsQ0FBMEMsRUFBMUMsRUFBOEMsQ0FBQyxDQUEvQyxDQUFQO0FBQ0Esb0JBQUtmLFlBQUw7QUFDRDs7QUFFREYscUJBQVMsTUFBTUgsT0FBT2UsTUFBdEI7QUFDQSxpQkFBSyxJQUFJTSxJQUFJLENBQWIsRUFBZ0JBLElBQUlyQixPQUFPZSxNQUEzQixFQUFtQ00sR0FBbkMsRUFBd0M7QUFDdENyQixxQkFBT3FCLENBQVAsRUFBVUMsTUFBVixHQUFtQixZQUFZO0FBQzdCckIsNEJBQVlFLE1BQVo7QUFDQW9CLHdCQUFRQyxHQUFSLENBQVl2QixRQUFaO0FBQ0Esb0JBQUlBLFdBQVcsR0FBZixFQUFvQjtBQUNsQkosOEJBQVk0QixTQUFaLEdBQTJCQyxLQUFLQyxJQUFMLENBQVUxQixRQUFWLENBQTNCO0FBQ0QsaUJBRkQsTUFFTztBQUNMQSw2QkFBVyxHQUFYO0FBQ0FKLDhCQUFZNEIsU0FBWixHQUF3QnhCLFdBQVcsR0FBbkM7QUFDRDtBQUNEc0Isd0JBQVFDLEdBQVIsQ0FBWTNCLFdBQVo7QUFDQTBCLHdCQUFRQyxHQUFSLENBQVkzQixZQUFZNEIsU0FBeEI7QUFDQSxvQkFBSUMsS0FBS0MsSUFBTCxDQUFVMUIsUUFBVixNQUF3QixHQUE1QixFQUFpQztBQUMvQjJCLDZCQUFXLFlBQU07QUFDZmY7QUFDRCxtQkFGRCxFQUVHLElBRkg7QUFHRDtBQUNGLGVBaEJEO0FBaUJEO0FBQ0Y7QUFDRixTQS9CTSxFQStCSmdCLElBL0JJLENBK0JDLFlBQVk7QUFDbEJsQyx1QkFBYW1DLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0FoQyxrQkFBUVcsU0FBUixDQUFrQnNCLE1BQWxCLENBQXlCLGdCQUF6QjtBQUNELFNBbENNLENBQVA7QUFtQ0Q7QUE3Q0ksS0FBUDtBQStDRCxHQTNEaUIsRUFBbEI7O0FBNkRBekMsWUFBVWtCLElBQVY7QUFDRCxDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcHJlbG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IHByZWxvYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBwcmVsb2FkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcclxuICAgIGNvbnN0IHByZWxvYWRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmVsb2FkZXInKTtcclxuICAgIGNvbnN0IHByZWxvYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByZWxvYWRlci10ZXh0Jyk7XHJcbiAgICBjb25zdCByZWdJbWdVcmwgPSAvYmFja2dyb3VuZC1pbWFnZTogdXJsXFwoWydcIl0/KC4qPylbJ1wiXT9cXCkvaTtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJlbG9hZGVyLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGltZ0FyciA9IFtdO1xyXG4gICAgbGV0IHByb2dyZXNzID0gMDtcclxuICAgIGxldCBpbWc7XHJcbiAgICBsZXQgYWxsSW1nO1xyXG4gICAgbGV0IHNoYWRvd0ltZztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaGFkb3dJbWdBZGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaGFkb3dJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBzaGFkb3dJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xyXG4gICAgICAgIGltZ0Fyci5wdXNoKHNoYWRvd0ltZyk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWhpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlbG9hZEltZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocHJlbG9hZEltZ1tpXS5tYXRjaGVzKCdpbWcnKSkge1xyXG4gICAgICAgICAgICAgIGltZyA9IHByZWxvYWRJbWdbaV0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuICAgICAgICAgICAgICB0aGlzLnNoYWRvd0ltZ0FkZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZWxvYWRJbWdbaV0uaGFzQXR0cmlidXRlKCdzdHlsZScpICYmIHJlZ0ltZ1VybC50ZXN0KHByZWxvYWRJbWdbaV0uZ2V0QXR0cmlidXRlKCdzdHlsZScpKSkge1xyXG4gICAgICAgICAgICAgIGltZyA9IChwcmVsb2FkSW1nW2ldLmdldEF0dHJpYnV0ZSgnc3R5bGUnKS5zbGljZSgyMiwgLTIpKTtcclxuICAgICAgICAgICAgICB0aGlzLnNoYWRvd0ltZ0FkZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbGxJbWcgPSAxMDAgLyBpbWdBcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltZ0Fyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIGltZ0FycltqXS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSBhbGxJbWc7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgcHJlbG9hZFRleHQuaW5uZXJUZXh0ID0gYCR7TWF0aC5jZWlsKHByb2dyZXNzKX0lYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICBwcmVsb2FkVGV4dC5pbm5lclRleHQgPSBwcm9ncmVzcyArICclJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZWxvYWRUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZWxvYWRUZXh0LmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5jZWlsKHByb2dyZXNzKSA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcHJlbG9hZEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dyYXBwZXItaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcblxyXG4gIHByZWxvYWRlci5zaG93KCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

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