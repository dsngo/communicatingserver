import PeakvnController from "../controllers/peakvnController";
// import { jsonParser } from "../middlewares/bodyParser";
const routePeakvn = require("express").Router();
const jsonParser = require("express").json();

// PRODUCTS
// READ
    // ALL
    routePeakvn.get("/product", PeakvnController.getAllProducts); // Get all responses from all surveys.
    // BY ID
    routePeakvn.get("/product/:productObjectId/get", PeakvnController.getProductByObjectId);
// CREATE
    routePeakvn.post("/product/add-new-product", jsonParser, PeakvnController.addNewProduct);
// UPDATE
    routePeakvn.put("/product/:productObjectId/update", jsonParser, PeakvnController.updateProductByObjectId);

// ORDERS
// READ
    // ALL
    routePeakvn.get("/order", PeakvnController.getAllOrder); // Get all responses from all surveys.
    // BY ID
    routePeakvn.get("/order/:orderObjectId/get", PeakvnController.getOrderByObjectId);
// CREATE
    routePeakvn.post("/order/add-new-order",jsonParser, PeakvnController.addNewOrder);
// UPDATE
    routePeakvn.put("/order/:orderObjectId/update", jsonParser, PeakvnController.updateOrderByObjectId);
// REMOVE
    routePeakvn.delete("/order/:orderObjectId/remove", PeakvnController.removeOrderById);

// USER
export default routePeakvn;
