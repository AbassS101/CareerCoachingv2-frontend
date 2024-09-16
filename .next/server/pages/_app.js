/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// components/Header.js\n\n\n\n\nfunction Header() {\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsLoggedIn(!!localStorage.getItem(\"token\"));\n    }, []);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"user\");\n        setIsLoggedIn(false);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-white shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            \"aria-label\": \"Top\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: \"text-xl font-bold text-indigo-600\",\n                                children: \"Career Coaching\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden ml-10 space-x-8 lg:block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/coaches\",\n                                        className: \"text-base font-medium text-gray-500 hover:text-gray-900\",\n                                        children: \"Find a Coach\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/profile\",\n                                        className: \"text-base font-medium text-gray-500 hover:text-gray-900\",\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-10 space-x-4\",\n                        children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogout,\n                            className: \"inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/login\",\n                                    className: \"inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/register\",\n                                    className: \"inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7O0FBQ007QUFDZTtBQUNKO0FBRXpCLFNBQVNJO0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNTSxTQUFTSixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1JJLGNBQWMsQ0FBQyxDQUFDRSxhQUFhQyxPQUFPLENBQUM7SUFDdkMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZTtRQUNuQkYsYUFBYUcsVUFBVSxDQUFDO1FBQ3hCSCxhQUFhRyxVQUFVLENBQUM7UUFDeEJMLGNBQWM7UUFDZEMsT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7WUFBeUNFLGNBQVc7c0JBQ2pFLDRFQUFDQztnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFJSCxXQUFVOzswQ0FDYiw4REFBQ2Qsa0RBQUlBO2dDQUFDa0IsTUFBSztnQ0FBSUosV0FBVTswQ0FBb0M7Ozs7OzswQ0FHN0QsOERBQUNHO2dDQUFJSCxXQUFVOztrREFDYiw4REFBQ2Qsa0RBQUlBO3dDQUFDa0IsTUFBSzt3Q0FBV0osV0FBVTtrREFBMEQ7Ozs7OztvQ0FHekZULDRCQUNDLDhEQUFDTCxrREFBSUE7d0NBQUNrQixNQUFLO3dDQUFXSixXQUFVO2tEQUEwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1oRyw4REFBQ0c7d0JBQUlILFdBQVU7a0NBQ1pULDJCQUNDLDhEQUFDYzs0QkFDQ0MsU0FBU1Y7NEJBQ1RJLFdBQVU7c0NBQ1g7Ozs7O2lEQUlEOzs4Q0FDRSw4REFBQ2Qsa0RBQUlBO29DQUFDa0IsTUFBSztvQ0FBU0osV0FBVTs4Q0FBaUk7Ozs7Ozs4Q0FHL0osOERBQUNkLGtEQUFJQTtvQ0FBQ2tCLE1BQUs7b0NBQVlKLFdBQVU7OENBQWdJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqTCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmVlci1jb2FjaGluZy1mcm9udGVuZC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9IZWFkZXIuanNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9nZ2VkSW4oISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93XCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIiBhcmlhLWxhYmVsPVwiVG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWluZGlnby01MDAgbGc6Ym9yZGVyLW5vbmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby02MDBcIj5cclxuICAgICAgICAgICAgICBDYXJlZXIgQ29hY2hpbmdcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtbC0xMCBzcGFjZS14LTggbGc6YmxvY2tcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvYWNoZXNcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICBGaW5kIGEgQ29hY2hcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1pbmRpZ28tNTAwIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS03NVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctaW5kaWdvLTUwMCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby01MFwiPlxyXG4gICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInJvdXRlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImhlYWRlciIsImNsYXNzTmFtZSIsIm5hdiIsImFyaWEtbGFiZWwiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n// components/Layout.js\n\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Layout.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Layout.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\components\\\\Layout.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsdUJBQXVCOztBQUNPO0FBRWYsU0FBU0MsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDekMscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0gsK0NBQU1BOzs7OzswQkFDUCw4REFBQ0k7MEJBQU1GOzs7Ozs7Ozs7Ozs7QUFJYiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmVlci1jb2FjaGluZy1mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9MYXlvdXQuanNcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgey8qIFlvdSBjYW4gYWRkIGEgRm9vdGVyIGNvbXBvbmVudCBoZXJlIGlmIHlvdSBoYXZlIG9uZSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n// pages/_app.js\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aweso\\\\Documents\\\\career-coaching-frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7QUFDZTtBQUNXO0FBRTFDLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILDBEQUFNQTtrQkFDTCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZWVyLWNvYWNoaW5nLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAuanNcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();