import express from "express";
import { jwtVerify, adminOnly } from "../middlewares/jwtAuths.js";
import { deleteUser, allUsers } from "../controllers/editUsers.js";
import {
  allProjects,
  searchProject,
} from "../controllers/allProjectsHandlers.js";

const router = express.Router();

router.get("/users", jwtVerify, adminOnly, allUsers);
router.get("/projects", jwtVerify, adminOnly, allProjects);
router.get("/project", jwtVerify, adminOnly, searchProject);
router.delete("/users/:id", jwtVerify, adminOnly, deleteUser);

export default router;
