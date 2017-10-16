import { Request, Response } from "express";
import { SurveyModel, ClientSurveyModel } from "../models/Survey";

export default class SurveyController {
    constructor() {}
    static async clearDB(req: Request, res: Response) {
        try {
            await SurveyModel.remove({});
            res.status(200).send({
                code: 0,
                message: "success",
            });
        } catch (e) {
            res.status(500).send({
                code: -4,
                message: e.data,
            });
        }
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

    static async getSurveyFormById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const survey = await SurveyModel.findById(id);
            if (!survey) {
                res.status(200).send({
                    code: -1,
                    message: "Survey not found",
                });
            }
            res.status(200).send({
                code: 0,
                message: "success",
                data: survey,
            });
        } catch (e) {
            res.status(500).send({
                code: -4,
                message: e.data,
            });
        }
    }
    static async getAllSurveyForms(req: Request, res: Response) {
        try {
            const surveys = await SurveyModel.find({});
            res.status(200).send({
                code: 0,
                data: surveys,
            });
        } catch (e) {
            res.status(500).send({
                code: -1,
                message: e.message,
            });
        }
    }

    static async getSurveyFormsIndexPage (req: Request, res: Response) {
        try {
            const surveys = await SurveyModel.find({}).limit(3);
            res.status(200).send({
                code: 0,
                data: surveys
            })
        } catch (e) {
            res.status(200).send({
                code: -4,
                error: e.message
            })
        }
        
    }

    static async createSurveyForm(req: Request, res: Response) {
        const { title, description, action } = req.body.info;
        const { content } = req.body;
        const survey = {
            title,
            description,
            content: JSON.stringify(content),
            author: "son",
            completed: action === "save" ? false : true,
        };
        let resSurvey;
        if (!req.body.id) {
            resSurvey = await SurveyModel.create(survey);
        } else {
            resSurvey = await SurveyModel.update({ _id: req.body.id }, survey);
        }
        if (!resSurvey) {
            res.status(200).send({
                code: 1,
                message: "Error",
            });
        } else {
            res.status(200).send({
                code: 0,
                message: "Success",
                data: resSurvey,
            });
        }
    }

    // TEST
    static async getAllSubmittedClientSurveyForms(req: Request, res: Response) {
        try {
            const surveys = await ClientSurveyModel.find({});
            res.status(200).send({
                code: 0,
                data: surveys,
            });
        } catch (e) {
            res.status(500).send({
                code: -1,
                data: e.message,
            });
        }
    }

    static async clearAllClientForms(req: Request, res: Response) {
        try {
            await ClientSurveyModel.remove({});
            res.status(200).send({
                code: 0,
                message: "Success",
            });
        } catch (e) {
            res.status(500).send({
                code: -1,
                message: e.message,
            });
        }
    }
    // END OF TEST
    static async submitClientSurvey(req: Request, res: Response) {
        try {
            const response = req.body.question;
            const survey_id = req.body.survey_id;
            let survey: any;
            survey = await SurveyModel.findById(survey_id);
            const newResponse = new ClientSurveyModel({
                content: JSON.stringify(response),
                completed: true,
                survey_id: survey._id,
            });
            const responseCreated = await ClientSurveyModel.create(newResponse);
            if (!responseCreated)
                res.status(200).send({
                    code: 1,
                    message: "Error",
                });
            else
                res.status(200).send({
                    code: 0,
                    message: "Success",
                });
        } catch (e) {
            res.status(500).send({
                code: -1,
                message: e.message,
            });
        }
    }

    static async getClientSurveyFormById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const surveys = await ClientSurveyModel.find({ survey_id: id });
            res.status(200).send({
                code: 0,
                data: surveys,
            });
        } catch (e) {
            res.status(500).send({
                code: -1,
                message: e.message,
            });
        }
    }
    static async updateClientSurvey(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const clientSurvey = req.params.body;
            console.log(clientSurvey);
            
            const updatedClientSurvey = await ClientSurveyModel.update({ _id : id }, clientSurvey);
            if (!updatedClientSurvey) res.status(200).send({
                code: 1,
                message: "Error"
            })
            else {
                res.status(200).send({
                    code: 0,
                    data: updatedClientSurvey
                })
            }
        } catch (e) {
            res.status(200).send({
                code: -1,
                message: e.message
            })
        }
    }
}
