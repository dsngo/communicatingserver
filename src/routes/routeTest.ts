import SurveyController from "../controllers/surveyController";
const routeTest = require("express").Router();

// USE FOR TESTING
routeTest.get("/clearDB", SurveyController.clearDB);
routeTest.get("/remove", SurveyController.clearAllClientForms);
routeTest.get("/", (req: any, res: any) => {
  res.json({
    message: "api is running",
  });
});

routeTest.get("/create-user", SurveyController.createUser)


export default routeTest;
