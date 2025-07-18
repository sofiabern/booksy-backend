import express from "express"
import dotenv from "dotenv"
import { getEnv } from "./utils/getEnv.js";

dotenv.config();

const app = express();

const PORT = getEnv("PORT", 3000);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});