const Technician = require("../models/Technician");

const getTechnicians = async (
  req,
  res
) => {
  try {
    const technicians =
      await Technician.find().sort({
        createdAt: -1,
      });

    res.json(technicians);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createTechnician = async (
  req,
  res
) => {
  try {
    const technician =
      await Technician.create(req.body);

    res.status(201).json(
      technician
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTechnician = async (
  req,
  res
) => {
  try {
    await Technician.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Technician deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTechnicians,
  createTechnician,
  deleteTechnician,
};