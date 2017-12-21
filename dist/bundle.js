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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _honeycomb = __webpack_require__(2);

__webpack_require__(4);

document.addEventListener('DOMContentLoaded', function () {
  (0, _honeycomb.honeycomb)('hexagons');
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.honeycomb = honeycomb;

__webpack_require__(3);

var colCount = 12;
var rowCount = 10;
var content = [{
  content: 'Celine',
  rowIndex: 1,
  colIndex: 2,
  classes: 'dark'
}, {
  content: 'Bonin',
  rowIndex: 2,
  colIndex: 5
}, {
  content: 'Developer',
  rowIndex: 4,
  colIndex: 2,
  classes: 'dark'
}];

var createGrid = function createGrid() {
  var grid = '';
  for (var r = 0; r < rowCount; r++) {
    for (var c = 0; c < colCount; c++) {
      var char = getChar(r, c);
      grid += '<span class=\'hex\'>' + char + '</span>';
    }
  }
  return grid;
};

var getChar = function getChar(rIndex, cIndex) {
  var char = '';
  var position = colCount * rIndex + cIndex;
  var rowContent = content.find(function (item) {
    return item.rowIndex === rIndex;
  });
  var className = '';
  if (rowContent && rowContent.content) {
    var contentColIndex = rowContent.colIndex;
    className = rowContent.classes || '';
    char = cIndex >= contentColIndex ? rowContent.content[cIndex - contentColIndex] : false;
  }
  var html = char ? '<span class=\'' + className + '\'>' + char + '</span>' : '';
  return html;
};

function honeycomb(selector) {
  var contents = createGrid();
  var element = document.getElementById(selector);
  element.innerHTML = contents;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTY1Nzc2NTBhYzEwYzZhMzVmMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaG9uZXljb21iLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9uZXljb21iLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJob25leWNvbWIiLCJjb2xDb3VudCIsInJvd0NvdW50IiwiY29udGVudCIsInJvd0luZGV4IiwiY29sSW5kZXgiLCJjbGFzc2VzIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJyIiwiYyIsImNoYXIiLCJnZXRDaGFyIiwickluZGV4IiwiY0luZGV4IiwicG9zaXRpb24iLCJyb3dDb250ZW50IiwiZmluZCIsIml0ZW0iLCJjbGFzc05hbWUiLCJjb250ZW50Q29sSW5kZXgiLCJodG1sIiwic2VsZWN0b3IiLCJjb250ZW50cyIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7QUFDQTs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkQsNEJBQVUsVUFBVjtBQUNELENBRkQsRTs7Ozs7Ozs7Ozs7O1FDOENnQkMsUyxHQUFBQSxTOztBQWpEaEI7O0FBRUEsSUFBTUMsV0FBVyxFQUFqQjtBQUNBLElBQU1DLFdBQVcsRUFBakI7QUFDQSxJQUFNQyxVQUFVLENBQ2Q7QUFDRUEsV0FBUyxRQURYO0FBRUVDLFlBQVUsQ0FGWjtBQUdFQyxZQUFVLENBSFo7QUFJRUMsV0FBUztBQUpYLENBRGMsRUFPZDtBQUNFSCxXQUFTLE9BRFg7QUFFRUMsWUFBVSxDQUZaO0FBR0VDLFlBQVU7QUFIWixDQVBjLEVBWWQ7QUFDRUYsV0FBUyxXQURYO0FBRUVDLFlBQVUsQ0FGWjtBQUdFQyxZQUFVLENBSFo7QUFJRUMsV0FBUztBQUpYLENBWmMsQ0FBaEI7O0FBb0JBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE1BQUlDLE9BQU8sRUFBWDtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWVBLElBQUVQLFFBQWpCLEVBQTJCTyxHQUEzQixFQUFnQztBQUM5QixTQUFLLElBQUlDLElBQUksQ0FBYixFQUFlQSxJQUFFVCxRQUFqQixFQUEyQlMsR0FBM0IsRUFBZ0M7QUFDOUIsVUFBTUMsT0FBT0MsUUFBUUgsQ0FBUixFQUFXQyxDQUFYLENBQWI7QUFDQUYsdUNBQTZCRyxJQUE3QjtBQUNEO0FBQ0Y7QUFDRCxTQUFPSCxJQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFNSSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ2xDLE1BQUlILE9BQU8sRUFBWDtBQUNBLE1BQU1JLFdBQVdkLFdBQVdZLE1BQVgsR0FBcUJDLE1BQXRDO0FBQ0EsTUFBTUUsYUFBYWIsUUFBUWMsSUFBUixDQUFhO0FBQUEsV0FBUUMsS0FBS2QsUUFBTCxLQUFrQlMsTUFBMUI7QUFBQSxHQUFiLENBQW5CO0FBQ0EsTUFBSU0sWUFBWSxFQUFoQjtBQUNBLE1BQUlILGNBQWNBLFdBQVdiLE9BQTdCLEVBQXNDO0FBQ3BDLFFBQU1pQixrQkFBa0JKLFdBQVdYLFFBQW5DO0FBQ0FjLGdCQUFZSCxXQUFXVixPQUFYLElBQXNCLEVBQWxDO0FBQ0FLLFdBQVFHLFVBQVVNLGVBQVgsR0FBK0JKLFdBQVdiLE9BQVgsQ0FBbUJXLFNBQVNNLGVBQTVCLENBQS9CLEdBQThFLEtBQXJGO0FBQ0Q7QUFDRCxNQUFNQyxPQUFRVixJQUFELHNCQUF5QlEsU0FBekIsV0FBdUNSLElBQXZDLGVBQXVELEVBQXBFO0FBQ0EsU0FBUVUsSUFBUjtBQUNELENBWkQ7O0FBY08sU0FBU3JCLFNBQVQsQ0FBbUJzQixRQUFuQixFQUE2QjtBQUNsQyxNQUFNQyxXQUFXaEIsWUFBakI7QUFDQSxNQUFNaUIsVUFBVTFCLFNBQVMyQixjQUFULENBQXdCSCxRQUF4QixDQUFoQjtBQUNBRSxVQUFRRSxTQUFSLEdBQW9CSCxRQUFwQjtBQUNELEM7Ozs7OztBQ3JERCx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTY1Nzc2NTBhYzEwYzZhMzVmMzYiLCJpbXBvcnQgeyBob25leWNvbWIgfSBmcm9tICcuL2pzL2hvbmV5Y29tYic7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBob25leWNvbWIoJ2hleGFnb25zJyk7XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsImltcG9ydCAnLi4vc3R5bGVzL2hvbmV5Y29tYi5zY3NzJztcblxuY29uc3QgY29sQ291bnQgPSAxMjtcbmNvbnN0IHJvd0NvdW50ID0gMTA7XG5jb25zdCBjb250ZW50ID0gW1xuICB7XG4gICAgY29udGVudDogJ0NlbGluZScsXG4gICAgcm93SW5kZXg6IDEsXG4gICAgY29sSW5kZXg6IDIsXG4gICAgY2xhc3NlczogJ2RhcmsnXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnQm9uaW4nLFxuICAgIHJvd0luZGV4OiAyLFxuICAgIGNvbEluZGV4OiA1XG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnRGV2ZWxvcGVyJyxcbiAgICByb3dJbmRleDogNCxcbiAgICBjb2xJbmRleDogMixcbiAgICBjbGFzc2VzOiAnZGFyaydcbiAgfSxcbl07XG5cbmNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gIGxldCBncmlkID0gJyc7XG4gIGZvciAobGV0IHIgPSAwO3I8cm93Q291bnQ7IHIrKykge1xuICAgIGZvciAobGV0IGMgPSAwO2M8Y29sQ291bnQ7IGMrKykge1xuICAgICAgY29uc3QgY2hhciA9IGdldENoYXIociwgYyk7XG4gICAgICBncmlkICs9IGA8c3BhbiBjbGFzcz0naGV4Jz4ke2NoYXJ9PC9zcGFuPmA7XG4gICAgfVxuICB9XG4gIHJldHVybiBncmlkO1xufVxuXG5jb25zdCBnZXRDaGFyID0gKHJJbmRleCwgY0luZGV4KSA9PiB7XG4gIGxldCBjaGFyID0gJyc7XG4gIGNvbnN0IHBvc2l0aW9uID0gY29sQ291bnQgKiBySW5kZXggICsgY0luZGV4O1xuICBjb25zdCByb3dDb250ZW50ID0gY29udGVudC5maW5kKGl0ZW0gPT4gaXRlbS5yb3dJbmRleCA9PT0gckluZGV4KTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBpZiAocm93Q29udGVudCAmJiByb3dDb250ZW50LmNvbnRlbnQpIHtcbiAgICBjb25zdCBjb250ZW50Q29sSW5kZXggPSByb3dDb250ZW50LmNvbEluZGV4O1xuICAgIGNsYXNzTmFtZSA9IHJvd0NvbnRlbnQuY2xhc3NlcyB8fCAnJztcbiAgICBjaGFyID0gKGNJbmRleCA+PSBjb250ZW50Q29sSW5kZXgpID8gIHJvd0NvbnRlbnQuY29udGVudFtjSW5kZXggLSBjb250ZW50Q29sSW5kZXhdIDogZmFsc2U7XG4gIH1cbiAgY29uc3QgaHRtbCA9IChjaGFyKSA/IGA8c3BhbiBjbGFzcz0nJHtjbGFzc05hbWV9Jz4ke2NoYXJ9PC9zcGFuPmAgOiAnJztcbiAgcmV0dXJuICBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9uZXljb21iKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gY3JlYXRlR3JpZCgpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2hvbmV5Y29tYi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2hvbmV5Y29tYi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=