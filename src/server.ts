import * as express from "express";
import * as mongoose from "mongoose";
import methodOverride from "method-override";
const surveyRouter = require("./routes/survey");
const clientSurveyRouter = require("./routes/clientSurvey");
const testRouter = require("./routes/test");
const app: express.Application = express();



const sPORT: any = process.env.PORT || 3000;
const sIP: any = process.env.IP;
const sLog = () => console.log(`Server is listening... ${sIP || "localhost"}:${sPORT}`); // tslint:disable-line

const options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
};

const mongodbURI = "mongodb://localhost/form_database";


const dbConfig = () => {
    mongoose.connect(mongodbURI, options);
    (<any>mongoose).Promise = global.Promise;
};
dbConfig();


// Config cross origin 
app.use(acceptCors);

// USE ROUTES
app.use("/survey", surveyRouter);
app.use("/client-survey", clientSurveyRouter);
app.use("/test", testRouter);

app.listen(sPORT, sIP, sLog);


function acceptCors(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}
