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

  static async getSurveyFormById(req: Request, res: Response) {
    try {
      const formId = req.params.formId;
      const surveyForm = await SurveyModel.findById(formId);
      if (!surveyForm) {
        res.status(200).send({
          code: -1,
          message: "Survey not found",
        });
      }
      res.status(200).send({
        code: 0,
        message: "success",
        data: surveyForm,
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
      const allSurveyForms = await SurveyModel.find({});
      res.status(200).send({
        code: 0,
        data: allSurveyForms,
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async getAllRecentForms(rq: Request, rs: Response) {
    try {
      const strippedRecentForms = (await SurveyModel.find({})).map((e: any) => ({
        title: e.title,
        formId: e._id,
        completed: e.completed,
        createdDate: e._id.getTimestamp(),
      }));
      rs.status(200).send({
        code: 0,
        data: strippedRecentForms,
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async createSurveyForm(req: Request, res: Response) {
    const formData = req.body;
    const formId = req.params.formId;
    try {
      const resSurvey = await (formId ? SurveyModel.update({ _id: formId }, formData) : SurveyModel.create(formData));
      res.status(200).send({
        code: 0,
        message: "Success",
        data: resSurvey,
      });
    } catch (e) {
      res.status(500).send({
        code: 1,
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
      if (clientSurveyId) {
        await SurveyModel.findByIdAndUpdate(clientSurveyId, clientSurveyData);
        res.status(200).send({
          code: 0,
          message: "Update Client Survey Success",
        });
      } else {
        const responseCreated = await ClientSurveyModel.create(clientSurveyData);
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
      const foundClientSurvey = await ClientSurveyModel.find({ _id: clientSurveyId });
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
  static async updateSurveyForm(req: Request, res: Response) {
    try {
      const formId = req.params.formId;
      const surveyForm = req.body;
      console.log(surveyForm);
      await SurveyModel.findByIdAndUpdate(formId, surveyForm);
      res.status(200).send({
        code: 0,
        message: "Update Survey Form Success",
      });
    } catch (e) {
      res.status(200).send({
        code: -1,
        message: e.message,
      });
    }
  }
}
