const express = require("express");

const router = express.Router();

const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  updateTicketStatus,
  trackTicket,
  assignTechnician,
} = require("../controllers/ticketController");

router.post("/", createTicket);

router.get("/", getTickets);

router.get(
  "/track/:ticketId",
  trackTicket
);

router.get(
  "/:id",
  getTicketById
);

router.put(
  "/:id",
  updateTicket
);

router.put(
  "/:id/status",
  updateTicketStatus
);

router.put(
  "/:id/technician",
  assignTechnician
);

module.exports = router;