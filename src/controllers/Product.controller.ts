import { Router, Request, Response } from "express";
import { cashedOffers } from "../middlewares/cashe.middleware";
import { db } from "../server";

const route = Router();

const mockOffers = [
  {
    product_Id: 1508,
    offer_Id: 12,
    date: Date.now(),
  },
  {
    product_Id: 545,
    offer_Id: 15,
    date: Date.now(),
  },
];

route.get(
  "/daily-offers",
  cashedOffers,
  async (req: Request, res: Response) => {
    //select from db
    console.log("inside un cashe...!");
    await db.storeCashedData("daily-offers", JSON.stringify(mockOffers));
    return res.status(200).send(mockOffers);
  }
);

export default route;
