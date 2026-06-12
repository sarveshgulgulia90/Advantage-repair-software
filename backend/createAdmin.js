require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  await User.create({
    name: "Administrator",
    email: "admin@repair.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin Created");

  process.exit();
}

createAdmin();