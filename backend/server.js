const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const genRoutes = require("./routes/generate");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/instacap");

app.use("/api/auth", authRoutes);
app.use("/api/generate", genRoutes);

app.listen(5000, () => console.log("Server running on 5000"));

