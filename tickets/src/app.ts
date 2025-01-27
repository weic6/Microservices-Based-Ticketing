import express from "express";
import "express-async-errors";
// import { json } from "body-parser";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@wchentickets/common";
import { createTicketRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
// app.use(json());
app.use(bodyParser.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", //if true, it require https connection
  })
);

app.use(createTicketRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
