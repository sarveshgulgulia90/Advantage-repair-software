const express = require("express");

const router = express.Router();

const {
  getTechnicians,
  createTechnician,
  deleteTechnician,
} = require(
  "../controllers/technicianController"
);

router.get(
  "/",
  getTechnicians
);

router.post(
  "/",
  createTechnician
);

router.delete(
  "/:id",
  deleteTechnician
);

module.exports = router;