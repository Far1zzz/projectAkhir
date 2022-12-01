const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// pengimport an routes
const dataPendudukRoutes = require("./routes/dapen");

//  pendaftaran middleware baru ke express
app.use("/penduduk", dataPendudukRoutes);

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
