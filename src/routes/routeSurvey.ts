import SurveyController from "../controllers/surveyController";
import { jsonParser } from "../middlewares/bodyParser";
const routeSurvey = require("express").Router();

// READ
    // ALL
    routeSurvey.get("/", SurveyController.getAllSurveyForms);
    // BY ID
    routeSurvey.get("/:id", SurveyController.getSurveyFormById);

// CREATE
    routeSurvey.post("/", jsonParser, SurveyController.createSurveyForm);

export default routeSurvey;
