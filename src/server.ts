import express, { Request, Response } from "express";
import { config } from "./config";
import productController from "./controllers/Product.controller";
import { Cashe } from "./redis";

const app = express();
app.use(express.json());
const db = new Cashe();
db.connectTo();
export { db };

app.use("/api/", productController);

app.get("/check_health", (req: Request, res: Response) => {
  return res.status(200).send("Server working 🚀🚀🚀");
});

app.listen(config.APP_PORT, () =>
  console.log(`Server runs on port ${config.APP_PORT} 🚀🚀`)
);
