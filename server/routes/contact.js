import express from "express";
import {
  submitContact,
  getAllContacts,
  getContact,
} from "../controllers/contactController.js";

const router = express.Router();

// POST: Submit contact form
router.post("/", submitContact);

// GET: All contacts
router.get("/", getAllContacts);

// GET: Single contact by ID
router.get("/:id", getContact);

export default router;
