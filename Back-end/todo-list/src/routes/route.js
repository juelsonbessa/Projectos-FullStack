import express from "express";
import {
  listTaskFront,
  insertTaskFront,
  delTaskFront,
  editTaskFront,
  detailTaskFront,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/list-tasks", listTaskFront);
router.post("/insert-task", insertTaskFront);
router.delete("/del-task/:id", delTaskFront);
router.put("/edit-task", editTaskFront);
router.get("/details-task/:id", detailTaskFront);

export default router;
