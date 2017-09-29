import {Request, Response} from "express";
import SurveyModel from "../models/Survey";


export default class Survey {
    constructor() {

    }
    static async clearDB(req: Request, res: Response) {
        await SurveyModel.remove({});
        res.status(200).send({
            code: 0,
            message: "success"
        })
    }
    // static async initDB(req: Request, res: Response) {
    //     await SurveyModel.remove({});
    //     data.forEach(async seed => {
    //         const newSurvey = await SurveyModel.create(seed);
    //     });
    //     res.status(200).send({
    //         code: 0
    //     })
    // }

    static async getById(req: Request, res:Response) {
        try {
            let id = req.params.id;
            console.log('get by id');
            
            let survey = await SurveyModel.findById(id);
            if (!survey) {
                res.status(200).send({
                    code: -1,
                    message: "Survey not found"
                })
            }
            res.status(200).send({
                code: 0,
                message: "success",
                data: survey
            })  
        } catch (e) {
            res.status(200).send({
                code: -4,
                message: e.data
            })
        }
              
    }
    static async list(req: Request, res: Response) {
        let surveys = await SurveyModel.find({});
        res.status(200).send({
            code: 0,
            data: surveys
        });
    }

    static async saveSurvey(req: Request, res: Response) {
        let body = req.body;
        // const { title, description, author, content } = req.body;
        const { title, description, action } = req.body.info;
        const { content } = req.body;
        let survey = {
            title,
            description,
            content: JSON.stringify(content),
            author: "son",
            status: action
        }
        let resSurvey;
        if (!req.body.id) {
            let resSurvey = await SurveyModel.create(survey);
            
        }
        else {
            let resSurvey = await SurveyModel.update({ _id : req.body.id }, survey);
        }
        if (!resSurvey) {
            res.status(200).send({
                code: 1,
                message: "Error"
            })
        }
        else {
            res.status(200).send({
                code: 0,
                message: "Success",
                data: resSurvey
            });
        }
    }

    static async submitSurvey(req: Request, res: Response) {
        let body = req.body;
        // const { title, description, author, content } = req.body;
        const { title, description } = req.body.info;
        const { content } = req.body;
        let newSurvey = {
            title,
            description,
            content: JSON.stringify(content),
            author: "son",
        }
        let createdSurvey = await SurveyModel.create(newSurvey);
        if (!createdSurvey) {
            res.status(200).send({
                code: 1,
                message: "Error"
            })
        }
        else {
            res.status(200).send({
                code: 0,
                message: "SUCCESS",
                data: createdSurvey
            });
        }
    }
}
