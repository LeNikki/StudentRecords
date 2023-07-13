"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 8682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "getStudentData": () => (/* binding */ getStudentData)
/* harmony export */ });
//fetch api
async function getStudentData() {
    const res = await fetch("http://localhost:8000/students");
    const data = await res.json();
    return {
        stud: data
    };
}
//handle API requests
function handler(res, req) {
    const stud = getStudentData();
    const student = stud.stud;
    if (req.method === "GET") {
        res.status(200).json(student);
    } else if (req.method === "POST") {
        const data = req.body //get the body of the request
        ;
        const index = student.find((takenVal)=>takenVal.number == data.number);
        if (!index) {
            student.push(data) //push it to database
            ;
            res.status(201).json(data) //return status and the data pushed
            ;
        } else {
            throw new Error("Student already Exists");
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8682));
module.exports = __webpack_exports__;

})();