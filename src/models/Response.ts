import { Schema, SchemaTypes, model } from "mongoose";

const ResponseSchema = new Schema({
    survey_id: {
        type: SchemaTypes.ObjectId,
        ref: "Survey",
    },
    content: SchemaTypes.Mixed,
    status: String
});

const ResponseModel = model("Response", ResponseSchema);

export default ResponseModel;
