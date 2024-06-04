import express, { Request, Response } from "express";
import { config } from "./config";
import { Cashe } from "./redis";

const app = express();
const db = new Cashe();
db.connectTo();

app.get("/check_health", (req: Request, res: Response) => {
  return res.status(200).send("Server working 🚀🚀🚀");
});

app.get("/data", async (req: Request, res: Response) => {
  await db.storeCashe("names", `{name : "zakaria" , age : 25}`);
  return res.status(200).send("ok");
});

app.get("/data/cashe", async (req: Request, res: Response) => {
  await db.getCashedData("names");
  return res.status(200).send("ok");
});

app.listen(config.APP_PORT, () =>
  console.log(`Server runs on port ${config.APP_PORT} 🚀🚀`)
);
