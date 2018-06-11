import SurveyController from "../controllers/surveyController";
const routeClientSurvey = require("express").Router();
const jsonParser = require("express").json();

// READ
routeClientSurvey
  .route("/")
  .get(SurveyController.getAllSubmittedClientSurveyForms)
  .post(jsonParser, SurveyController.submitClientSurvey);

routeClientSurvey
  .route("/:clientSurveyId")
  .get(SurveyController.getClientSurveyFormById)
  .put(jsonParser, SurveyController.submitClientSurvey);

export default routeClientSurvey;
