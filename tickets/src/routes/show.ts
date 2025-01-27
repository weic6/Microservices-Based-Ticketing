import express, { Request, Response } from "express";
import { NotFoundError } from "@wchentickets/common";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundError();
  }
  res.send(ticket); // default status code is 200 when leaving it off
});

export { router as showTicketRouter };
