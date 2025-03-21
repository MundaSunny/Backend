import express from "express";
import {config} from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
config({path:"./config.env"});


app.use(
    cors({
origin:[process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
methods: ["GET" , "POST", "PUT", "DELETE"],
    credentials: true,
})
);

app.use(cookieParser());

export default app;