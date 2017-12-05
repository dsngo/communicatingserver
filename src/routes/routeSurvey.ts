import SurveyController from "../controllers/surveyController";
const jsonParser = require("express").json();
const routeSurvey = require("express").Router();

// READ
    // ALL
    routeSurvey.get("/", SurveyController.getAllSurveyForms);
    // LIMIT BY 3 FOR INDEX PAGE
    // routeSurvey.get("/index", SurveyController.getSurveyFormsIndexPage)
    // RECENTS
    routeSurvey.get("/recent-forms", SurveyController.getAllRecentForms)
    // BY ID
    routeSurvey.get("/:formId", SurveyController.getSurveyFormById);
    

// CREATE
    routeSurvey.post("/", jsonParser, SurveyController.createSurveyForm);

// UPDATE 
    routeSurvey.put("/:formId", jsonParser, SurveyController.updateSurveyForm)

export default routeSurvey;
