import { Router } from "express";
import { getEmployees, getEmployeeId, postEmployees, putEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeId);

router.post("/employees", postEmployees);

router.delete("/employees/:id", deleteEmployees);

router.patch("/employees/:id", putEmployees);


export default router;