import SurveyController from "../controllers/surveyController";
import { jsonParser } from "../middlewares/bodyParser";
const routeClientSurvey = require("express").Router();

// READ
    // ALL
    routeClientSurvey.get("/", SurveyController.getAllSubmittedClientSurveyForms); // Get all responses from all surveys.
    // BY ID
    routeClientSurvey.get("/:id", SurveyController.getClientSurveyFormById);

// CREATE
    routeClientSurvey.post("/", jsonParser, SurveyController.createClientSurveyForm);

export default routeClientSurvey;
