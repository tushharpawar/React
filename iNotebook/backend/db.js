// import notes:
// 1.download npm init 
// 2.npm i express
// 3.npm i mongoose
// 4.npm i -D nodemon (pls go to microsoft doc in the case of err)
// 5.nodemon ./index.js
// App will run 
// but for run the epress on browser 
// 6.node app.js
// 7.compelete.




const { default: mongoose } = require("mongoose")
const mongoURI="mongodb://localhost:27017/"

function connectToMongo(){
    try{
        mongoose.set("strictQuery",false);
        mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully:)");
    }
    catch(error){
        console.log(error);
        process.exit();
    }
}

module.exports = connectToMongo;
