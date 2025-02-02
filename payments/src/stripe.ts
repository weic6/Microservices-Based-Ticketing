import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";

// Load the .env file only if not running in Kubernetes
if (process.env.NODE_ENV !== "kubernetes") {
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

export const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: "2025-01-27.acacia",
});
