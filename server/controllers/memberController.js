const personnelRepo = require("../repositories/personnel")
const getMembers = async (req,res,next) => {
  try {
    const personnels = await personnelRepo.getAll()
    res.status(200).json(personnels);
  } catch (err) {
    next(err)
  }
}



module.exports = {getMembers}