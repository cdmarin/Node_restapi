import { Router } from "express";
import { pingIndex } from "../controllers/index.controller.js";
const router = Router();

router.get("/ping", pingIndex);

export default router;