import MgConfig from "./controllers/MgConfig";
import { SurveyModel } from "./models/Survey";
import {
    ILongQuestion,
    IShortQuestion,
    IMultipleChoices,
    IMultipleDropdown,
    ICheckBox,
    IDropdown,
    IPriorityQuestion,
} from "./customTypes";


/** questionTypes
 * "longQuestion" = Long question
 * "shortQuestion" = Short question
 * "checkbox" = Checkbox
 * "multipleChoices" = Multiple choices
 * "dropdown" = Dropdown
 * "multipleDropdown" = Multiple Dropdown
 * "priorityQuestion" = Question with priority
 */

// interface IData {
//     title: string;
//     contents: (
//         | ILongQuestion
//         | IShortQuestion
//         | IMultipleChoices
//         | IMultipleDropdown
//         | ICheckBox
//         | IDropdown
//         | IPriorityQuestion)[];
//     author: { username: string };
// }

// const data = [
//     {
//         title: "SURVEY2",
//         contents: [
//             { questionType: "longQuestion", question: "mot hai ba?", answers: ["ba bon nam"] },
//             { questionType: "shortQuestion", question: "mot hai ba?", answers: ["ba bon nam"] },
//             {
//                 questionType: "checkbox",
//                 question: "mot hai ba?",
//                 answers: ["ba bon nam", "bon nam sau", "bay tam chin", "nam sau bay", "SAU BAY TAM", "BAY BAY ABY"],
//             },
//             {
//                 questionType: "multipleChoices",
//                 question: "mot hai ba?",
//                 answers: [
//                     { correct: false, answer: "false" },
//                     { correct: true, answer: "true" },
//                     { correct: false, answer: "false" },
//                     { correct: false, answer: "false" },
//                     { correct: false, answer: "false" },
//                 ],
//             },
//             {
//                 questionType: "multipleDropdown",
//                 questions: [
//                     { id: 1, question: "main question" },
//                     { id: 2, question: "additional question" },
//                     { id: 3, question: "additional question" },
//                 ],
//                 answers: [
//                     {
//                         answerId: 1,
//                         contents: [
//                             { id: 1, answer: ["answer 1"] },
//                             { id: 2, answer: ["option 1", "option 2", "option 3"] },
//                             { id: 3, answer: ["option 1", "option 2", "option 3"] },
//                         ],
//                     },
//                     {
//                         answerId: 2,
//                         contents: [
//                             { id: 1, answer: ["answer 2"] },
//                             { id: 2, answer: ["option 1", "option 2", "option 3"] },
//                             { id: 3, answer: ["option 1", "option 2", "option 3"] },
//                         ],
//                     },
//                 ],
//             },
//             {
//                 questionType: "priorityQuestion",
//                 question: "mot hai ba?",
//                 answers: [{ priority: 1, answer: "mot" }, { priority: 2, answer: "hai" }, { priority: 3, answer: "ba" }],
//                 additionalContents: [
//                     {
//                         description: "description 1",
//                         contents: [
//                             { question: "question 1", answer: "answer 1" },
//                             { question: "question 2", answer: "answer 2" },
//                             { question: "question 3", answer: "answer 3" },
//                         ],
//                     },
//                     {
//                         description: "description 2",
//                         contents: [
//                             { question: "question 1", answer: "answer 1" },
//                             { question: "question 2", answer: "answer 2" },
//                             { question: "question 3", answer: "answer 3" },
//                         ],
//                     },
//                 ],
//             },
//         ],
//         author: { username: "Daniel" },
//     },
// ];

// const addSeeds = async () => {
//     await SurveyModel.remove({});
//     data.forEach(async seed => {
//         const newSurvey = await SurveyModel.create(seed);
//         console.log(newSurvey); // tslint:disable-line
//     });
// };

MgConfig.mgConnect();
// addSeeds();

const test = async () => {
    try {
        const a = (await SurveyModel.find()).map((e:any)=> e._id.getTimestamp())
        return console.log(a)
    } catch (e) {
        console.log(e)
    }
}
test();
