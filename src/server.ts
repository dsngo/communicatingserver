import * as express from "express";
import * as mongoose from "mongoose";
import methodOverride from "method-override";
import MgConfig from "./controllers/MgConfig";
import { customCORS } from "./controllers/headerController";
import routeSurvey from "./routes/routeSurvey"
import routeClientSurvey from "./routes/routeClientSurvey"
import routeTest from "./routes/routeTest"

const app: express.Application = express();

MgConfig.mgConnect();

const sPORT: any = process.env.PORT || 3000;
const sIP: any = process.env.IP;
const sLog = () => console.log(`Server is listening... ${sIP || "localhost"}:${sPORT}`); // tslint:disable-line

// ADD HEADER
app.use(customCORS);

// USE ROUTES
app.use("/survey", routeSurvey);
app.use("/client-survey", routeClientSurvey);
app.use("/test", routeTest);

app.listen(sPORT, sIP, sLog);
