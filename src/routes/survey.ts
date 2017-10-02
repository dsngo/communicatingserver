import SurveyController from "../controllers/surveyController";
const bodyParser = require("../middlewares/bodyParser");
const express = require("express");
const router = express.Router();

router.get("/", SurveyController.list);
router.get("/:id", SurveyController.getById);

router.post("/", bodyParser.jsonParser, SurveyController.saveSurvey);

module.exports = router;
