const mongoose = require("mongoose");

const dapenSchema = mongoose.Schema({
  // pembuatan schema data

  nik: {
    type: Number,
    require: true,
  },
  nama: {
    type: String,
    require: true,
  },
  tempatLahir: {
    type: String,
    require: true,
  },
  tanggalLahir: {
    type: String,
    require: true,
  },
  jenisKelamin: {
    type: String,
    require: true,
  },
  alamat: {
    type: String,
    require: true,
  },
  rt_rw: {
    type: String,
    require: true,
  },
  kel_desa: {
    type: String,
    require: true,
  },
  kecamatan: {
    type: String,
    require: true,
  },
  agama: {
    type: String,
    require: true,
  },
  statusPerkawinan: {
    type: String,
    require: true,
  },
  pekerjaan: {
    type: String,
    require: true,
  },
  kewarganegaraan: {
    type: String,
    require: true,
  },
  expired: {
    type: String,
    require: true,
  },
  golDarah: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Penduduk", dapenSchema);
