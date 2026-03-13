import express from "express";
import { jwtVerify } from "../middlewares/jwtAuths.js";
import {
  allProjects,
  searchProject,
} from "../controllers/allProjectsHandlers.js";
import { projectArea } from "../controllers/projectcontrols.js";
import { validateProject } from "../middlewares/validators.js";

const router = express.Router();

router.get("/projects", jwtVerify, allProjects);
router.get("/project", jwtVerify, searchProject);
router.post("/project", jwtVerify, validateProject, projectArea);

export default router;
