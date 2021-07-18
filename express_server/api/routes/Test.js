const express = require("express");

const router = express.Router();

const testController = require("../controllers/Test");

/*
Name: testOne
Method: GET
Des: 
Route: Public
*/
router.get("/testOne", testController.testOne);

/*
Name: testTwo
Method: GET
Des: 
Route: Private
*/
router.get("/testTwo", testController.testTwo);

router.post("/insert", testController.testInsert);

router.delete("/deleteAll", testController.testDeleteAll);

module.exports = router;