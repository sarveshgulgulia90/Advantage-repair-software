const express = require("express");

const router = express.Router();

const {
  createTicket,
  getTickets,
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

router.put(
  "/:id/status",
  updateTicketStatus
);

router.put(
  "/:id/technician",
  assignTechnician
);

module.exports = router;