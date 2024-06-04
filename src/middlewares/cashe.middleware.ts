import { NextFunction, Request, Response } from "express";
import { db } from "../server";

export const cashedOffers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await db.getCashedData("daily-offers");
  if (data) {
    console.log("inside cashe middle");
    return res.status(200).send(data);
  } else {
    next();
  }
};
