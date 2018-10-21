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
eval("\n\nvar _scrollBy = __webpack_require__(/*! ./modules/scrollBy */ \"./src/assets/scripts/modules/scrollBy.js\");\n\nvar _scrollBy2 = _interopRequireDefault(_scrollBy);\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nvar _fullmenu = __webpack_require__(/*! ./modules/fullmenu */ \"./src/assets/scripts/modules/fullmenu.js\");\n\nvar _fullmenu2 = _interopRequireDefault(_fullmenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _fullmenu2.default)();\n(0, _preloader2.default)();\n\nvar articles = document.querySelectorAll('.blog__article');\nvar blogMenu = document.querySelector('.blog__nav-list');\nvar blog = document.querySelector('.blog__texts');\nvar blogMenuBtns = document.querySelectorAll('.blog__nav-btn');\nvar blogMenuSwipeBtns = document.querySelectorAll('.blog-swipe__nav-btn');\nvar openSwipeBtn = document.querySelector('.blog-swipe__open-btn');\nvar swipeMenu = document.querySelector('.blog-swipe');\n\nwindow.addEventListener('scroll', function () {\n  stickyNav();\n  articles.forEach(function (element) {\n    findActiveLink(element);\n  });\n});\n\nblogMenuBtns.forEach(function (element) {\n  scrollToArticle(element);\n});\n\nblogMenuSwipeBtns.forEach(function (element) {\n  scrollToArticle(element);\n});\n\nopenSwipeBtn.addEventListener('click', function () {\n  swipeMenu.classList.toggle('blog-swipe--active');\n});\n\nfunction scrollToArticle(element) {\n  element.addEventListener('click', function (event) {\n    if (document.querySelector('.blog-swipe--active')) {\n      swipeMenu.classList.remove('blog-swipe--active');\n    }\n    var scrollTarget = document.getElementById(event.target.dataset.scrollto);\n    var scrollYCoord = scrollTarget.getBoundingClientRect().top;\n    (0, _scrollBy2.default)(scrollYCoord, 1000);\n  });\n}\n\nfunction findActiveLink(element) {\n  if (element.getBoundingClientRect().top <= 150) {\n    var targetLinks = document.querySelectorAll('[data-scrollto=\\'' + element.id + '\\']');\n    targetLinks.forEach(function (btn) {\n      setActiveLink(btn);\n    });\n  }\n}\n\nfunction setActiveLink(targetBtn) {\n  if (targetBtn.dataset.type) {\n    blogMenuSwipeBtns.forEach(function (element) {\n      if (element === targetBtn) {\n        element.classList.add('blog-swipe__nav-btn--active');\n      } else {\n        element.classList.remove('blog-swipe__nav-btn--active');\n      }\n    });\n  } else {\n    blogMenuBtns.forEach(function (element) {\n      if (element == targetBtn) {\n        element.classList.add('js-blog-open-btn');\n      } else {\n        element.classList.remove('js-blog-open-btn');\n      }\n    });\n  }\n}\n\nfunction stickyNav() {\n  if (blog.getBoundingClientRect().top <= 0) {\n    blogMenu.classList.add('blog__nav-list--scroll');\n  } else {\n    blogMenu.classList.remove('blog__nav-list--scroll');\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImFydGljbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmxvZ01lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYmxvZyIsImJsb2dNZW51QnRucyIsImJsb2dNZW51U3dpcGVCdG5zIiwib3BlblN3aXBlQnRuIiwic3dpcGVNZW51Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0aWNreU5hdiIsImZvckVhY2giLCJmaW5kQWN0aXZlTGluayIsImVsZW1lbnQiLCJzY3JvbGxUb0FydGljbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJzY3JvbGxUYXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNjcm9sbHRvIiwic2Nyb2xsWUNvb3JkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwidGFyZ2V0TGlua3MiLCJpZCIsInNldEFjdGl2ZUxpbmsiLCJidG4iLCJ0YXJnZXRCdG4iLCJ0eXBlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBakI7QUFDQSxJQUFNQyxXQUFXRixTQUFTRyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtBQUNBLElBQU1DLE9BQU9KLFNBQVNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjtBQUNBLElBQU1FLGVBQWVMLFNBQVNDLGdCQUFULENBQTBCLGdCQUExQixDQUFyQjtBQUNBLElBQU1LLG9CQUFvQk4sU0FBU0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQTFCO0FBQ0EsSUFBTU0sZUFBZVAsU0FBU0csYUFBVCxDQUF1Qix1QkFBdkIsQ0FBckI7QUFDQSxJQUFNSyxZQUFZUixTQUFTRyxhQUFULENBQXVCLGFBQXZCLENBQWxCOztBQUVBTSxPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDQztBQUNBWixXQUFTYSxPQUFULENBQWlCLG1CQUFXO0FBQzFCQyxtQkFBZUMsT0FBZjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BVCxhQUFhTyxPQUFiLENBQXFCLG1CQUFXO0FBQzlCRyxrQkFBZ0JELE9BQWhCO0FBQ0QsQ0FGRDs7QUFJQVIsa0JBQWtCTSxPQUFsQixDQUEwQixtQkFBVztBQUNuQ0csa0JBQWdCRCxPQUFoQjtBQUNELENBRkQ7O0FBSUFQLGFBQWFHLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NGLFlBQVVRLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLG9CQUEzQjtBQUNELENBRkQ7O0FBSUEsU0FBU0YsZUFBVCxDQUF5QkQsT0FBekIsRUFBa0M7QUFDaENBLFVBQVFKLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLGlCQUFTO0FBQ3pDLFFBQUlWLFNBQVNHLGFBQVQsQ0FBdUIscUJBQXZCLENBQUosRUFBbUQ7QUFDakRLLGdCQUFVUSxTQUFWLENBQW9CRSxNQUFwQixDQUEyQixvQkFBM0I7QUFDRDtBQUNELFFBQU1DLGVBQWVuQixTQUFTb0IsY0FBVCxDQUF3QkMsTUFBTUMsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxRQUE3QyxDQUFyQjtBQUNBLFFBQUlDLGVBQWVOLGFBQWFPLHFCQUFiLEdBQXFDQyxHQUF4RDtBQUNBLDRCQUFTRixZQUFULEVBQXVCLElBQXZCO0FBQ0QsR0FQRDtBQVFEOztBQUVELFNBQVNaLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLE1BQUlBLFFBQVFZLHFCQUFSLEdBQWdDQyxHQUFoQyxJQUF1QyxHQUEzQyxFQUFnRDtBQUM5QyxRQUFNQyxjQUFjNUIsU0FBU0MsZ0JBQVQsdUJBQTZDYSxRQUFRZSxFQUFyRCxTQUFwQjtBQUNBRCxnQkFBWWhCLE9BQVosQ0FBb0IsZUFBTztBQUN6QmtCLG9CQUFjQyxHQUFkO0FBQ0QsS0FGRDtBQUdEO0FBQ0Y7O0FBRUQsU0FBU0QsYUFBVCxDQUF1QkUsU0FBdkIsRUFBa0M7QUFDaEMsTUFBSUEsVUFBVVQsT0FBVixDQUFrQlUsSUFBdEIsRUFBNEI7QUFDMUIzQixzQkFBa0JNLE9BQWxCLENBQTBCLG1CQUFXO0FBQ25DLFVBQUlFLFlBQVlrQixTQUFoQixFQUEyQjtBQUN6QmxCLGdCQUFRRSxTQUFSLENBQWtCa0IsR0FBbEIsQ0FBc0IsNkJBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xwQixnQkFBUUUsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsNkJBQXpCO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRCxNQVFPO0FBQ0xiLGlCQUFhTyxPQUFiLENBQXFCLG1CQUFXO0FBQzlCLFVBQUlFLFdBQVdrQixTQUFmLEVBQTBCO0FBQ3hCbEIsZ0JBQVFFLFNBQVIsQ0FBa0JrQixHQUFsQixDQUFzQixrQkFBdEI7QUFDRCxPQUZELE1BRU87QUFDTHBCLGdCQUFRRSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixrQkFBekI7QUFDRDtBQUNGLEtBTkQ7QUFPRDtBQUVGOztBQUVELFNBQVNQLFNBQVQsR0FBcUI7QUFDbkIsTUFBSVAsS0FBS3NCLHFCQUFMLEdBQTZCQyxHQUE3QixJQUFvQyxDQUF4QyxFQUEyQztBQUN6Q3pCLGFBQVNjLFNBQVQsQ0FBbUJrQixHQUFuQixDQUF1Qix3QkFBdkI7QUFDRCxHQUZELE1BRU87QUFDTGhDLGFBQVNjLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLHdCQUExQjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JvbGxCeSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsQnknO1xyXG5pbXBvcnQgcHJlbG9hZGVyIGZyb20gXCIuL21vZHVsZXMvcHJlbG9hZGVyXCI7XHJcbmltcG9ydCBmdWxsbWVudSBmcm9tICcuL21vZHVsZXMvZnVsbG1lbnUnO1xyXG5cclxuZnVsbG1lbnUoKTtcclxucHJlbG9hZGVyKCk7XHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nX19hcnRpY2xlJyk7XHJcbmNvbnN0IGJsb2dNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2dfX25hdi1saXN0Jyk7XHJcbmNvbnN0IGJsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fdGV4dHMnKTtcclxuY29uc3QgYmxvZ01lbnVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dfX25hdi1idG4nKTtcclxuY29uc3QgYmxvZ01lbnVTd2lwZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1zd2lwZV9fbmF2LWJ0bicpO1xyXG5jb25zdCBvcGVuU3dpcGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZy1zd2lwZV9fb3Blbi1idG4nKTtcclxuY29uc3Qgc3dpcGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctc3dpcGUnKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgc3RpY2t5TmF2KCk7XHJcbiAgYXJ0aWNsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGZpbmRBY3RpdmVMaW5rKGVsZW1lbnQpXHJcbiAgfSk7XHJcbn0pXHJcblxyXG5ibG9nTWVudUJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICBzY3JvbGxUb0FydGljbGUoZWxlbWVudCk7XHJcbn0pXHJcblxyXG5ibG9nTWVudVN3aXBlQnRucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gIHNjcm9sbFRvQXJ0aWNsZShlbGVtZW50KTtcclxufSk7XHJcblxyXG5vcGVuU3dpcGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc3dpcGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Jsb2ctc3dpcGUtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvQXJ0aWNsZShlbGVtZW50KSB7XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZy1zd2lwZS0tYWN0aXZlJykpIHtcclxuICAgICAgc3dpcGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2ctc3dpcGUtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2Nyb2xsdG8pO1xyXG4gICAgbGV0IHNjcm9sbFlDb29yZCA9IHNjcm9sbFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBzY3JvbGxCeShzY3JvbGxZQ29vcmQsIDEwMDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQWN0aXZlTGluayhlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDE1MCkge1xyXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1zY3JvbGx0bz0nJHtlbGVtZW50LmlkfSddYCk7XHJcbiAgICB0YXJnZXRMaW5rcy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZUxpbmsoYnRuKTtcclxuICAgIH0pO1xyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZUxpbmsodGFyZ2V0QnRuKSB7XHJcbiAgaWYgKHRhcmdldEJ0bi5kYXRhc2V0LnR5cGUpIHtcclxuICAgIGJsb2dNZW51U3dpcGVCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50ID09PSB0YXJnZXRCdG4pIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2ctc3dpcGVfX25hdi1idG4tLWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmxvZy1zd2lwZV9fbmF2LWJ0bi0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBibG9nTWVudUJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQgPT0gdGFyZ2V0QnRuKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqcy1ibG9nLW9wZW4tYnRuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdqcy1ibG9nLW9wZW4tYnRuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gc3RpY2t5TmF2KCkge1xyXG4gIGlmIChibG9nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKSB7XHJcbiAgICBibG9nTWVudS5jbGFzc0xpc3QuYWRkKCdibG9nX19uYXYtbGlzdC0tc2Nyb2xsJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJsb2dNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2dfX25hdi1saXN0LS1zY3JvbGwnKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

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