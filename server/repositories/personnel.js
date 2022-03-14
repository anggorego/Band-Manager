const { Band, Personnel } = require("../models");

class PersonnelRepo {
  static async getAll() {
    // retrieve all bands
    return Personnel.findAll();
  }

  static async getById(id) {
    // retrieve band by id
    return await Personnel.findOne({
      where: { id: id },
      include: { model: Band },
    });
  }

  static async create(personnel) {
    // create band
    return await Personnel.create(personnel);
  }

  static async addToBand(id, band_id) {
    // add member to band

    const bandFound = await Band.findOne({
      where:{id:band_id}
    })
    if ( bandFound ){
      return await Personnel.update({band_id}, {
        where: { id: id },
      });
    } else {
      throw new Error('invalidId')
    }
  }
}

module.exports = PersonnelRepo;
