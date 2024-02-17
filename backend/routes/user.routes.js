import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  getUserForSidebar,
  getUserByName,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSidebar);
router.post("/searchByName", protectRoute, getUserByName);

export default router;
