import * as mongoose from "mongoose";

export default class MgConfig {
  constructor(
    private mongodbURI = "mongodb://peakvnadmin:peakvn123@ds147659.mlab.com:47659/peak-vn",
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
