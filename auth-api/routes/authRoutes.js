const express = require("express")
const router = express.Router()


const validate = require("../middleware/validate");
const schema = require("../schemas/authSchema");
const authController = require("../controllers/authController")

router.post("/send-otp", validate(schema.sendOTP), authController.sendOTP);

router.post("/verify-otp", validate(schema.verifyOTP), authController.verifyOTP)

module.exports = router