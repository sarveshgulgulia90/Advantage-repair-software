const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      unique: true,
    },

    deviceType: String,
    brand: String,
    model: String,
    serialNumber: String,

    issueDescription: String,

    serviceType: String,
    preferredDate: String,

    name: String,
    phone: String,
    email: String,
    address: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", TicketSchema);