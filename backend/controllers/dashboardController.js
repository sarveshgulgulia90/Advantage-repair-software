const Ticket = require("../models/Ticket");

const getStats = async (req, res) => {
  try {
    const total = await Ticket.countDocuments();

    const pending = await Ticket.countDocuments({
      status: "Pending",
    });

    const completed = await Ticket.countDocuments({
      status: "Completed",
    });

    const inProgress = await Ticket.countDocuments({
      status: {
        $in: [
          "Assigned",
          "Diagnosing",
          "Waiting for Parts",
          "Repair In Progress",
          "Quality Check",
        ],
      },
    });

    res.json({
      total,
      pending,
      inProgress,
      completed,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStats,
};