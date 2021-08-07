import mongoose from "mongoose";

const url =
  "mongodb+srv://emilio_wefium:pruebawefium@cluster0.kmfvh.mongodb.net/test";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});
