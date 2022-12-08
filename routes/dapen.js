// pembuatan router dataPenduduk
const express = require("express");
const router = express.Router();
const DataPenduduk = require("../models/Dapen");
const response = require("../config/response");

// buat
router.post("/", async (req, res) => {
  // menampungan input
  const dapenPost = new DataPenduduk({
    nik: req.body.nik,
    nama: req.body.nama,
    tanggalLahir: req.body.tanggalLahir,
    jenisKelamin: req.body.jenisKelamin,
    alamat: req.body.alamat,
    rt_rw: req.body.rt_rw,
    kel_desa: req.body.kel_desa,
    kecamatan: req.body.kecamatan,
    agama: req.body.agama,
    statusPerkawinan: req.body.statusPerkawinan,
    pekerjaan: req.body.pekerjaan,
    kewarganegaraan: req.body.kewarganegaraan,
    expired: req.body.expired,
    golDarah: req.body.golDarah,
  });
  try {
    // simpan
    const dapen = await dapenPost.save();

    // response
    // res.json(dapen);
    response(201, dapen, "Post Data Success", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(400).json({ message: error.message });
  }
});

// Get data
router.get("/", async (req, res) => {
  try {
    const dapen = await DataPenduduk.find();
    // res.json(dapen);
    response(200, dapen, "Get Data Success", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(404).json({ message: error.message });
  }
});

//  put data

router.put("/:pendudukId", async (req, res) => {
  // tampungan input data penduduk
  const data = {
    nik: req.body.nik,
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    tanggalLahir: req.body.tanggalLahir,
    jenisKelamin: req.body.jenisKelamin,
    alamat: req.body.alamat,
    rt_rw: req.body.rt_rw,
    kel_desa: req.body.kel_desa,
    kecamatan: req.body.kecamatan,
    agama: req.body.agama,
    statusPerkawinan: req.body.statusPerkawinan,
    pekerjaan: req.body.pekerjaan,
    kewarganegaraan: req.body.kewarganegaraan,
    expired: req.body.expired,
    golDarah: req.body.golDarah,
  };

  try {
    // update data
    const dapen = await DataPenduduk.updateOne(
      { _id: req.params.pendudukId },
      data
    );
    // res.json(dapen);
    response(200, dapen, "Data Berhasil Di Edit", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(404).json({ message: error.message });
  }
});

// delete data
router.delete("/:pendudukId", async (req, res) => {
  try {
    // delete
    const dapen = await DataPenduduk.deleteOne({
      _id: req.params.pendudukId,
    });
    // res
    // res.json(dapen);
    response(200, dapen, "Delete Data Success", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
