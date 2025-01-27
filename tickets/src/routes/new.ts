import express, { Request, Response } from "express";
import { requireAuth } from "@wchentickets/common";

const router = express.Router();

router.post("/api/tickets", requireAuth, (req: Request, res: Response) => {
  res.status(200).send({});
  return;
});

export { router as createTicketRouter };
