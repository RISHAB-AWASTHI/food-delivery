const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0/Login");
//const foodItemsDatabase = mongoose.connect("mongodb://0.0.0.0/FoodItems");

/*const connect =  () => {
   mongoose.connect("mongodb://0.0.0.0/Login");
   //mongoose.connect("mongodb://0.0.0.0/FoodItems");
};*/

connect.then(() => {
    console.log("Database connected successfully");

})
.catch(() => {
    console.log("Database not connected");
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required:true
    },
    email: {
      type:String,
      required:true
    }
});
const collection = new mongoose.model("users", LoginSchema);




/*const FoodItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  });
  
  const Food = new mongoose.model("FoodItem", FoodItemSchema);*/


module.exports = {
    collection,
    //Food
  };