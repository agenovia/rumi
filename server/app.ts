import cors from "cors";
import express from "express";
import morgan from "morgan";
import Vault from "./auth/vault.js";
import { default as v1 } from "./routes/v1/router.js";

const app = express();
// configure CORS
const corsOptions = {
  origin: ["http://localhost", "http://lagenovia.hpsj.com"],
};
app.use(cors());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));

// fetch pinecone key from hasicorp vault
const vault = new Vault(
  process.env.HCP_CLIENT_ID ?? "",
  process.env.HCP_CLIENT_SECRET ?? "",
  process.env.HCP_VAULT_URL ?? ""
);

// fetch our database key
const pineconeSk = (await vault.fetchSecret("pinecone"))?.value;

app.use("/v1", v1);

app.listen(42000, () => {
  console.log("App listening on port 42000");
});
