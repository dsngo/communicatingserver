import SurveyController from "../controllers/surveyController";
const jsonParser = require("express").json();
const routeSurvey = require("express").Router();

// READ
// route /survey

routeSurvey
  .route("/")
  .get(SurveyController.getAllSurveyForms)
  .post(jsonParser, SurveyController.createSurveyForm);

routeSurvey.route("/recent").get(SurveyController.getAllRecentForms);

routeSurvey
  .route("/form/:formId")
  .get(SurveyController.getSurveyFormById)
  .put(jsonParser, SurveyController.updateSurveyForm);

export default routeSurvey;
