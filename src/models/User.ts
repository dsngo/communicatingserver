import { Schema, SchemaTypes, model } from "mongoose";

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
})

const UserModel = model("User", UserSchema)

export { UserModel }
