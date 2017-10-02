import SurveyController from "../controllers/surveyController";
const express = require("express");
const router = express.Router();

// USE FOR TESTING
router.get("/clearDB", SurveyController.clearDB);
router.get("/remove", SurveyController.clearAllResponse);
router.get("/", function(req:any, res:any) {
    res.json({
        message: "api is running"
    })
});


module.exports = router;