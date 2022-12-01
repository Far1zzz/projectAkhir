const mongoose = require("mongoose");

const dapenSchema = mongoose.Schema({
  // pembuatan schema data

  nama: {
    type: String,
    require: true,
  },
  alamat: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Penduduk", dapenSchema);
