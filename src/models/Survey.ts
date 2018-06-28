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
  sectionBreaks: [SchemaTypes.Mixed],
  contents: [SchemaTypes.Mixed],
  isDeleted: Boolean,
  completed: Boolean, // true: To enable client survey form.
  lastUpdated: String,
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
  title: String,
  description: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  gender: String,

  refId: String,
  contents: [SchemaTypes.Mixed],
  completed: Boolean, // true/false: false for editing, true to submit form
  lastUpdated: String,
});

const ClientSurveyModel = model("ClientSurvey", ClientSurveySchema);

export { ClientSurveyModel, SurveyModel };
