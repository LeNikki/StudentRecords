"use strict";
(() => {
var exports = {};
exports.id = 837;
exports.ids = [837];
exports.modules = {

/***/ 7708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _studentId_handler)
});

;// CONCATENATED MODULE: ./pages/api/index.js
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

;// CONCATENATED MODULE: ./pages/api/[studentId].js
//fetch api

//
function _studentId_handler(res, req) {
    const [studentId] = req.query //query
    ;
    const student = handler() //object data {stud:data all students}
    ;
    const index = student.find((stud)=>stud.id === parseInt(studentId));
    if (req.method === "DELETE") {
        student.splice(index, 1);
        res.status(202).json(index);
    } else if (req.method === "PUT") {
        const index = student.find((stud)=>stud.id === parseInt(studentId));
        const data = req.body;
        if (!index) {
            res.status(404).json({
                message: "Student not found."
            });
            throw new Error("'Student not found.'");
        }
        student[index] = data;
        res.status(202).json(data) //return status and the data pushed 
        ;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7708));
module.exports = __webpack_exports__;

})();