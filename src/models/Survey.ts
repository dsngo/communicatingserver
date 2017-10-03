import { Schema, SchemaTypes, model } from "mongoose";

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
    completed: Boolean, // true: To enable client survey form.
});

const SurveyModel = model("Survey", SurveySchema);

const ClientSurveySchema = new Schema({
    author: {
        id: {
            type: SchemaTypes.ObjectId,
            ref: "User",
        },
        username: String,
    },
    content: SchemaTypes.Mixed,
    completed: Boolean, // true/false: false for editing, true to submit form
});

const ClientSurveyModel = model("ClientSurvey", ClientSurveySchema);

export { ClientSurveyModel, SurveyModel };
