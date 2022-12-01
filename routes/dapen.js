// pembuatan router dataPenduduk
const express = require("express");
const router = express.Router();
const DataPenduduk = require("../models/Dapen");

// buat
router.post("/", async (req, res) => {
  // menampungan input
  const dapenPost = new DataPenduduk({
    nama: req.body.nama,
    alamat: req.body.alamat,
  });
  try {
    // simpan
    const dapen = await dapenPost.save();

    // response
    res.json(dapen);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get data
router.get("/", async (req, res) => {
  try {
    const dapen = await DataPenduduk.find();
    res.json(dapen);
  } catch (error) {
    res.json({ message: error });
  }
});

//  put data

router.put("/:pendudukId", async (req, res) => {
  // tampungan input data penduduk
  const data = {
    nama: req.body.nama,
    alamat: req.body.alamat,
  };

  try {
    // update data
    const dapen = await DataPenduduk.updateOne(
      { _id: req.params.pendudukId },
      data
    );
    res.json(dapen);
  } catch (error) {
    res.json({ message: error });
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
    res.json(dapen);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
