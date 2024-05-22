const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5000
const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));


// base route
app.use("/", (req, res) => {
    res.send({ message: "Server is up and running" }).status(200);
});


app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`);
});