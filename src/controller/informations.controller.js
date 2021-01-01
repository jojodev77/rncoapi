const model = require("../../models")

const createInformation = async (req, res) => {
    try {
      const information = await model.Informations.create(req.body);
      return res.status(201).json({
        information
      });
    } 
    
    catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const getAllInformations = async (req, res) => {
    try {
      model.Informations.findAll().then(Informations => {
        if (!Informations) {
          return res.status(404).send( "Informations Not found.");
        }
        res.status(200).send({
            Informations
        });
      })
    } catch (error) {
      return error
    }
  }

module.exports = {
    createInformation,
    getAllInformations
}