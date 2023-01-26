import express from "express";
import cors from "cors";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", async (req, res) => res.send("OK!"));

export default app;
