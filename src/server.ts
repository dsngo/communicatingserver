import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import bodyParser from "body-parser";

const app = express();
const sPORT = process.env.PORT || 3000;
const sIP = process.env.IP;
const sLog = () => console.log(`Server is listening... ${sIP || "localhost"}:${sPORT}`); // tslint:disable-line

const options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
};

const mongodbURI = "mongodb://localhost/";

const dbConfig = () => {
    mongoose.connect(mongodbURI, options);
    mongoose.Promise = global.Promise;
};
