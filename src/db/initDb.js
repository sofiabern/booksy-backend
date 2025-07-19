import { sequelize } from "./sequelize.js";

export async function initDb() {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");

    await sequelize.sync();
    console.log("Models synced!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
