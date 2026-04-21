import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/api", (req, res) => {
  res.json({ message: "Tanvi Portfolio API is running!" });
});

// Routes
app.use("/api/contact", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start Server First
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// MongoDB Connection (optional - won't crash server if fails)
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ MongoDB Connected Successfully!");
    })
    .catch((error) => {
      console.error("⚠️  MongoDB Connection Error:", error.message);
      console.log(
        "⚠️  Server running without database. Contact form won't work.",
      );
    });
} else {
  console.log("⚠️  MONGO_URI not set in .env");
}
