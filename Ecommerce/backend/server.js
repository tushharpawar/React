const app = require("./app");
const connectDatabase = require("./db/Database");

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server for handling uncaught exception!`);
});

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//connect database
connectDatabase();

//create server

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on localhost:${process.env.PORT}`);
});

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server for unhandled promise rejection!`);

  server.close(() => {
    process.exit(1);
  });
});
