const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();


// Middlewares
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));



// Database Configuration
const { connect_database } = require("./db/connect_db");
connect_database();
// base route
app.get("/", (req, res) => {
    res.send({ message: "Server is up and running" }).status(200);
});


// Custom Routes
const authRoutes = require("./routes/auth");
const doctorRoutes = require("./routes/doctors");

// 
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);

// starting the server
app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`);
});