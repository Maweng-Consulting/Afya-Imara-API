const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/afyadb";

const connect_database = async () => {
  await mongoose
    .connect(connectionString)
    .then(() => console.log("Database Connected Successfully!!"))
    .catch((error) => console.log({ error: error.message }));
};


module.exports = {
    connect_database
}