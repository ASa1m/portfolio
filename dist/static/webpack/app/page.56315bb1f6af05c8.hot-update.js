"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./data/global.ts":
/*!************************!*\
  !*** ./data/global.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: function() { return /* binding */ footer; },\n/* harmony export */   routes: function() { return /* binding */ routes; }\n/* harmony export */ });\nconst routes = [\n    {\n        title: \"Home\",\n        path: \"/\"\n    },\n    // {\n    //   title: \"Blog\",\n    //   path: \"/blog\",\n    // },\n    {\n        title: \"Projects\",\n        path: \"/projects\"\n    },\n    {\n        title: \"Contact\",\n        path: \"/contact\"\n    },\n    {\n        title: \"Photography\",\n        path: \"/photography\"\n    }\n];\nconst footer = {\n    columns: [\n        {\n            title: \"Pages\",\n            links: [\n                {\n                    name: \"Home\",\n                    link: \"/\",\n                    leavesWebsite: false\n                },\n                // {\n                //   name: \"Blog\",\n                //   link: \"/blog\",\n                //   leavesWebsite: false,\n                // },\n                {\n                    name: \"Projects\",\n                    link: \"/projects\",\n                    leavesWebsite: false\n                },\n                {\n                    name: \"Contact\",\n                    link: \"/contact\",\n                    leavesWebsite: false\n                },\n                {\n                    name: \"Photography\",\n                    link: \"/photography\",\n                    leavesWebsite: false\n                }\n            ]\n        },\n        {\n            title: \"Social\",\n            links: [\n                {\n                    name: \"GitHub\",\n                    link: \"https://github.com/ASa1m\",\n                    icon: \"\".concat(\"C:\\\\Users\\\\Saim\\\\Documents\\\\GitHub\\\\portfolio\\\\public\\\\\", \"static/icons/github-f.svg\"),\n                    leavesWebsite: true\n                },\n                {\n                    name: \"LinkedIn\",\n                    link: \"https://www.linkedin.com/in/abdullah-saim/\",\n                    icon: \"\".concat(\"C:\\\\Users\\\\Saim\\\\Documents\\\\GitHub\\\\portfolio\\\\public\\\\\", \"static/icons/linkedin-f.svg\"),\n                    leavesWebsite: true\n                },\n                {\n                    name: \"Email\",\n                    link: \"mailto:abdullah.saim.as@gmail.com\",\n                    icon: \"\".concat(\"C:\\\\Users\\\\Saim\\\\Documents\\\\GitHub\\\\portfolio\\\\public\\\\\", \"static/icons/mail-f.svg\"),\n                    leavesWebsite: true\n                }\n            ]\n        }\n    ],\n    support: {\n        buymeacoffee: \"miteshtagap\",\n        paypal: \"miteshtagadiya\",\n        message: \"I appreciate your support very much! \\uD83D\\uDC99\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvZ2xvYmFsLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBd0JPLE1BQU1BLFNBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0EsSUFBSTtJQUNKLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsS0FBSztJQUNMO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtDQUNELENBQUM7QUFFSyxNQUFNQyxTQUFpQjtJQUM1QkMsU0FBUztRQUNQO1lBQ0VILE9BQU87WUFDUEksT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkMsZUFBZTtnQkFDakI7Z0JBQ0EsSUFBSTtnQkFDSixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsMEJBQTBCO2dCQUMxQixLQUFLO2dCQUNMO29CQUNFRixNQUFNO29CQUNOQyxNQUFNO29CQUNOQyxlQUFlO2dCQUNqQjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkMsZUFBZTtnQkFDakI7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05DLE1BQU07b0JBQ05DLGVBQWU7Z0JBQ2pCO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VQLE9BQU87WUFDUEksT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkUsTUFBTSxHQUFvQyxPQUFqQ0MseURBQWdDLEVBQUM7b0JBQzFDRixlQUFlO2dCQUNqQjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkUsTUFBTSxHQUFvQyxPQUFqQ0MseURBQWdDLEVBQUM7b0JBQzFDRixlQUFlO2dCQUNqQjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkUsTUFBTSxHQUFvQyxPQUFqQ0MseURBQWdDLEVBQUM7b0JBQzFDRixlQUFlO2dCQUNqQjthQUNEO1FBQ0g7S0FDRDtJQUNESyxTQUFTO1FBQ1BDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvZ2xvYmFsLnRzP2ViZjMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBSb3V0ZSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xufTtcblxudHlwZSBGb290ZXJDb2wgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxpbmtzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGxlYXZlc1dlYnNpdGU6IGJvb2xlYW47XG4gIH1bXTtcbn07XG5cbnR5cGUgRm9vdGVyID0ge1xuICBjb2x1bW5zOiBGb290ZXJDb2xbXTtcbiAgc3VwcG9ydDoge1xuICAgIGJ1eW1lYWNvZmZlZTogc3RyaW5nO1xuICAgIHBheXBhbDogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlW10gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgcGF0aDogXCIvXCJcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkJsb2dcIixcbiAgLy8gICBwYXRoOiBcIi9ibG9nXCIsXG4gIC8vIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0c1wiLFxuICAgIHBhdGg6IFwiL3Byb2plY3RzXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcbiAgICBwYXRoOiBcIi9jb250YWN0XCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBob3RvZ3JhcGh5XCIsXG4gICAgcGF0aDogXCIvcGhvdG9ncmFwaHlcIlxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyOiBGb290ZXIgPSB7XG4gIGNvbHVtbnM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJQYWdlc1wiLFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgICAgICAgIGxpbms6IFwiL1wiLFxuICAgICAgICAgIGxlYXZlc1dlYnNpdGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuYW1lOiBcIkJsb2dcIixcbiAgICAgICAgLy8gICBsaW5rOiBcIi9ibG9nXCIsXG4gICAgICAgIC8vICAgbGVhdmVzV2Vic2l0ZTogZmFsc2UsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgbGluazogXCIvcHJvamVjdHNcIixcbiAgICAgICAgICBsZWF2ZXNXZWJzaXRlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgICAgICAgbGluazogXCIvY29udGFjdFwiLFxuICAgICAgICAgIGxlYXZlc1dlYnNpdGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlBob3RvZ3JhcGh5XCIsXG4gICAgICAgICAgbGluazogXCIvcGhvdG9ncmFwaHlcIixcbiAgICAgICAgICBsZWF2ZXNXZWJzaXRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTb2NpYWxcIixcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkdpdEh1YlwiLFxuICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FTYTFtXCIsXG4gICAgICAgICAgaWNvbjogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9c3RhdGljL2ljb25zL2dpdGh1Yi1mLnN2Z2AsXG4gICAgICAgICAgbGVhdmVzV2Vic2l0ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJMaW5rZWRJblwiLFxuICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FiZHVsbGFoLXNhaW0vXCIsXG4gICAgICAgICAgaWNvbjogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9c3RhdGljL2ljb25zL2xpbmtlZGluLWYuc3ZnYCxcbiAgICAgICAgICBsZWF2ZXNXZWJzaXRlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkVtYWlsXCIsXG4gICAgICAgICAgbGluazogXCJtYWlsdG86YWJkdWxsYWguc2FpbS5hc0BnbWFpbC5jb21cIixcbiAgICAgICAgICBpY29uOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1zdGF0aWMvaWNvbnMvbWFpbC1mLnN2Z2AsXG4gICAgICAgICAgbGVhdmVzV2Vic2l0ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICBzdXBwb3J0OiB7XG4gICAgYnV5bWVhY29mZmVlOiBcIm1pdGVzaHRhZ2FwXCIsXG4gICAgcGF5cGFsOiBcIm1pdGVzaHRhZ2FkaXlhXCIsXG4gICAgbWVzc2FnZTogXCJJIGFwcHJlY2lhdGUgeW91ciBzdXBwb3J0IHZlcnkgbXVjaCEg8J+SmVwiXG4gIH1cbn07XG4iXSwibmFtZXMiOlsicm91dGVzIiwidGl0bGUiLCJwYXRoIiwiZm9vdGVyIiwiY29sdW1ucyIsImxpbmtzIiwibmFtZSIsImxpbmsiLCJsZWF2ZXNXZWJzaXRlIiwiaWNvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInN1cHBvcnQiLCJidXltZWFjb2ZmZWUiLCJwYXlwYWwiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/global.ts\n"));

/***/ })

});