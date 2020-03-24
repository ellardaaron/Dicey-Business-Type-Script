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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hello.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hello.ts":
/*!******************!*\
  !*** ./hello.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var container = document.getElementById('dice-container'); //sets the variable container to the square container div in the html
var diceSum = document.getElementById('sum-dice'); //button that adds all current dice and displays and alert of the sum
var sqButton = document.getElementById('sq-button'); //assigns sqButton to the html button "sq-button"
var rerollButton = document.getElementById('re-button');
var Square = /** @class */ (function () {
    function Square() {
        var _this = this;
        this.items = [];
        this.div = document.createElement('div'); //creates a new div 
        this.div.classList.add('square'); // adds a css class 
        this.dieValue(); // calls the die Value function              
        diceArray.push(this); //pushes each dice div into the diceArray
        console.log(diceArray); //displays dice array in console
        container.appendChild(this.div); //uses the variable 'container' and appends this div inside of square container div
        this.div.addEventListener('click', function () {
            _this.dieValue();
        });
        this.div.addEventListener('dblclick', function () {
            var index = diceArray.indexOf(_this);
            if (index > -1) {
                diceArray.splice(index, 1);
            }
            _this.div.parentNode.removeChild(_this.div);
        });
    }
    Square.prototype.dieValue = function () {
        this.div.innerText = randomVal(1, 7);
    };
    Square.prototype.updateColor = function () {
        var randomColor = "rgb(" + randomVal(0, 255) + ", " + randomVal(0, 255) + ", " + randomVal(0, 255) + ")"; //calls on randomVal function to pick a number from 0-255 which then inturn will give us a rgb color value
        // chooses a random color
        this.div.style.backgroundColor = randomColor; //sets the random color to the background of the div that is being created inside square container div
    };
    return Square;
}());
//Buttons-----------------------------
sqButton.addEventListener('click', insertSquare); //adds an event listener that when clicked executes the insert square function
rerollButton.addEventListener('click', function () {
    diceArray.forEach(function (die) {
        console.log(die);
        die.dieValue();
    });
});
console.log(diceArray);
diceSum.addEventListener('click', function () {
    var diceVal = [];
    diceArray.forEach(function (val) {
        var num = parseInt(val.div.innerText);
        diceVal.push(num);
    });
    var answer = diceVal.reduce(function (acc, val) { return acc + val; });
    alert("Your total is " + answer);
});
//Functions-------------------------
function insertSquare() {
    var sq = new Square();
}
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVsbG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDBEQUEwRDtBQUMxRCxrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQseUNBQXlDO0FBQ3pDLHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxREFBcUQsa0JBQWtCLEVBQUU7QUFDekU7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9oZWxsby50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpY2UtY29udGFpbmVyJyk7IC8vc2V0cyB0aGUgdmFyaWFibGUgY29udGFpbmVyIHRvIHRoZSBzcXVhcmUgY29udGFpbmVyIGRpdiBpbiB0aGUgaHRtbFxyXG52YXIgZGljZVN1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tZGljZScpOyAvL2J1dHRvbiB0aGF0IGFkZHMgYWxsIGN1cnJlbnQgZGljZSBhbmQgZGlzcGxheXMgYW5kIGFsZXJ0IG9mIHRoZSBzdW1cclxudmFyIHNxQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NxLWJ1dHRvbicpOyAvL2Fzc2lnbnMgc3FCdXR0b24gdG8gdGhlIGh0bWwgYnV0dG9uIFwic3EtYnV0dG9uXCJcclxudmFyIHJlcm9sbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZS1idXR0b24nKTtcclxudmFyIFNxdWFyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNxdWFyZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL2NyZWF0ZXMgYSBuZXcgZGl2IFxyXG4gICAgICAgIHRoaXMuZGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpOyAvLyBhZGRzIGEgY3NzIGNsYXNzIFxyXG4gICAgICAgIHRoaXMuZGllVmFsdWUoKTsgLy8gY2FsbHMgdGhlIGRpZSBWYWx1ZSBmdW5jdGlvbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgZGljZUFycmF5LnB1c2godGhpcyk7IC8vcHVzaGVzIGVhY2ggZGljZSBkaXYgaW50byB0aGUgZGljZUFycmF5XHJcbiAgICAgICAgY29uc29sZS5sb2coZGljZUFycmF5KTsgLy9kaXNwbGF5cyBkaWNlIGFycmF5IGluIGNvbnNvbGVcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kaXYpOyAvL3VzZXMgdGhlIHZhcmlhYmxlICdjb250YWluZXInIGFuZCBhcHBlbmRzIHRoaXMgZGl2IGluc2lkZSBvZiBzcXVhcmUgY29udGFpbmVyIGRpdlxyXG4gICAgICAgIHRoaXMuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kaWVWYWx1ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBkaWNlQXJyYXkuaW5kZXhPZihfdGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBkaWNlQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5kaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpcy5kaXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgU3F1YXJlLnByb3RvdHlwZS5kaWVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRpdi5pbm5lclRleHQgPSByYW5kb21WYWwoMSwgNyk7XHJcbiAgICB9O1xyXG4gICAgU3F1YXJlLnByb3RvdHlwZS51cGRhdGVDb2xvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmFuZG9tQ29sb3IgPSBcInJnYihcIiArIHJhbmRvbVZhbCgwLCAyNTUpICsgXCIsIFwiICsgcmFuZG9tVmFsKDAsIDI1NSkgKyBcIiwgXCIgKyByYW5kb21WYWwoMCwgMjU1KSArIFwiKVwiOyAvL2NhbGxzIG9uIHJhbmRvbVZhbCBmdW5jdGlvbiB0byBwaWNrIGEgbnVtYmVyIGZyb20gMC0yNTUgd2hpY2ggdGhlbiBpbnR1cm4gd2lsbCBnaXZlIHVzIGEgcmdiIGNvbG9yIHZhbHVlXHJcbiAgICAgICAgLy8gY2hvb3NlcyBhIHJhbmRvbSBjb2xvclxyXG4gICAgICAgIHRoaXMuZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yOyAvL3NldHMgdGhlIHJhbmRvbSBjb2xvciB0byB0aGUgYmFja2dyb3VuZCBvZiB0aGUgZGl2IHRoYXQgaXMgYmVpbmcgY3JlYXRlZCBpbnNpZGUgc3F1YXJlIGNvbnRhaW5lciBkaXZcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3F1YXJlO1xyXG59KCkpO1xyXG4vL0J1dHRvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5zcUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluc2VydFNxdWFyZSk7IC8vYWRkcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IHdoZW4gY2xpY2tlZCBleGVjdXRlcyB0aGUgaW5zZXJ0IHNxdWFyZSBmdW5jdGlvblxyXG5yZXJvbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaWNlQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZGllKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGllKTtcclxuICAgICAgICBkaWUuZGllVmFsdWUoKTtcclxuICAgIH0pO1xyXG59KTtcclxuY29uc29sZS5sb2coZGljZUFycmF5KTtcclxuZGljZVN1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkaWNlVmFsID0gW107XHJcbiAgICBkaWNlQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IHBhcnNlSW50KHZhbC5kaXYuaW5uZXJUZXh0KTtcclxuICAgICAgICBkaWNlVmFsLnB1c2gobnVtKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGFuc3dlciA9IGRpY2VWYWwucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbCkgeyByZXR1cm4gYWNjICsgdmFsOyB9KTtcclxuICAgIGFsZXJ0KFwiWW91ciB0b3RhbCBpcyBcIiArIGFuc3dlcik7XHJcbn0pO1xyXG4vL0Z1bmN0aW9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gaW5zZXJ0U3F1YXJlKCkge1xyXG4gICAgdmFyIHNxID0gbmV3IFNxdWFyZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbVZhbChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9