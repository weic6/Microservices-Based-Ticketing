import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("Starting Auth service...");
  if (!process.env.JWT_KEY) {
    //process.env.JWT_KEY defined in k8s depl file auth-depl.yaml
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

start();
