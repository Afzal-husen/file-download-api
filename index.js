import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/download/:filename", (req, res) => {
  const filePath = __dirname + "/public/assets/" + req.params.filename;
  res.download(filePath);
});

const port = 3000;
app.listen(port, console.log(`server runnnig at port ${port}...`));
