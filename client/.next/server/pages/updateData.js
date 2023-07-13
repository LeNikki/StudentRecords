"use strict";
(() => {
var exports = {};
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 2274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UpdateData),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(8769);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.js

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"');
}
const uri = "mongodb+srv://admin:admin@nicolecluster.votszzm.mongodb.net/";
const options = {};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const mongodb = (clientPromise);

;// CONCATENATED MODULE: ./pages/updateData.js





//import {prevInfo} from "./listOfStudents"

// export async function GetData(){
//   const res = await fetch("http://localhost:8000/students");
//   const data = await res.json();
//   return data;
// }
function UpdateData({ studentProp  }) {
    //THIS IS FOR SERVER-JSON, do not remove
    //prevInfo holds the particular student info
    //This is the PUT request to update data
    // const student = studentProp
    //  async function upData(e){
    //   e.preventDefault()
    //   let stud = {
    //     id: prevInfo.id,
    //     name: studInfo.name,
    //     number: studInfo.num
    //   }
    //   const index = student.find(takenVal=> takenVal.number == stud.number);
    //   const stdn = student.find(takenVal=> takenVal.name == stud.name);
    //   const ind = {index}
    //   const stdName = {stdn}
    //   if(prevInfo.name==stud.name){
    //     //check is number is existing
    //     if(ind.index!=null){
    //       if(ind.index.number==stud.number){
    //         window.alert("Number is already existing")
    //       }
    //       else{
    //         const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
    //         {
    //           method: "PUT",
    //           headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
    //           body: JSON.stringify(stud)
    //         })
    //         const data = await res.json() 
    //           window.alert("Submitted Successfully") ;
    //           clear() //clear input box 
    //       }
    //     }
    //     else{
    //       const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
    //       {
    //         method: "PUT",
    //         headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
    //         body: JSON.stringify(stud)
    //       })
    //       const data = await res.json() 
    //         window.alert("Submitted Successfully") ;
    //         clear() //clear input box 
    //     }
    //   }
    //   if(prevInfo.number==stud.number){
    //     //check is number is existing
    //     if(stdName.stdn!=null){
    //       if(stdName.stdn.name==stud.name){
    //         window.alert("Name is already existing")
    //       }
    //       else{
    //         const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
    //         {
    //           method: "PUT",
    //           headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
    //           body: JSON.stringify(stud)
    //         })
    //         const data = await res.json() 
    //           window.alert("Submitted Successfully") ;
    //           clear() //clear input box 
    //       }
    //     }
    //     else{
    //       const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
    //       {
    //         method: "PUT",
    //         headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
    //         body: JSON.stringify(stud)
    //       })
    //       const data = await res.json() 
    //         window.alert("Submitted Successfully") ;
    //         clear() //clear input box 
    //     }
    //   }
    //   else{
    //     const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
    //     {
    //       method: "PUT",
    //       headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
    //       body: JSON.stringify(stud)
    //     })
    //     const data = await res.json() 
    //       window.alert("Submitted Successfully") ;
    //       clear() //clear input box 
    //   }
    //   GetData()
    //  }
    const [studInfo, setstudInfo] = (0,external_react_.useState)({
        name: prevInfo.name,
        num: prevInfo.number
    });
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
    function clear() {
        const name = document.getElementById("student_name");
        const number = document.getElementById("student_num");
        name.value = " ";
        number.value = 0;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Update Info"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "/updateData",
                method: "PUT",
                className: " flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "ID: ",
                            prevInfo.id
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        className: "flex flex-row my-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold py-2 px-3 w-30 md:w-60",
                                children: "Please enter name: "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "name",
                                id: "student_name",
                                value: studInfo.name,
                                onChange: setName,
                                className: " appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        className: "flex flex-row my-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold py-2 px-3 md:w-60 ",
                                children: "Please enter number: "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                name: "number",
                                id: "student_num",
                                value: studInfo.num,
                                onChange: setNum,
                                className: " appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40",
                                required: true,
                                minLength: "10",
                                maxLength: "20"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        className: "flex flex-row px-3 py-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: upData,
                                type: "submit",
                                value: "submit",
                                className: "mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500",
                                children: "Submit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
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
//THIS IS FOR SERVER-JSON
// export async function getServerSideProps(){
//   const data = await GetData();
//   return{
//       props:{
//           studentProp: data
//       }
//   }
// }
//this is for mongodb:
async function getServerSideProps() {
    const client = await mongodb;
    const studentCPE_db = client.db("StudentsDb"); //name of db in mongodb
    const studentCPE = await studentCPE_db.collection("StudentsCollection").find({}).sort({
        metacritic: -1
    }).limit(20).toArray();
    return {
        props: {
            studentCpE: JSON.parse(JSON.stringify(studentCPE))
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,769], () => (__webpack_exec__(2274)));
module.exports = __webpack_exports__;

})();