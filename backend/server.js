const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tickets", ticketRoutes);

app.get("/", (req, res) => {
  res.send("Repair Management API Running");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });