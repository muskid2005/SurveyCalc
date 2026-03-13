import project from "../models/data.js";

export const projectArea = async (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !data.coordinates || data.coordinates.length < 3) {
      return res.status(400).json({ Message: "INVALID VALUES" });
    }
    let area = 0;
    for (let i = 0; i < data.coordinates.length; i++) {
      const j = (i + 1) % data.coordinates.length;

      area +=
        data.coordinates[i].easting * data.coordinates[j].northing -
        data.coordinates[j].easting * data.coordinates[i].northing;
    }
    const finalArea = Math.abs(area * 0.5).toFixed(3);

    const newProject = await project.create({
      name: data.name,
      coordinates: data.coordinates,
      area: finalArea,
      userId: req.user.id,
    });

    res.status(200).json({ message: "PROJECT SAVED", newProject });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};
