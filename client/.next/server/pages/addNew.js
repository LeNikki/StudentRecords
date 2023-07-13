"use strict";
(() => {
var exports = {};
exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 5573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/search_ic.6f4a8472.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42k3BMRGAIAAAwEecnV1M4VHAmQZEYHPRJhRgIoQZjOTqPxMWm5/D0F0IsBhWNBmRTQdVQYRbU712zEBW7B4JCIDkBIiiGYQPAUMKd3IUiGkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddNew),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8769);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_search_ic_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5573);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);







function AddNew({ studentCpE  }) {
    const [studInfo, setstudInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: " ",
        num: 0
    }); //inputs
    const [student, setstudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(studentCpE); //studentList from server-json
    let collectionName = "English";
    //loads new set of data
    async function GetData() {
        let collectionName = "English"; //we will send this as req.query.collection 
        const res = await fetch(`http://localhost:3000/api/studentdb?collection=${collectionName}`, {
            method: "GET"
        });
        const data = res.json();
        setstudent(data);
    }
    function setName(e) {
        setstudInfo((prev)=>({
                ...prev,
                name: e.target.value
            }));
    }
    function setNum(e) {
        setstudInfo((prev)=>({
                ...prev,
                num: e.target.value
            }));
    }
    function setCollection(e) {
        collectionName = e.target.value;
        window.alert(collectionName);
    }
    async function newData(e) {
        //new student
        e.preventDefault();
        let item = {
            name: studInfo.name,
            number: studInfo.num
        };
        //check if student number exists
        // const index = student.find(takenVal=> takenVal.number == item.number);
        // const stdn = student.find(takenVal=> takenVal.name == item.name);
        // const ind = {index};
        // const stdName = {stdn};
        // if(ind.index!=null){
        //   if (ind.index.number === item.number){
        //     window.alert("ERROR: Student Number Exists") ;
        //   }    
        // }
        // else if(stdName.stdn!=null){
        //  if (stdName.stdn.name === item.name){
        //     window.alert("ERROR: Student Name Exists") ;
        //   }
        // }
        // else{
        const res = await fetch(`http://localhost:3000/api/studentdb?collection=${collectionName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        const data = await res.json();
        window.alert(data.message);
        clear(); //clear input box
        // }
        GetData();
    }
    function clear() {
        const name = document.getElementById("student_name");
        const number = document.getElementById("student_num");
        name.value = " ";
        number.value = 0;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Add New"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "bg-violet-400 w-full p-2  flex flex-row justify-between items-center rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "ml-4",
                        children: "Please fill-up the form  below"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "w-1/4 flex flex-row justify-around ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "p-1 w-3/4 rounded-md border border-slate-700 focus:outline-red-400"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "w-10 h-10 pt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: _public_search_ic_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                action: "/addNew",
                method: "POST",
                className: " flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "flex flex-row my-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "font-semibold py-2 px-3 w-60 ",
                                children: "Please enter name: "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "name",
                                id: "student_name",
                                value: studInfo.name,
                                onChange: setName,
                                className: " w-1/4 appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "flex flex-row my-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "font-semibold py-2 px-3 w-60 ",
                                children: "Please enter number: "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                name: "number",
                                id: "student_num",
                                value: studInfo.num,
                                onChange: setNum,
                                className: "w-1/4 appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30",
                                required: true,
                                min: "10",
                                maxLength: "20"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "flex flex-row my-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "font-semibold py-2 px-3 md:w-60 ",
                                children: "Choose Subject: "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "subjects",
                                onChange: setCollection,
                                className: "rounded-md border border-2 border-slate-300 p-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "English",
                                        children: "English for daily use"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "EmergingTech",
                                        children: "Emerging Technologies"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "flex flex-row px-3 py-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: newData,
                                type: "submit",
                                value: "submit",
                                className: "mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500",
                                children: "Submit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "reset",
                                onClick: clear,
                                value: "clear",
                                className: "mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500",
                                children: "Clear"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    let collectionName = "English"; //we will send this as req.query.collection 
    const res = await fetch(`http://localhost:3000/api/studentdb?collection=${collectionName}`, {
        method: "GET"
    });
    //       
    const data = await res.json();
    //we need to stringify the data from json
    return {
        props: {
            studentCpE: data
        }
    };
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,769], () => (__webpack_exec__(173)));
module.exports = __webpack_exports__;

})();