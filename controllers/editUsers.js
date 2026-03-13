import user from "../models/users.js";

export const allUsers = async (req, res) => {
  try {
    const list = await user.find();

    if (!list || list.length <= 0) {
      return res.status(404).json({ message: "NOT FOUND" });
    }
    res.status(200).json({
      numbers: list.length,
      users: list.map((u) => ({
        id: u._id,
        name: u.name,
        role: u.role,
        active: u.active,
      })),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const Id = req.params.id;

    if (req.user.id === Id) {
      return res
        .status(400)
        .json({ message: "YOU CANNOT DELETE YOUR ACCOUNT" });
    }

    const remove = await user.findByIdAndDelete(Id);

    if (!remove) {
      return res.status(404).json({ message: "NOT FOUND" });
    }

    res.status(200).json({ message: "USER DELETED SUCCESSFULLY" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
