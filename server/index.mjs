import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostName = "127.0.0.1";
const port = 3000;

app.use(express.static(join(__dirname, "../dist")));
app.use(express.json());
app.post("/", (req, res) => {
  const { name } = req.body;
  console.log("Received new name:", name);
  // Here you can push the new name to your server-side array or perform any other logic
  res.sendStatus(200);
});
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../dist/index.html"));
});

const server = app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
