import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./user/infrastructure/route/user.route";
import connectDatabase from "./user/infrastructure/db/mongo";
import { PORT } from "./config";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);
connectDatabase().then();
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
