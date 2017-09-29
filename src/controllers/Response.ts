import { Request, Response } from "express";
import ResponseModel  from "../models/Response";
import { Schema, SchemaTypes, Types, model } from "mongoose";

export default class Responses {
    constructor() {

    }
    static async getAllResponse(req: Request, res: Response) {
        try {
            let surveys = await ResponseModel.find({});
            res.status(200).send({
                code: 0,
                data: surveys
            })
        } catch (e) {
            
        }
    }
    static async createResponse(req: Request, res: Response) {
        try {
            let response = req.body.question;
            let survey_id = req.body.survey_id;
            let newResponse = new ResponseModel({
                survey_id: survey_id,
                content: JSON.stringify(response),
                status: "active"
            }) ;
            console.log(newResponse);
            
            let responseCreated = await ResponseModel.create(newResponse);
            if (!responseCreated) res.status(200).send({
                code: 1,
                message: "Error"
            });
            else res.status(200).send({
                code: 0,
                message: "Success"
            })
        } catch (e) {
            res.status(200).send({
                code: 1,
                message: e.message
            })
        }
    }

    static async getBySurvey(req: Request, res: Response) {
        let id = req.params.id;
        console.log(id);
        
        let surveys = await ResponseModel.find({ survey_id: id});
        res.status(200).send({
            code: 0,
            data: surveys
        })
    }
} 