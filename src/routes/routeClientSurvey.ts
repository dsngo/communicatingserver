import SurveyController from "../controllers/surveyController";
// import { jsonParser } from "../middlewares/bodyParser";
const routeClientSurvey = require("express").Router();
const jsonParser = require("express").json();

// READ
    // ALL
    routeClientSurvey.get("/", SurveyController.getAllSubmittedClientSurveyForms); // Get all responses from all surveys.
    // BY ID
    routeClientSurvey.get("clientSurveyId", SurveyController.getClientSurveyFormById);

// CREATE
    routeClientSurvey.post("/", jsonParser, SurveyController.submitClientSurvey);

export default routeClientSurvey;
