const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const coursesRoutes = require("./routes/coursesRoutes");
const userRoutes = require("./routes/userRoutes");
const requestedBLogRoutes = require("./routes/requestedBLogRoutes");
const blogsroutes = require("./routes/blogsroutes")

connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use("/courses", coursesRoutes);
app.use("/blogs", blogsroutes);
app.use("/requestedblog", requestedBLogRoutes);
app.use("/auth", userRoutes);
app.use(errorHandler);



app.listen(port, () => {
    console.log(`server is running on PORT ${port}`);
});