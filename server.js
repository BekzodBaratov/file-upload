require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const app = express();

const fileRouter = require("./routes/fileRouter");
const showRouter = require("./routes/showRouter");
const downloadRouter = require("./routes/downloadRouter");

db();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/files", fileRouter);
app.use("/files", showRouter);
app.use("/download", downloadRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listen on port ${port}`));
