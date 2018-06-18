import * as mongoose from "mongoose";

export default class MgConfig {
  constructor(
    private mongodbURI = "mongodb://admin:admin123@ds129776.mlab.com:29776/form_database",
    private options = {
      keepAlive: 300000,
      connectTimeoutMS: 30000,
    },
  ) {}
  static mgConnect(uri?: string, options?: any) {
    const Controller = new MgConfig(uri, options);
    mongoose.connect(Controller.mongodbURI, Controller.options);
  }

  static getTime(objectIdString: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId(objectIdString);
  }
}
