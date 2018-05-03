import PeakvnController from "../controllers/peakvnController";
// import { jsonParser } from "../middlewares/bodyParser";
const routeClientSurvey = require("express").Router();
const jsonParser = require("express").json();

// PRODUCTS
// READ
    // ALL
    routeClientSurvey.get("/product", PeakvnController.getAllProducts); // Get all responses from all surveys.
    // BY ID
    routeClientSurvey.get("/product/:productObjectId/get", PeakvnController.getProductByObjectId);
// CREATE
    routeClientSurvey.post("/product/add-new-product", jsonParser, PeakvnController.addNewProduct);
// UPDATE
    routeClientSurvey.put("/product/:productObjectId/update", jsonParser, PeakvnController.updateProductByObjectId);

// ORDERS
// READ
    // ALL
    routeClientSurvey.get("/order", PeakvnController.getAllOrder); // Get all responses from all surveys.
    // BY ID
    routeClientSurvey.get("/order/:orderObjectId/get", PeakvnController.getOrderByObjectId);
// CREATE
    routeClientSurvey.post("/order/add-new-order",jsonParser, PeakvnController.addNewOrder);
// UPDATE
    routeClientSurvey.put("/order/:orderObjectId/update", jsonParser, PeakvnController.updateOrderByObjectId);
// REMOVE
    routeClientSurvey.delete("/order/:orderObjectId/remove", PeakvnController.removeOrderById);

// USER
export default routeClientSurvey;
