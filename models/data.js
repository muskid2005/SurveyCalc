import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please include project name"],
    },
    coordinates: {
      type: [
        {
          _id: false,
          easting: Number,
          northing: Number,
        },
      ],
      required: [true, "please enter your coordinates"],
    },
    area: {
      type: Number,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true },
);

const project = mongoose.model("works", projectSchema);

export default project;
