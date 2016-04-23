/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', encodeURI('//react.dev/wp-json/wp/v2/posts'));
	xhr.onload = function () {
	    if (xhr.status === 200) {
	        var info = JSON.parse(xhr.responseText);
	        console.log(info);
	
	        var output = "";
	        for (var key in info) {
	            output += "<h2>" + info[key].title.rendered + "</h2>";
	            output += info[key].content.rendered;
	        }
	        console.log(output);
	        var update = document.getElementById('main');
	        update.innerHTML = output;
	        console.log('FIN');
	        //Hello
	    } else {
	            alert('Request failed.  Returned status of ' + xhr.status);
	        }
	};
	xhr.send();
	
	var map = new Map([[1, 'fuck'], [2, 'two'], [3, 'three'] // trailing comma is ignored
	]);
	
	var foo = map.get(1);
	
	var update = document.getElementById('main');
	update.innerHTML = foo;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map