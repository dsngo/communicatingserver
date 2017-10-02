import {Request, Response} from "express";
import { SurveyModel, ClientSurveyModel} from "../models/Survey";


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
            const id = req.params.id;
            const survey = await SurveyModel.findById(id);
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
        const surveys = await SurveyModel.find({});
        res.status(200).send({
            code: 0,
            data: surveys
        });
    }

    static async saveSurvey(req: Request, res: Response) {
        const { title, description, action } = req.body.info;
        const { content } = req.body;
        const survey = {
            title,
            description,
            content: JSON.stringify(content),
            author: "son",
            status: action
        }
        let resSurvey;
        if (!req.body.id) {
            resSurvey = await SurveyModel.create(survey);
        }
        else {
            resSurvey = await SurveyModel.update({ _id : req.body.id }, survey);
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
        const { title, description } = req.body.info;
        const { content } = req.body;
        const newSurvey = {
            title,
            description,
            content: JSON.stringify(content),
            author: "son",
        }
        const createdSurvey = await SurveyModel.create(newSurvey);
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

    static async getAllResponse(req: Request, res: Response) {
        try {
            const surveys = await ClientSurveyModel.find({});
            res.status(200).send({
                code: 0,
                data: surveys
            })
        } catch (e) {
            
        }
    }

    static async clearAllResponse(req: Request, res: Response) {
        try {
            await ClientSurveyModel.remove({});
            res.status(200).send({
                code: 0,
                message: "Success"
            })
        } catch (e) {
            res.status(200).send({
                code: -1,
                message: e.message
            })
        }
    }
    
    static async createResponse(req: Request, res: Response) {
        try {
            const response = req.body.question;
            const survey_id = req.body.survey_id;
            let survey: any;
            survey = await SurveyModel.findById(survey_id);
            const newResponse = new ClientSurveyModel({
                content: JSON.stringify(response),
                status: "active",
                survey_id: survey._id 
            }) ;
            const responseCreated = await ClientSurveyModel.create(newResponse);
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
        const id = req.params.id;
        const surveys = await ClientSurveyModel.find({ survey_id: id});
        res.status(200).send({
            code: 0,
            data: surveys
        })
    }
}