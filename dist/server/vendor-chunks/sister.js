"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sister";
exports.ids = ["vendor-chunks/sister"];
exports.modules = {

/***/ "(ssr)/./node_modules/sister/src/sister.js":
/*!*******************************************!*\
  !*** ./node_modules/sister/src/sister.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\nvar Sister;\n/**\n* @link https://github.com/gajus/sister for the canonical source repository\n* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause\n*/ Sister = function() {\n    var sister = {}, events = {};\n    /**\n     * @name handler\n     * @function\n     * @param {Object} data Event data.\n     */ /**\n     * @param {String} name Event name.\n     * @param {handler} handler\n     * @return {listener}\n     */ sister.on = function(name, handler) {\n        var listener = {\n            name: name,\n            handler: handler\n        };\n        events[name] = events[name] || [];\n        events[name].unshift(listener);\n        return listener;\n    };\n    /**\n     * @param {listener}\n     */ sister.off = function(listener) {\n        var index = events[listener.name].indexOf(listener);\n        if (index !== -1) {\n            events[listener.name].splice(index, 1);\n        }\n    };\n    /**\n     * @param {String} name Event name.\n     * @param {Object} data Event data.\n     */ sister.trigger = function(name, data) {\n        var listeners = events[name], i;\n        if (listeners) {\n            i = listeners.length;\n            while(i--){\n                listeners[i].handler(data);\n            }\n        }\n    };\n    return sister;\n};\nmodule.exports = Sister;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2lzdGVyL3NyYy9zaXN0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQTtBQUVKOzs7QUFHQSxHQUNBQSxTQUFTO0lBQ0wsSUFBSUMsU0FBUyxDQUFDLEdBQ1ZDLFNBQVMsQ0FBQztJQUVkOzs7O0tBSUMsR0FFRDs7OztLQUlDLEdBQ0RELE9BQU9FLEVBQUUsR0FBRyxTQUFVQyxJQUFJLEVBQUVDLE9BQU87UUFDL0IsSUFBSUMsV0FBVztZQUFDRixNQUFNQTtZQUFNQyxTQUFTQTtRQUFPO1FBQzVDSCxNQUFNLENBQUNFLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLLElBQUksRUFBRTtRQUNqQ0YsTUFBTSxDQUFDRSxLQUFLLENBQUNHLE9BQU8sQ0FBQ0Q7UUFDckIsT0FBT0E7SUFDWDtJQUVBOztLQUVDLEdBQ0RMLE9BQU9PLEdBQUcsR0FBRyxTQUFVRixRQUFRO1FBQzNCLElBQUlHLFFBQVFQLE1BQU0sQ0FBQ0ksU0FBU0YsSUFBSSxDQUFDLENBQUNNLE9BQU8sQ0FBQ0o7UUFFMUMsSUFBSUcsVUFBVSxDQUFDLEdBQUc7WUFDZFAsTUFBTSxDQUFDSSxTQUFTRixJQUFJLENBQUMsQ0FBQ08sTUFBTSxDQUFDRixPQUFPO1FBQ3hDO0lBQ0o7SUFFQTs7O0tBR0MsR0FDRFIsT0FBT1csT0FBTyxHQUFHLFNBQVVSLElBQUksRUFBRVMsSUFBSTtRQUNqQyxJQUFJQyxZQUFZWixNQUFNLENBQUNFLEtBQUssRUFDeEJXO1FBRUosSUFBSUQsV0FBVztZQUNYQyxJQUFJRCxVQUFVRSxNQUFNO1lBQ3BCLE1BQU9ELElBQUs7Z0JBQ1JELFNBQVMsQ0FBQ0MsRUFBRSxDQUFDVixPQUFPLENBQUNRO1lBQ3pCO1FBQ0o7SUFDSjtJQUVBLE9BQU9aO0FBQ1g7QUFFQWdCLE9BQU9DLE9BQU8sR0FBR2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FpbS8uL25vZGVfbW9kdWxlcy9zaXN0ZXIvc3JjL3Npc3Rlci5qcz9hZDE0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpc3RlcjtcblxuLyoqXG4qIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWp1cy9zaXN0ZXIgZm9yIHRoZSBjYW5vbmljYWwgc291cmNlIHJlcG9zaXRvcnlcbiogQGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL2dhanVzL3Npc3Rlci9ibG9iL21hc3Rlci9MSUNFTlNFIEJTRCAzLUNsYXVzZVxuKi9cblNpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2lzdGVyID0ge30sXG4gICAgICAgIGV2ZW50cyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFuZGxlclxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIEV2ZW50IGRhdGEuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSB7aGFuZGxlcn0gaGFuZGxlclxuICAgICAqIEByZXR1cm4ge2xpc3RlbmVyfVxuICAgICAqL1xuICAgIHNpc3Rlci5vbiA9IGZ1bmN0aW9uIChuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHtuYW1lOiBuYW1lLCBoYW5kbGVyOiBoYW5kbGVyfTtcbiAgICAgICAgZXZlbnRzW25hbWVdID0gZXZlbnRzW25hbWVdIHx8IFtdO1xuICAgICAgICBldmVudHNbbmFtZV0udW5zaGlmdChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtsaXN0ZW5lcn1cbiAgICAgKi9cbiAgICBzaXN0ZXIub2ZmID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGV2ZW50c1tsaXN0ZW5lci5uYW1lXS5pbmRleE9mKGxpc3RlbmVyKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBldmVudHNbbGlzdGVuZXIubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIEV2ZW50IGRhdGEuXG4gICAgICovXG4gICAgc2lzdGVyLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzW25hbWVdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uaGFuZGxlcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2lzdGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXN0ZXI7XG4iXSwibmFtZXMiOlsiU2lzdGVyIiwic2lzdGVyIiwiZXZlbnRzIiwib24iLCJuYW1lIiwiaGFuZGxlciIsImxpc3RlbmVyIiwidW5zaGlmdCIsIm9mZiIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInRyaWdnZXIiLCJkYXRhIiwibGlzdGVuZXJzIiwiaSIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sister/src/sister.js\n");

/***/ })

};
;