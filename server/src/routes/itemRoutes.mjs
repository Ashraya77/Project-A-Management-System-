import express from "express";
import Item from "../models/item.mjs";

const router = express.Router();

// POST /api/items
router.post("/", async (req, res) => {
  try {
    const { title, type } = req.body;

    if (!title || !type) {
      return res.status(400).json({ error: "Title and Type are required" });
    }

    const newItem = new Item({ title, type });
    await newItem.save();

    res.status(201).json({ message: "Item created successfully", item: newItem });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

export default router;
