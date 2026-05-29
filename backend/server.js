const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});