import * as mongoose from "mongoose";

export default class MgConfig {
    constructor(
        private mongodbURI = "mongodb://surveytest:123123@ds129776.mlab.com:29776/form_database",
        private options = {
            keepAlive: 300000,
            connectTimeoutMS: 30000,
            useMongoClient: true,
        },
    ) {}
    static mgConnect(uri?: string, options?: any, promise = global.Promise) {
        const Controller = new MgConfig(uri, options);
        (mongoose as any).Promise = promise;
        mongoose.connect(Controller.mongodbURI, Controller.options);
    }

    static getTime(objectIdString: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId(objectIdString)
    }
}
