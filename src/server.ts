import express from "express";
import router from "./routes";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/* -----------------------------
   GLOBAL MIDDLEWARE
------------------------------ */

// Security headers
app.use(helmet());

// Logging
app.use(morgan("dev"));
app.use(express.static("public"));

// Parse JSON + form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compression for faster responses
app.use(compression());

// CORS (allow frontend)
app.use(cors());

// Rate limiting (protect from spam)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: "Too many requests, please try again later."
  })
);

// Trust proxy (for deployments like Render, Vercel, Nginx)
app.set("trust proxy", 1);

// Static files (public folder)
app.use(express.static("public"));

/* -----------------------------
   ROUTES
------------------------------ */

app.use(router);

/* -----------------------------
   404 HANDLER
------------------------------ */

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Not Found</h1>
    <p>The page you’re looking for doesn’t exist.</p>
  `);
});

/* -----------------------------
   ERROR HANDLER
------------------------------ */

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Server Error:", err);
  res.status(500).send(`
    <h1>500 - Server Error</h1>
    <p>Something went wrong on our end.</p>
  `);
});

/* -----------------------------
   START SERVER
------------------------------ */

const server = app.listen(port, () => {
  console.log("=====================================");
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log("=====================================");
});

/* -----------------------------
   GRACEFUL SHUTDOWN
------------------------------ */

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
