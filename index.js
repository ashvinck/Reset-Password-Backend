import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import cors from "cors";
import authRouter from "./Routes/auth.router.js";

const app = express();
app.use(express.json());
app.use(cors())


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use("/auth", authRouter);

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect(); //pressing call button
    console.log("MongoDB is connected!");
    return client;
}
export const client = await createConnection();

app.get("/", function (request, response) {
    response.send("🙋‍♂️, Welcome to Reset-Password Feature");
})


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨ `)) 