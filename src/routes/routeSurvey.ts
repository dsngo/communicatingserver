import SurveyController from "../controllers/surveyController";
const jsonParser = require("express").json();
const routeSurvey = require("express").Router();

// READ
    // ALL
    routeSurvey.get("/", SurveyController.getAllSurveyForms);
    // BY ID
    routeSurvey.get("clientSurveyId", SurveyController.getSurveyFormById);
    // RECENTS
    routeSurvey.get("/recent-forms", SurveyController.getAllRecentForms)

// CREATE
    routeSurvey.post("/", jsonParser, SurveyController.createSurveyForm);

// UPDATE 
    routeSurvey.put("clientSurveyId", jsonParser, SurveyController.updateClientSurvey)

export default routeSurvey;
