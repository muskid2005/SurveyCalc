import { body, validationResult } from "express-validator";

export const validateProject = [
  body("data.name").notEmpty().withMessage("Project name is required"),
  body("data.coordinates")
    .isArray({ min: 3 })
    .withMessage(
      "Coordinates are required and should be an array of at least 3 points",
      body("data.coordinates.*.easting")
        .isNumeric()
        .withMessage("Each coordinate must have a numeric x value"),
      body("data.coordinates.*.northing")
        .isNumeric()
        .withMessage("Each coordinate must have a numeric y value"),
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateLogin = [
  body("email").isEmail().withMessage("Please provide a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateRegister = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please provide a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
