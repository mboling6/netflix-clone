//node.js and express.js setup

const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");

const userRoutes = require("./routes/UserRoutes");

const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://michaelrboling:DhNZafMIwTlpyZmP@cluster0.of1i81w.mongodb.net/?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected")
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));

//




