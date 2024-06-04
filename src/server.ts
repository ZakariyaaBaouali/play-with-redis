import express, { Request, Response } from "express";
import { config } from "./config";

const app = express();

app.get("/check_health", (req: Request, res: Response) => {
  return res.status(200).send("Server working 🚀🚀🚀");
});

app.listen(config.APP_PORT, () =>
  console.log(`Server runs on port ${config.APP_PORT} 🚀🚀`)
);
