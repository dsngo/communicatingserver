import MgConfig from "./controllers/MgConfig";
import { SurveyModel } from "./models/Survey";

/** questionTypes
 * 1 = Long question
 * 2 = Short question
 * 3 = Checkbox
 * 4 = Multiple choices
 * 5 = Dropdown
 */

const data = [
    {
        title: "SURVEY2",
        content: [
            { questionType: 1, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 2, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 3, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 4, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 5, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
        ],
        author: { username: "Daniel" },
    },
    {
        title: "SURVEY2",
        content: [
            { questionType: 1, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 2, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 3, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 4, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 5, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
        ],
        author: { username: "Daniel" },
    },
    {
        title: "SURVEY3",
        content: [
            { questionType: 1, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 2, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 3, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 4, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 5, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
        ],
        author: { username: "Daniel" },
    },
    {
        title: "SURVEY4",
        content: [
            { questionType: 1, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 2, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 3, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 4, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 5, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
        ],
        author: { username: "Daniel" },
    },
    {
        title: "SURVEY5",
        content: [
            { questionType: 1, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 2, question: "mot hai ba?", answer: ["ba bon nam"] },
            { questionType: 3, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 4, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
            { questionType: 5, question: "mot hai ba?", answer: ["ba bon nam", "bon nam sau", "bay tam chin", " nam sau bay"] },
        ],
        author: { username: "Daniel" },
    },
];

const addSeeds = async () => {
    await SurveyModel.remove({});
    data.forEach(async seed => {
        const newSurvey = await SurveyModel.create(seed);
        console.log(newSurvey); // tslint:disable-line
    });
};

MgConfig.mgConnect();
addSeeds();
