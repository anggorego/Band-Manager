const bandRepo = require("../repositories/band");
const personnelRepo = require("../repositories/personnel");

const getbands = async (req, res, next) => {
  try {
    const bands = await bandRepo.getAll();
    res.status(200).json(bands);
  } catch (err) {
    next(err);
  }
};

const getBandsById = async (req, res, next) => {
  const { band_id } = req.params;
  try {
    const band = await bandRepo.getById(band_id);
    if (band) {
      res.status(200).json(band);
    } else {
      next({ name: "bands not found" });
    }
  } catch (err) {
    next(err);
  }
};

const postBand = async (req, res, next) => {
  const { name, member } = req.params;
  try {
    await bandRepo.create({
      name,
      member,
    });
    res.status(201).json("created");
  } catch (err) {
    next(err);
  }
};

const updateBand = async (req, res, next) => {
  const { name, member } = req.body;
  try {
    await bandRepo.update(req.params.band_id, { name, member });
    res.status(204).json("successfully updated");
  } catch (err) {
    next(err);
  }
};

const addBandPersonnel = async (req, res, next) => {
  const { band_id, personnel_id } = req.body;
  try {
    await personnelRepo.addToBand(personnel_id, band_id);
    res.status(200).json("successfully add personnel to band");
  } catch (err) {
    
    next(err);
  }
};

module.exports = {
  getbands,
  getBandsById,
  postBand,
  updateBand,
  addBandPersonnel,
};
