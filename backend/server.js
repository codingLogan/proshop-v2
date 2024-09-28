import express from "express";
import dontenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dontenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
