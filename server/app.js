import express from "express";
import morgan from "morgan";
import createRecordPage from "./views/record.js";
import cors from "cors";
import createRecapPage from "./views/recap.js";

const app = express();
// configure CORS
const corsOptions = {
  origin: ["http://localhost", "http://lagenovia.hpsj.com"],
};
app.use(cors());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.send(createRecordPage());
});

app.get("/record", (req, res) => {
  res.send(createRecordPage());
});

app.get("/recap", (req, res) => {
  res.send(createRecapPage());
});

app.listen(42000, () => {
  console.log("App listening on port 42000");
});
