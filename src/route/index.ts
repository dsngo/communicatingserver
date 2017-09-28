import MgController from "../controllers/MgConfig";
import Survey from "../controllers/Survey";
let express = require('express');
let router = express.Router();

router.get("/initDB", Survey.initDB);
router.get("/survey", Survey.list);
router.post("/survey/create", Survey.create);
router.get("/survey/clearDB", Survey.clearDB);
router.get("/survey/get/:id", Survey.getById);

router.get("/test", function(req:any, res:any) {
    res.json({
        message: "api is running"
    })
});

module.exports = router;