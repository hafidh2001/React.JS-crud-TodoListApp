// import library
import express from "express";
import cors from "cors";

// import database
import db from "./config/database.js";

// import routes
import todoRoute from "./routes/todoRoute.js";

// Initializing variable express and port number
const app = express();
const portNumber = 5000;

// asynchronous arrow function expression checkConnection
const checkConnection = async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error(`Database not connected ${error}`);
  }
};
// call function
checkConnection();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.json());

// calling route
app.use("/todoApps", todoRoute);

// declare route
app.listen(portNumber, () =>
  console.log(`Server running at port ${portNumber}`)
);
