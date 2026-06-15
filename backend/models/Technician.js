const mongoose = require("mongoose");

const TechnicianSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: String,

    email: String,

    specialization: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Technician",
  TechnicianSchema
);