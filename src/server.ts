import * as express from "express";
import * as mongoose from "mongoose";
import methodOverride from "method-override";
import * as bodyParser from 'body-parser';

const app: express.Application = express();

// express configuration
app.use(acceptCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let router = require('./route');
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
app.use("/api/v1", router);
app.listen(sPORT, sIP, sLog);


function acceptCors(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}
