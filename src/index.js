import express from "express";
import { readFileSync } from "fs";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const raw = readFileSync("./src/data.json", "utf-8");
  const json = JSON.parse(raw);
  res.json(json);
});

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});