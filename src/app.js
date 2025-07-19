import express from "express"
import { getEnv } from "./utils/getEnv.js";
import { initDb } from "./db/initDb.js";

const app = express();

const PORT = getEnv("PORT", 3000);

(async () => {
  await initDb();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
