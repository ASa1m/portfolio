"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-scroll-into-view";
exports.ids = ["vendor-chunks/react-scroll-into-view"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-scroll-into-view/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll-into-view/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollInto: () => (/* binding */ t),\n/* harmony export */   \"default\": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nconst t = ({ children: t, selector: o, smooth: s = !0, style: c = {}, alignToTop: n = !1, className: r = \"\", onClick: a, scrollOptions: i = {} })=>{\n    const l = ()=>{\n        var e;\n        const t = s ? \"smooth\" : \"auto\", c = Object.assign({\n            behavior: t\n        }, ((e)=>\"object\" != typeof e ? {} : Object.entries(e).reduce((e, [t, o])=>{\n                switch(t){\n                    case \"behavior\":\n                        \"auto\" !== o && \"smooth\" !== o || (e[t] = o);\n                    case \"block\":\n                    case \"inline\":\n                        \"start\" !== o && \"center\" !== o && \"end\" !== o && \"nearest\" !== o || (e[t] = o);\n                }\n                return e;\n            }, {}))(i));\n        n && (c.block = \"start\", c.inline = \"nearest\"), null === (e = document.querySelector(o)) || void 0 === e || e.scrollIntoView(c);\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: c,\n        className: r,\n        onClick: (e)=>{\n            if (\"function\" == typeof a) return a(e), void setTimeout(l, 1e3 / 60);\n            l();\n        }\n    }, t);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLWludG8tdmlldy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUI7QUFBQSxNQUFNQyxJQUFFLENBQUMsRUFBQ0MsVUFBU0QsQ0FBQyxFQUFDRSxVQUFTQyxDQUFDLEVBQUNDLFFBQU9DLElBQUUsQ0FBQyxDQUFDLEVBQUNDLE9BQU1DLElBQUUsQ0FBQyxDQUFDLEVBQUNDLFlBQVdDLElBQUUsQ0FBQyxDQUFDLEVBQUNDLFdBQVVDLElBQUUsRUFBRSxFQUFDQyxTQUFRQyxDQUFDLEVBQUNDLGVBQWNDLElBQUUsQ0FBQyxDQUFDLEVBQUM7SUFBSSxNQUFNQyxJQUFFO1FBQUssSUFBSWpCO1FBQUUsTUFBTUMsSUFBRUssSUFBRSxXQUFTLFFBQU9FLElBQUVVLE9BQU9DLE1BQU0sQ0FBQztZQUFDQyxVQUFTbkI7UUFBQyxHQUFFLENBQUNELENBQUFBLElBQUcsWUFBVSxPQUFPQSxJQUFFLENBQUMsSUFBRWtCLE9BQU9HLE9BQU8sQ0FBQ3JCLEdBQUdzQixNQUFNLENBQUUsQ0FBQ3RCLEdBQUUsQ0FBQ0MsR0FBRUcsRUFBRTtnQkFBSSxPQUFPSDtvQkFBRyxLQUFJO3dCQUFXLFdBQVNHLEtBQUcsYUFBV0EsS0FBSUosQ0FBQUEsQ0FBQyxDQUFDQyxFQUFFLEdBQUNHLENBQUFBO29CQUFHLEtBQUk7b0JBQVEsS0FBSTt3QkFBUyxZQUFVQSxLQUFHLGFBQVdBLEtBQUcsVUFBUUEsS0FBRyxjQUFZQSxLQUFJSixDQUFBQSxDQUFDLENBQUNDLEVBQUUsR0FBQ0csQ0FBQUE7Z0JBQUU7Z0JBQUMsT0FBT0o7WUFBQyxHQUFHLENBQUMsRUFBQyxFQUFHZ0I7UUFBSU4sS0FBSUYsQ0FBQUEsRUFBRWUsS0FBSyxHQUFDLFNBQVFmLEVBQUVnQixNQUFNLEdBQUMsU0FBUSxHQUFHLFNBQVF4QixDQUFBQSxJQUFFeUIsU0FBU0MsYUFBYSxDQUFDdEIsRUFBQyxLQUFJLEtBQUssTUFBSUosS0FBR0EsRUFBRTJCLGNBQWMsQ0FBQ25CO0lBQUU7SUFBRSxxQkFBT1IsZ0RBQWUsQ0FBQyxPQUFNO1FBQUNPLE9BQU1DO1FBQUVHLFdBQVVDO1FBQUVDLFNBQVFiLENBQUFBO1lBQUksSUFBRyxjQUFZLE9BQU9jLEdBQUUsT0FBT0EsRUFBRWQsSUFBRyxLQUFLNkIsV0FBV1osR0FBRSxNQUFJO1lBQUlBO1FBQUc7SUFBQyxHQUFFaEI7QUFBRTtBQUF1QyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhaW0vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLWludG8tdmlldy9kaXN0L2luZGV4Lm1qcz85MWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlIGZyb21cInJlYWN0XCI7Y29uc3QgdD0oe2NoaWxkcmVuOnQsc2VsZWN0b3I6byxzbW9vdGg6cz0hMCxzdHlsZTpjPXt9LGFsaWduVG9Ub3A6bj0hMSxjbGFzc05hbWU6cj1cIlwiLG9uQ2xpY2s6YSxzY3JvbGxPcHRpb25zOmk9e319KT0+e2NvbnN0IGw9KCk9Pnt2YXIgZTtjb25zdCB0PXM/XCJzbW9vdGhcIjpcImF1dG9cIixjPU9iamVjdC5hc3NpZ24oe2JlaGF2aW9yOnR9LChlPT5cIm9iamVjdFwiIT10eXBlb2YgZT97fTpPYmplY3QuZW50cmllcyhlKS5yZWR1Y2UoKChlLFt0LG9dKT0+e3N3aXRjaCh0KXtjYXNlXCJiZWhhdmlvclwiOlwiYXV0b1wiIT09byYmXCJzbW9vdGhcIiE9PW98fChlW3RdPW8pO2Nhc2VcImJsb2NrXCI6Y2FzZVwiaW5saW5lXCI6XCJzdGFydFwiIT09byYmXCJjZW50ZXJcIiE9PW8mJlwiZW5kXCIhPT1vJiZcIm5lYXJlc3RcIiE9PW98fChlW3RdPW8pfXJldHVybiBlfSkse30pKShpKSk7biYmKGMuYmxvY2s9XCJzdGFydFwiLGMuaW5saW5lPVwibmVhcmVzdFwiKSxudWxsPT09KGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvKSl8fHZvaWQgMD09PWV8fGUuc2Nyb2xsSW50b1ZpZXcoYyl9O3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6YyxjbGFzc05hbWU6cixvbkNsaWNrOmU9PntpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKXJldHVybiBhKGUpLHZvaWQgc2V0VGltZW91dChsLDFlMy82MCk7bCgpfX0sdCl9O2V4cG9ydHt0IGFzIFNjcm9sbEludG8sdCBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6WyJlIiwidCIsImNoaWxkcmVuIiwic2VsZWN0b3IiLCJvIiwic21vb3RoIiwicyIsInN0eWxlIiwiYyIsImFsaWduVG9Ub3AiLCJuIiwiY2xhc3NOYW1lIiwiciIsIm9uQ2xpY2siLCJhIiwic2Nyb2xsT3B0aW9ucyIsImkiLCJsIiwiT2JqZWN0IiwiYXNzaWduIiwiYmVoYXZpb3IiLCJlbnRyaWVzIiwicmVkdWNlIiwiYmxvY2siLCJpbmxpbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiU2Nyb2xsSW50byIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-scroll-into-view/dist/index.mjs\n");

/***/ })

};
;