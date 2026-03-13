import project from "../models/data.js";

export const allProjects = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.user.role === "admin") {
      const projects = await project.find();
      return res.status(200).json({ list: projects });
    }

    const list = await project.find({ userId: req.user.id });

    if (list.length === 0) {
      return res.status(404).json({ message: "NOT FOUND" });
    }

    res.status(200).json({ list });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const searchProject = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { search } = req.query;

    let result;

    if (req.user.role === "admin") {
      result = await project.find({
        name: { $regex: search, $options: "i" },
      });
    } else {
      result = await project.find({
        name: { $regex: search, $options: "i" },
        userId: req.user.id,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "NOT FOUND" });
    }

    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
