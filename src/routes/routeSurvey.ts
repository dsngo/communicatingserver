import SurveyController from "../controllers/surveyController";
import { jsonParser } from "../middlewares/bodyParser";
const routeSurvey = require("express").Router();

// READ
    // ALL
    routeSurvey.get("/", SurveyController.getAllSurveyForms);
    // LIMIT BY 3 FOR INDEX PAGE
    routeSurvey.get("/index", SurveyController.getSurveyFormsIndexPage)
    // BY ID
    routeSurvey.get("/:id", SurveyController.getSurveyFormById);
    

// CREATE
    routeSurvey.post("/", jsonParser, SurveyController.createSurveyForm);

// UPDATE 
    routeSurvey.put("/:id", jsonParser, SurveyController.updateClientSurvey)

export default routeSurvey;
