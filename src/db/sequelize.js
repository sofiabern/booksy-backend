import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";
import { getEnv } from "../utils/getEnv.js";


export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: getEnv("DB_NAME", "booksy"),
  user: getEnv("DB_USER", "postgres"),
  password: getEnv("DB_PASSWORD"),
  host: getEnv("DB_HOST", "localhost"),
  port: getEnv("DB_PORT", 5433),
  clientMinMessages: "notice",
});
