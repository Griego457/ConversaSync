import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import portectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id", portectRoute, getMessages);
router.post("/send/:id", portectRoute, sendMessage);

export default router;
