"use strict";
(() => {
var exports = {};
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 7415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

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

;// CONCATENATED MODULE: ./pages/api/studentdb.js

async function handler(req, res) {
    try {
        const client = await mongodb;
        const db = client.db("StudentsDb");
        const collectionName = req.query.collection;
        switch(req.method){
            case "GET":
                {
                    const studentCPE = await db.collection(collectionName).find({}).sort({
                        metacritic: -1
                    }).limit(10).toArray();
                    res.status(200).json(studentCPE);
                }
                break;
            case "POST":
                {
                    const { name , number  } = req.body; //the object that we will pus is {name: "SNdjnfjn", number: "34534"}
                    const nameExist = await db.collection(collectionName).findOne({
                        name
                    });
                    const numExist = await db.collection(collectionName).findOne({
                        number
                    });
                    if (nameExist) {
                        // Data exists in the collection
                        console.log("Data exists:");
                        res.json({
                            message: "Error. Student name exists"
                        });
                    } else if (numExist) {
                        // Data exists in the collection
                        console.log("Data exists:");
                        res.json({
                            message: "Error. Student number exists"
                        });
                    } else if (numExist && nameExist) {
                        // Data exists in the collection
                        console.log("Data exists:");
                        res.json({
                            message: "Error. Student name and number exists"
                        });
                    } else {
                        // Data does not exist in the collection
                        const studentCPE = await db.collection(collectionName).insertOne({
                            name,
                            number
                        });
                        res.status(200).json({
                            data: studentCPE,
                            message: "Successfully added new student."
                        });
                    }
                }
                break;
            case "DELETE":
                {
                    const deleteAll = req.query.deleteAll;
                    if (deleteAll) {
                        const result = await db.collection(collectionName).deleteMany({});
                        if (result.deletedCount >= 1) {
                            res.status(200).json({
                                message: "Successfully deleted all document. " + deleteAll
                            });
                        } else {
                            res.status(200).json({
                                message: "No Data to delete. Empty."
                            });
                        }
                    } else if (!deleteAll) {
                        const studentId = req.body.idNumber; // Access idNumber from the request body
                        const query = {
                            id: studentId
                        }; //in the database we have: {_id, id, name, number}.. we will query the "id"
                        const result = await db.collection(collectionName).deleteOne(query);
                        if (result.deletedCount === 1) {
                            res.status(200).json({
                                message: "Successfully deleted one document. " + deleteAll
                            });
                        } else {
                            res.status(200).json({
                                message: "No Data to delete. Empty."
                            });
                        }
                    } else {
                        res.json({
                            message: "Confused: " + deleteAll
                        });
                    }
                }
                break;
        }
    } catch (e) {
        console.error(e);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7415));
module.exports = __webpack_exports__;

})();