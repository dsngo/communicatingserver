import { Request, Response } from "express";
import { SurveyModel, ClientSurveyModel } from "../models/Survey";
import { Types } from "mongoose";

export default class SurveyController {
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

  static async getAllRecentForms(rq: Request, rs: Response) {
    try {
      const forms = await SurveyModel.find({});
      const strippedRecentForms = forms.map((e: any) => ({
        title: e.title,
        id: e._id,
        completed: e.completed,
        author: e.author.username,
        description: e.description,
        createdDate: e._id.getTimestamp(),        
      }));
      rs.status(200).send({
        code: 0,
        message: "Successfully Fetched Recent Forms",
        data: strippedRecentForms,
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async getAllSurveyForms(req: Request, res: Response) {
    try {
      const surveyForms = await SurveyModel.find({});
      res.status(200).send({
        code: 0,
        data: surveyForms,
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async createSurveyForm(req: Request, res: Response) {
    try {
      const resSurvey = await SurveyModel.create(req.body);
      res.status(200).send({
        code: 0,
        message: "Successful Create New Survey",
        data: resSurvey._id,
      });
    } catch (e) {
      res.status(500).send({
        code: 1,
        message: e.message,
      });
    }
  }

  static async getSurveyFormById(req: Request, res: Response) {
    try {
      const check = Types.ObjectId.isValid(req.params.formId);
      if (!check) {
        return res.status(200).send({
          code: 0,
          message: "Please Create A New Form",
          data: null,
        });
      }
      const form = await SurveyModel.findById(req.params.formId);
      if (!form) {
        res.status(200).send({
          code: -1,
          message: "Survey not found",
        });
      } else {
        res.status(200).send({
          code: 0,
          message: "Successfully Fetched Survey Form",
          data: form,
        });
      }
    } catch (e) {
      res.status(500).send({
        code: -4,
        message: e.data,
      });
    }
  }

  static async updateSurveyForm(req: Request, res: Response) {
    try {
      await SurveyModel.findByIdAndUpdate(req.params.formId, {
        ...req.body,
        lastUpdated: new Date().toISOString(),
      });
      res.status(200).send({
        code: 0,
        message: "Update Survey Form Success",
        data: req.params.formId,
      });
    } catch (e) {
      res.status(200).send({
        code: -1,
        message: e.message,
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
      const { clientSurveyId, ...clientSurveyData } = req.body;
      console.log(clientSurveyData);
      if (clientSurveyId) {
        await SurveyModel.findByIdAndUpdate(clientSurveyId, clientSurveyData);
        res.status(200).send({
          code: 0,
          message: "Update Client Survey Success",
        });
      } else {
        const responseCreated = await ClientSurveyModel.create(
          clientSurveyData,
        );
        res.status(200).send({
          code: 0,
          message: "Create Client Survey Success",
        });
      }
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async getClientSurveyFormById(req: Request, res: Response) {
    try {
      const clientSurveyId = req.params.clientSurveyId;
      const foundClientSurvey = await ClientSurveyModel.find({
        _id: clientSurveyId,
      });
      res.status(200).send({
        code: 0,
        data: foundClientSurvey,
        message: "Found Client Survey",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
}
