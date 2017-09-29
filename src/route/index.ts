import MgController from "../controllers/MgConfig";
import Survey from "../controllers/Survey";
import Responses from "../controllers/Response";
let express = require('express');
let router = express.Router();

// router.get("/initDB", Survey.initDB);

// Route survey
router.get("/survey", Survey.list);
router.post("/survey/create", Survey.saveSurvey);
router.get("/survey/clearDB", Survey.clearDB);
router.get("/survey/get/:id", Survey.getById);


// Route response
router.post("/response", Responses.createResponse);
router.get("/response", Responses.getAllResponse);
router.get("/response/get-by-survey/:id", Responses.getBySurvey);

router.get("/test", function(req:any, res:any) {
    res.json({
        message: "api is running"
    })
});

module.exports = router;