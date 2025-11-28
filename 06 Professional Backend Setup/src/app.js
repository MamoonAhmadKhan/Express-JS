import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: true
}));
app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({
    extended: true,
    limit: "10kb"
}));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import userRouter from "./routes/user.route.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;