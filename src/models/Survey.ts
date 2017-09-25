import { Schema, SchemaTypes, model } from "mongoose";
import MgConfig from "../controllers/MgConfig";

const SurveySchema = new Schema({
    title: String,
    author: {
        id: {
            type: SchemaTypes.ObjectId,
            ref: "User",
        },
        username: String,
    },
    content: SchemaTypes.Mixed,
});

const Survey = model("Survey", SurveySchema);

export default Survey;
