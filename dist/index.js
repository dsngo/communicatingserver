!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=10)}([function(e,t){e.exports=require("express")},function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=new n.Schema({productId:String,productCode:String,productGender:String,productCategory:String,productFeature:[String],productPrice:String,productName:String,productColor:String,listingDate:Number,location:String,productImg:[],productSize:[]}),o=n.model("Product",s);t.ProductModel=o;var u=new n.Schema({userName:String,userPassword:String,userEmail:String,userPhone:String,userAddress:String,userGender:String,userDOB:String,userOrders:[{type:n.Schema.Types.ObjectId,ref:"Order"}]}),d=n.model("User",u);t.UserModel=d;var c=new n.Schema({orderUser:{type:n.Schema.Types.ObjectId,ref:"User"},orderDate:String,orderId:String,orderName:String,orderAddress:String,orderPhone:String,orderTotalPrice:String,orderPaymentType:String,orderItems:[{itemId:Number,itemCode:String,itemName:String,itemGender:String,itemCategory:String,itemColor:String,itemSize:String,itemQuantity:Number,itemImg:String,itemPrice:String}],orderStatus:String}),i=n.model("Order",c);t.OrderModel=i},function(e,t){e.exports=require("tslib")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),s=r(2),o=function(){function e(){}return e.clearDB=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,s.ProductModel.remove({})];case 1:return r.sent(),t.status(200).send({code:0,message:"CLEAR ALL PRODUCTS AND ORDERS"}),[3,3];case 2:return e=r.sent(),t.status(500).send({code:-4,message:e.data}),[3,3];case 3:return[2]}})})},e.getAllProducts=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e,r;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s.ProductModel.find({})];case 1:return e=n.sent(),console.log(e.length),t.status(200).send({code:0,data:e}),[3,3];case 2:return r=n.sent(),t.status(500).send({code:-1,data:r.message}),[3,3];case 3:return[2]}})})},e.getProductByObjectId=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),r=e.params.productObjectId,[4,s.ProductModel.findById(r)];case 1:return o=n.sent(),t.status(200).send({code:0,data:o,message:"Found Product Item"}),[3,3];case 2:return u=n.sent(),t.status(500).send({code:-1,message:u.message}),[3,3];case 3:return[2]}})})},e.addNewProduct=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o;return n.__generator(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),r=n.__rest(e.body,[]),[4,s.ProductModel.create(r)];case 1:return u.sent(),t.status(200).send({code:0,message:"Add New Product Success"}),[3,3];case 2:return o=u.sent(),t.status(500).send({code:-1,message:o.message}),[3,3];case 3:return[2]}})})},e.updateProductByObjectId=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u;return n.__generator(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),r=e.params.productObjectId,o=n.__rest(e.body,[]),[4,s.ProductModel.findByIdAndUpdate(r,o)];case 1:return d.sent(),t.status(200).send({code:0,message:"Update Product Successful"}),[3,3];case 2:return u=d.sent(),t.status(500).send({code:-1,message:u.message}),[3,3];case 3:return[2]}})})},e.getAllOrder=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e,r;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s.OrderModel.find({})];case 1:return e=n.sent(),t.status(200).send({code:0,data:e,message:"Fetched All Orders"}),[3,3];case 2:return r=n.sent(),t.status(500).send({code:-1,data:r.message}),[3,3];case 3:return[2]}})})},e.getOrderByObjectId=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),r=e.params.orderObjectId,[4,s.OrderModel.findById(r)];case 1:return o=n.sent(),t.status(200).send({code:0,data:o,message:"Found User Order"}),[3,3];case 2:return u=n.sent(),t.status(500).send({code:-1,message:u.message}),[3,3];case 3:return[2]}})})},e.addNewOrder=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o;return n.__generator(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),r=n.__rest(e.body,[]),[4,s.OrderModel.create(r)];case 1:return u.sent(),t.status(200).send({code:0,message:"Create New Order Success"}),[3,3];case 2:return o=u.sent(),t.status(500).send({code:-1,message:o.message}),[3,3];case 3:return[2]}})})},e.updateOrderByObjectId=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u;return n.__generator(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),r=e.params.orderObjectId,o=n.__rest(e.body,[]),[4,s.OrderModel.findByIdAndUpdate(r,o)];case 1:return d.sent(),t.status(200).send({code:0,message:"Update Order Successful"}),[3,3];case 2:return u=d.sent(),t.status(500).send({code:-1,message:u.message}),[3,3];case 3:return[2]}})})},e.removeOrderById=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),r=e.params.orderObjectId,[4,s.OrderModel.findByIdAndRemove(r)];case 1:return n.sent(),t.status(200).send({code:0,message:"Remove Order Successful"}),[3,3];case 2:return o=n.sent(),t.status(500).send({code:-1,message:o.message}),[3,3];case 3:return[2]}})})},e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),s=r(0).Router(),o=r(0).json();s.get("/product",n.default.getAllProducts),s.get("/product/:productObjectId/get",n.default.getProductByObjectId),s.post("/product/add-new-product",o,n.default.addNewProduct),s.put("/product/:productObjectId/update",o,n.default.updateProductByObjectId),s.get("/order",n.default.getAllOrder),s.get("/order/:orderObjectId/get",n.default.getOrderByObjectId),s.post("/order/add-new-order",o,n.default.addNewOrder),s.put("/order/:orderObjectId/update",o,n.default.updateOrderByObjectId),s.delete("/order/:orderObjectId/remove",n.default.removeOrderById),t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.customCORS=function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=function(){function e(e,t){void 0===e&&(e="mongodb://peakvnadmin:peakvn123@ds147659.mlab.com:47659/peak-vn"),void 0===t&&(t={keepAlive:3e5,connectTimeoutMS:3e4}),this.mongodbURI=e,this.options=t}return e.mgConnect=function(t,r){var s=new e(t,r);n.connect(s.mongodbURI,s.options)},e.getTime=function(e){return n.Types.ObjectId(e)},e}();t.default=s},function(e,t){var r,n,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function d(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c,i=[],a=!1,l=-1;function f(){a&&c&&(a=!1,c.length?i=c.concat(i):l=-1,i.length&&g())}function g(){if(!a){var e=d(f);a=!0;for(var t=i.length;t;){for(c=i,i=[];++l<t;)c&&c[l].run();l=-1,t=i.length}c=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new m(e,t)),1!==i.length||a||d(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(7),o=r(6),u=r(5),d=e.env.PORT||3e3,c=e.env.IP,i=n();s.default.mgConnect(),i.use(o.customCORS),i.use("/peak-vn/ecsite",u.default),i.get("/",function(e,t){return t.send("This is a node JS server for api fetching. Nothing too interesting here. If you are interest go to fb.com/DanielDNgo. PS: Im coool!")}),console.log(e.env.PORT),i.listen(d,c,function(){return console.log("Server is listening... "+(c||"localhost")+":"+d)})}).call(this,r(8))},function(e,t,r){e.exports=r(9)}]);