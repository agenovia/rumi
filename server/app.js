import express from "express";
import morgan from "morgan";
import createNotesPage from "./views/notes.js";
import cors from "cors";

const app = express();
// configure CORS
const corsOptions = {
  origin: ["http://localhost", "http://lagenovia.hpsj.com"],
};
app.use(cors());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));

app.get("/notes", function (req, res) {
  res.send(createNotesPage());
});

app.listen(42000, () => {
  console.log("App listening on port 42000");
});
