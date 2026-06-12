const express = require("express");

const router = express.Router();

const {
  createTicket,
  getTickets,
  updateTicketStatus,
  getTicketByTicketId,
} = require("../controllers/ticketController");

router.post("/", createTicket);

router.get("/", getTickets);

router.get("/track/:ticketId", getTicketByTicketId);

router.put("/:id/status", updateTicketStatus);

module.exports = router;