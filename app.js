const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API PROJECT UAS");
});

// pengimport an routes
const dataPendudukRoutes = require("./routes/dapen");
const authRoutes = require("./routes/auth");
//  pendaftaran middleware baru ke express
app.use("/penduduk", dataPendudukRoutes);
app.use("/auth", authRoutes);

// koneksi ke database mongo
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let fada = mongoose.connection;

// kalo dio error
fada.on("error", console.error.bind(console, "Error Bosku"));

// kalo dio biso
fada.once("open", () => {
  console.log("Database Is connected");
});

// listen port
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
