import express, { Request, Response } from "express";
import cors from "cors";
import db from "./config/db";
import { config } from "process";

const app = express();
app.use(cors());
app.use(express.json());

// Enable CORS for all domains (or specify specific domains)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://nicksonni-lbrp3c9aj-nicksonchengs-projects.vercel.app",
    ], // Allow only this domain
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.get("/api/info", async (req: Request, res: Response) => {
  console.log("got request from fontend");
  try {
    // const [results]: any = await db.query(
    //   "SELECT * FROM personal_info LIMIT 1"
    // );
    // res.json(results[0]);
    res.json({
      host: "localhost",
      user: "Nickson",
      description: "hello nickson",
      password: "your_password",
      database: "personal_website",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
