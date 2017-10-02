import SurveyController from "../controllers/surveyController";
const bodyParser = require("../middlewares/bodyParser");
const express = require("express");
const router = express.Router();

router.get("/", SurveyController.getAllResponse); // Get all responses from all surveys.
router.get("/:id", SurveyController.getBySurvey);

router.post("/", bodyParser.jsonParser, SurveyController.createResponse);

module.exports = router;