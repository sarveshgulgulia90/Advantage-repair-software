const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      unique: true,
    },

    // Device Information
    deviceType: String,
    brand: String,
    model: String,
    serialNumber: String,

    // Customer Reported Issue
    issueDescription: String,

    // Service Information
    serviceType: String,
    preferredDate: String,

    // Customer Information
    name: String,
    phone: String,
    email: String,
    address: String,

    // Assignment
    assignedTechnician: {
      type: String,
      default: "",
    },

    // Workflow Status
    status: {
      type: String,
      default: "Pending",
    },

    // Repair Workspace
    diagnosis: {
      type: String,
      default: "",
    },

    partsRequired: {
      type: String,
      default: "",
    },

    repairNotes: {
      type: String,
      default: "",
    },

    estimatedCost: {
      type: Number,
      default: 0,
    },

    customerApproval: {
      type: String,
      default: "Pending",
    },

    // Future Use
    attachments: [
      {
        type: String,
      },
    ],

    completedDate: {
      type: Date,
      default: null,
    },

    deliveredDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Ticket",
  TicketSchema
);