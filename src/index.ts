require("dotenv").config();
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import ScheduleService from "./schedule.service";
import authMiddleware from "./auth.middleware";

mongoose.connect(process.env.MONGO_URL!);
const app = express();

app.use(bodyParser.json());
app.use(authMiddleware)

app.get("/", (_req, res) => {
	res.send("Hello World!");
});
app.get("/ping", (_req, res) => {
    res.send("pong");
});
app.post("/create", (req, res) => {
    ScheduleService.createSchedule(req.body);
    res.send("ok");
});
app.post("/update", (req, res) => {
    ScheduleService.updateSchedule(req.body);
    res.send("ok");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
