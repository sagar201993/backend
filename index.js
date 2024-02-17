import express from "express";
const app = express();
const port = 3000;
import Android from "./categories/Android.json" assert { type: "json" };
import Apple from "./categories/Apple.json" assert { type: "json" };
import Cooling from "./categories/cooling.json" assert { type: "json" };

app.use(express.json());
app.use(cors());
app.get("/smartphones", (req, res) => {
  res.json({
    data: Android,
  });
  console.log(data);
});

app.get("/apple", (req, res) => {
  res.json({
    data: Apple,
  });
});

app.get("/cooling", (req, res) => {
  res.json({
    data: Cooling,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
