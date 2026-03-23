module.exports = {

  sendOTP: {
    type: "object",
    required: ["phone"],
    properties: {
      phone: { type: "string" }
    }
  },

  verifyOTP: {
    type: "object",
    required: ["phone", "otp"],
    properties: {
      phone: { type: "string" },
      otp: { type: "string" }
    }
  }

};