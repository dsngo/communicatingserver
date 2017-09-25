import MgConfig from "./controllers/MgConfig";
import Survey from "./models/Survey";

const data = [
    {
        title: "SURVEY1",
        content: { question1: "mot hai ba", question2: "ba bon nam" },
        author: { username: "Daniel" },
    },
    {
        title: "SURVEY2",
        content: { question1: "mot hai ba bon", question2: "ba bon nam sau" },
        author: { username: "Michelle" },
    },
    {
        title: "SURVEY3",
        content: { question1: "mot hai ba bon", question2: "ba bon nam sau" },
        author: { username: "Michelle" },
    },
    {
        title: "SURVEY4",
        content: { question1: "mot hai ba bon", question2: "ba bon nam sau" },
        author: { username: "Daniel" },
    },
];

const addSeeds = async () => {
    await Survey.remove({});
    data.forEach(async seed => {
        const newSurvey = await Survey.create(seed);
        console.log(newSurvey); // tslint:disable-line
    });
};

MgConfig.mgConnect();
addSeeds();
