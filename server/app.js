import express from "express";
import morgan from "morgan";
import createNotesPage from "./views/notes.js";
import cors from "cors";
import createSummarizePage from "./views/summarize.js";

const app = express();
// configure CORS
const corsOptions = {
  origin: ["http://localhost", "http://lagenovia.hpsj.com"],
};
app.use(cors());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.send(createNotesPage());
});

app.get("/notes", (req, res) => {
  res.send(createNotesPage());
});

app.get("/summarize", (req, res) => {
  res.send(createSummarizePage());
});

app.listen(42000, () => {
  console.log("App listening on port 42000");
});
