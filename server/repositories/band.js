const { Band, Personnel } = require('../models')

 class BandRepo {
  static async getAll() {
    // retrieve all bands
    return Band.findAll();
  }
  
  static async getById(id) {
    // retrieve band by id
    return await Band.findOne({
      where: { id: id },
      include: {model:Personnel}
    });
  }

  static async create(band) {
    // create band
    return await Band.create(band)
  }  

  static async update(id, band) {
    // 
    return await Band.update(band,{
      where: {id:id},
    }
    )
  }

}

module.exports = BandRepo
