import dotenv from "dotenv";
import express from "express";
import cookieparser from "cookie-parser";
import connectDB from "./config/database.js";
import authenticationRoute from "./routes/authenticationRoutes.js";
import projectRoute from "./routes/projectRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(cookieparser());
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API IS RUNNING...");
});
app.use("/admin", adminRoutes);
app.use("/auth", authenticationRoute);
app.use("/api", projectRoute);

app.listen(PORT, (req, res) => {
  console.log("server running on http://localhost:" + PORT);
});
