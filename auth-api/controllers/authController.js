const grpcClient = require("../services/grpcClient")
const producer = require("../services/kafka")

exports.sendOTP = (req, res) => {

 grpcClient.SendOTP(
  { phone: req.body.phone },
  (err, response) => {

   if (err) {
    return res.status(500).json(err)
   }

   res.json(response)

  }
 )

}

exports.verifyOTP = (req, res) => {

 grpcClient.VerifyOTP(
  req.body,
  async (err, response) => {

   if (err) {
    return res.status(500).json(err)
   }
   console.log("Login success for:", req.body.phone);

    // Kafka event
    await producer.send({
    topic: "login-events",
    messages: [
        { value: JSON.stringify({ phone: req.body.phone }) }
    ]
    })

   res.json(response)

  }
 )

}