import { Schema, SchemaTypes, model } from "mongoose";

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
})

export default model("User", UserSchema)
