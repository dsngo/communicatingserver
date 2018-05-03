import { ProductModel, OrderModel, UserModel } from "./models/Peakvn";
import MgConfig from "./controllers/MgConfig";

const { fakeOrders, productList } = require("./fakedata.json");

const user = {
  _id: "5addaefedd8a213de0d0eaf7",
  userName: "Daniel",
  userPassword: "1234",
  userEmail: "123@abc.com",
  userPhone: "901989932",
  userAddress: "1234 Street",
  userGender: "male",
  userDOB: "01/21/2000",
  userOrders: [],
};

const addSeeds = async () => {
  await Promise.all([
    ProductModel.remove({}),
    OrderModel.remove({}),
    UserModel.remove({}),
  ]);
  console.log("done remove!");
  const userDB = await UserModel.create(user);
  console.log(userDB);
  await Promise.all([
    ...fakeOrders.map((e: any) =>
      OrderModel.create({ ...e, orderUser: userDB._id }),
    ),
    ...productList.map((p: any) => ProductModel.create(p)),
  ]);
  console.log("done create!");
};
MgConfig.mgConnect();
addSeeds();
