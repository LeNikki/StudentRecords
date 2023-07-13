"use strict";
(() => {
var exports = {};
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 5573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/search_ic.6f4a8472.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42k3BMRGAIAAAwEecnV1M4VHAmQZEYHPRJhRgIoQZjOTqPxMWm5/D0F0IsBhWNBmRTQdVQYRbU712zEBW7B4JCIDkBIiiGYQPAUMKd3IUiGkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListOfStudents),
  "getServerSideProps": () => (/* binding */ getServerSideProps),
  "prevInfo": () => (/* binding */ prevInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(8769);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/search_ic.png
var search_ic = __webpack_require__(5573);
;// CONCATENATED MODULE: ./public/trash.png
/* harmony default export */ const trash = ({"src":"/_next/static/media/trash.3269e553.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42h3GoQ2AMBhE4bcDW+DaAX6F60CIjkBAkCBAYEGxQifpLlzue8nlsMqrKjby0NlV1xuRj8Sgkp4tZCaV9WylcKiiZxvBrELPLjKiPbGgcatGwA+spxTaoc6zRgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/listOfStudents.js









//import clientPromise from "../lib/mongodb";
//import { getServerSideProps } from './addNew'
let prevInfo = {};
function ListOfStudents({ studentCpE  }) {
    //studentProp from getServerSideProps loads intial data
    const [student, setstudent] = (0,external_react_.useState)(studentCpE);
    const [selectAll, setselectAll] = (0,external_react_.useState)(false);
    //  Get API req, loads new data when edited or deletd
    async function GetData() {
        //what could be the problem with this function?
        let collectionName = "English"; //we will send this as req.query.collection 
        const res = await fetch(`http://localhost:3000/api/studentdb?collection=${collectionName}`, {
            method: "GET"
        });
        const data = await res.json();
        setstudent(data);
    }
    async function DeleteData(studentId) {
        //will this code snippet work if I want to delete a certain user in the database?
        const collectionName = "English";
        const res = await fetch(`http://localhost:3000/api/studentdb?collection=${collectionName}&deleteAll=false`, {
            method: "DELETE"
        });
        const data = await res.json();
        window.alert(data.message);
        GetData();
    }
    async function DeleteAll() {
        const collectionName = "English";
        const deleteAll = window.confirm("Are you sure you want to DELETE all data? This cannot be undone.");
        console.log(deleteAll);
        if (deleteAll) {
            const res = await fetch(`http://localhost:3000/api/studentdb?collection=${collectionName}&deleteAll=true`, {
                method: "DELETE"
            });
            const data = await res.json();
            window.alert(data.message);
        }
        GetData();
    }
    function getStud(stud) {
        console.log("update");
        prevInfo = stud;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-200 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "List of students"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "bg-violet-400 w-full p-2  flex flex-row justify-between items-center rounded-md",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "ml-4",
                                children: "Subject Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "w-1/4 flex flex-row justify-around ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "p-1 w-3/4 rounded-md border border-slate-700 focus:outline-red-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                        className: "w-10 h-10 pt-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: search_ic/* default */.Z
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center items-center flex-col bg-white mr-5 mt-5 w-full rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: " grid grid-cols-4 p-3  w-70  md:w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "p-1 md:p-3 w-1/2 col-span-2 font-bold",
                                        children: "Student Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: " p-1 md:p-3 w-1/2 col-span-1 font-bold",
                                        children: "Student Number"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                        className: "items-center w-50 h-10 flex flex-row justify-around ",
                                        children: [
                                            selectAll ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: DeleteAll,
                                                className: "bg-red-400 h-10 p-2 w-40 flex flex-row justify-around",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: trash,
                                                        width: 20,
                                                        height: 20
                                                    }),
                                                    "Delete All?"
                                                ]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Select All"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                id: "selectAll",
                                                checked: selectAll,
                                                onChange: ()=>setselectAll(!selectAll)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            student.map((stud)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    className: " grid grid-cols-4 p-3  w-70  md:w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "p-1 md:p-3 w-1/2 col-span-2",
                                            children: stud.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: " p-1 md:p-3 w-1/2 col-span-1",
                                            children: stud.number
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                            className: "flex flex-row  md:ml-2 md:col-span-1",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "bg-yellow-400 ml-0 p-1 md:p-3 md:w-40  ml-2 hover:bg-yellow-700",
                                                    onClick: ()=>getStud(stud),
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "./updateData",
                                                            children: "Edit"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "bg-red-600  p-1 md:p-3 ml-0 md:w-40  ml-2 hover:bg-green-600",
                                                    onClick: ()=>DeleteData(stud.id),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, stud._id))
                        ]
                    })
                ]
            }),
            " "
        ]
    });
}
//get server side props to be able to load data at runtime, useful if there are changes in dataset
//React needs to have all the required data before the page is rendered.
//allows dynamic load for constantly changing data
//THIS IS FOR server-json
// export async function getServerSideProps(){
//     const res = await fetch("http://localhost:8000/students") //server
//     const data = await res.json()
//     return{
//         props:{
//             studentProp: data
//         }
//     }
// }
//this is for mongodb: using getserverside props for rendering
/*export async function getServerSideProps(){
    
        const client = await clientPromise;
        const studentCPE_db = client.db("StudentsDb"); //name of db in mongodb

        const studentCPE = await studentCPE_db 
            .collection("StudentsCollection")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();
            
        return {
                props: { studentCpE: JSON.parse(JSON.stringify(studentCPE)) },
        };
   
}*/ //or for calling our mongodb api
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
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,769], () => (__webpack_exec__(5041)));
module.exports = __webpack_exports__;

})();