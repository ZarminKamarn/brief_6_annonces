import Express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";
import router from "./routes/index";

const app = Express();

const PORT: number = 3000;

const __filename: string = fileURLToPath(import.meta.url);

const __dirname: string = path.dirname(__filename);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(Express.urlencoded({ extended: true }));

app.use(Express.static("public"));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}`);
});