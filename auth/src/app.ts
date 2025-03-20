import express from "express";
import "express-async-errors";
// import { json } from "body-parser";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler, NotFoundError } from "@wchentickets/common";

const app = express();
app.set("trust proxy", true); // traffic is proxy to our app through ingress nginx, by default express does not trust this https connection. This line let express to trust it
// app.use(json());
app.use(bodyParser.json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== "test", //if true, it require https connection
    secure: false,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

// without package express-async-errors
// muse use the following code
// app.all("*", async (req, res, next) => {
//   next(new NotFoundError());
// });
// OR
// equivalent to
// app.all("*", (req, res) => {
//   throw new NotFoundError();
// });
app.use(errorHandler);

export { app };
