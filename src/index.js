import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

/* --------------------------------- Config --------------------------------- */

/* ---------------------------- Instancia express --------------------------- */
const app = express();

// Crear puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy usando puerto " + app.get("port"));
  console.log(path.join(__dirname, "../public"));
});

/* ------------------------------- Middlewares ------------------------------ */
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

/* ---------------------------------- Ruta --------------------------------- */
app.get("/", (req, res) => {
  res.send("Hola desde el servidor");
});
