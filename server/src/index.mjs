import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.mjs";
import itemRoutes from "./routes/itemRoutes.mjs";
import cors from "cors"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())
// Connect DB
await connectDB();

// Routes
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => res.send("API Running with ES Modules"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
