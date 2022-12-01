// pembuatan router dataPenduduk
const express = require("express");
const router = express.Router();
const DataPenduduk = require("../models/Dapen");

// create
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

module.exports = router;
