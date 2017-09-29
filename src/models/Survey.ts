import { Schema, SchemaTypes, model } from "mongoose";
import MgConfig from "../controllers/MgConfig";

const SurveySchema = new Schema({
    title: String,
    description: String,
    author: {
        id: {
            type: SchemaTypes.ObjectId,
            ref: "User",
        },
        username: String,
    },
    content: SchemaTypes.Mixed,
    status: String
});

const SurveyModel = model("Survey", SurveySchema);

export default SurveyModel;
