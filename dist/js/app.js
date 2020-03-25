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
var generateButton = document.getElementById('generate-die'); //assigns generateButton to the html button "generate-die"
var rollButton = document.getElementById('re-button');
var sumButton = document.getElementById('sum-dice'); //button that adds all current dice and displays and alert of the sum
var diceArray = [];
var Square = /** @class */ (function () {
    function Square() {
        var _this = this;
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
            container.removeChild(_this.div);
        });
    }
    Square.prototype.dieValue = function () {
        this.div.innerText = (randomVal(1, 7)).toString();
    };
    Square.prototype.updateColor = function () {
        var randomColor = "rgb(" + randomVal(0, 255) + ", " + randomVal(0, 255) + ", " + randomVal(0, 255) + ")"; //calls on randomVal function to pick a number from 0-255 which then inturn will give us a rgb color value
        // chooses a random color
        this.div.style.backgroundColor = randomColor; //sets the random color to the background of the div that is being created inside square container div
    };
    return Square;
}());
//Buttons-----------------------------
generateButton.addEventListener('click', function () { var sq = new Square(); }); //adds an event listener that when clicked executes the insert square function
rollButton.addEventListener('click', function () {
    diceArray.forEach(function (die) {
        console.log(die);
        die.dieValue();
    });
});
console.log(diceArray);
sumButton.addEventListener('click', function () {
    var diceVal = [];
    diceArray.forEach(function (val) {
        var num = parseInt(val.div.innerText);
        diceVal.push(num);
    });
    var answer = diceVal.reduce(function (acc, val) { return acc + val; });
    alert("Your total is " + answer);
});
//Functions-------------------------
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVsbG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDBEQUEwRDtBQUMxRCw2REFBNkQ7QUFDN0Q7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQseUNBQXlDO0FBQ3pDLHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxzREFBc0QsdUJBQXVCLEVBQUUsRUFBRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFEQUFxRCxrQkFBa0IsRUFBRTtBQUN6RTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2hlbGxvLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGljZS1jb250YWluZXInKTsgLy9zZXRzIHRoZSB2YXJpYWJsZSBjb250YWluZXIgdG8gdGhlIHNxdWFyZSBjb250YWluZXIgZGl2IGluIHRoZSBodG1sXHJcbnZhciBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZS1kaWUnKTsgLy9hc3NpZ25zIGdlbmVyYXRlQnV0dG9uIHRvIHRoZSBodG1sIGJ1dHRvbiBcImdlbmVyYXRlLWRpZVwiXHJcbnZhciByb2xsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlLWJ1dHRvbicpO1xyXG52YXIgc3VtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bS1kaWNlJyk7IC8vYnV0dG9uIHRoYXQgYWRkcyBhbGwgY3VycmVudCBkaWNlIGFuZCBkaXNwbGF5cyBhbmQgYWxlcnQgb2YgdGhlIHN1bVxyXG52YXIgZGljZUFycmF5ID0gW107XHJcbnZhciBTcXVhcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTcXVhcmUoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL2NyZWF0ZXMgYSBuZXcgZGl2IFxyXG4gICAgICAgIHRoaXMuZGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpOyAvLyBhZGRzIGEgY3NzIGNsYXNzIFxyXG4gICAgICAgIHRoaXMuZGllVmFsdWUoKTsgLy8gY2FsbHMgdGhlIGRpZSBWYWx1ZSBmdW5jdGlvbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgZGljZUFycmF5LnB1c2godGhpcyk7IC8vcHVzaGVzIGVhY2ggZGljZSBkaXYgaW50byB0aGUgZGljZUFycmF5XHJcbiAgICAgICAgY29uc29sZS5sb2coZGljZUFycmF5KTsgLy9kaXNwbGF5cyBkaWNlIGFycmF5IGluIGNvbnNvbGVcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kaXYpOyAvL3VzZXMgdGhlIHZhcmlhYmxlICdjb250YWluZXInIGFuZCBhcHBlbmRzIHRoaXMgZGl2IGluc2lkZSBvZiBzcXVhcmUgY29udGFpbmVyIGRpdlxyXG4gICAgICAgIHRoaXMuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kaWVWYWx1ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBkaWNlQXJyYXkuaW5kZXhPZihfdGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBkaWNlQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoX3RoaXMuZGl2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFNxdWFyZS5wcm90b3R5cGUuZGllVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXYuaW5uZXJUZXh0ID0gKHJhbmRvbVZhbCgxLCA3KSkudG9TdHJpbmcoKTtcclxuICAgIH07XHJcbiAgICBTcXVhcmUucHJvdG90eXBlLnVwZGF0ZUNvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByYW5kb21Db2xvciA9IFwicmdiKFwiICsgcmFuZG9tVmFsKDAsIDI1NSkgKyBcIiwgXCIgKyByYW5kb21WYWwoMCwgMjU1KSArIFwiLCBcIiArIHJhbmRvbVZhbCgwLCAyNTUpICsgXCIpXCI7IC8vY2FsbHMgb24gcmFuZG9tVmFsIGZ1bmN0aW9uIHRvIHBpY2sgYSBudW1iZXIgZnJvbSAwLTI1NSB3aGljaCB0aGVuIGludHVybiB3aWxsIGdpdmUgdXMgYSByZ2IgY29sb3IgdmFsdWVcclxuICAgICAgICAvLyBjaG9vc2VzIGEgcmFuZG9tIGNvbG9yXHJcbiAgICAgICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3I7IC8vc2V0cyB0aGUgcmFuZG9tIGNvbG9yIHRvIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBkaXYgdGhhdCBpcyBiZWluZyBjcmVhdGVkIGluc2lkZSBzcXVhcmUgY29udGFpbmVyIGRpdlxyXG4gICAgfTtcclxuICAgIHJldHVybiBTcXVhcmU7XHJcbn0oKSk7XHJcbi8vQnV0dG9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyB2YXIgc3EgPSBuZXcgU3F1YXJlKCk7IH0pOyAvL2FkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3aGVuIGNsaWNrZWQgZXhlY3V0ZXMgdGhlIGluc2VydCBzcXVhcmUgZnVuY3Rpb25cclxucm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRpY2VBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChkaWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkaWUpO1xyXG4gICAgICAgIGRpZS5kaWVWYWx1ZSgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5jb25zb2xlLmxvZyhkaWNlQXJyYXkpO1xyXG5zdW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGljZVZhbCA9IFtdO1xyXG4gICAgZGljZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHZhciBudW0gPSBwYXJzZUludCh2YWwuZGl2LmlubmVyVGV4dCk7XHJcbiAgICAgICAgZGljZVZhbC5wdXNoKG51bSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBhbnN3ZXIgPSBkaWNlVmFsLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWwpIHsgcmV0dXJuIGFjYyArIHZhbDsgfSk7XHJcbiAgICBhbGVydChcIllvdXIgdG90YWwgaXMgXCIgKyBhbnN3ZXIpO1xyXG59KTtcclxuLy9GdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHJhbmRvbVZhbChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9