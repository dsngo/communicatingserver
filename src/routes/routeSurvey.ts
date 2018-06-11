import SurveyController from "../controllers/surveyController";
const jsonParser = require("express").json();
const routeSurvey = require("express").Router();

// READ

routeSurvey
  .route("/")
  .get(SurveyController.getAllSurveyForms)
  .post(jsonParser, SurveyController.createSurveyForm);

routeSurvey
  .route("/:formId")
  .get(SurveyController.getSurveyFormById)
  .post(jsonParser, SurveyController.updateSurveyForm);

routeSurvey.route("/recent-forms").get(SurveyController.getAllRecentForms);

export default routeSurvey;
