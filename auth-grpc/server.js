const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const jwt = require("jsonwebtoken");

const packageDef = protoLoader.loadSync("./auth.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);

const otpStore = {};

function SendOTP(call, callback) {

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[call.request.phone] = otp;

  console.log("OTP:", otp);

  callback(null, { message: "OTP Sent" });
}

function VerifyOTP(call, callback) {

  if (otpStore[call.request.phone] !== call.request.otp) {

    return callback(null, {
      message: "Invalid OTP",
      token: ""
    });
  }

  const token = jwt.sign(
    { phone: call.request.phone },
    "SECRET",
    { expiresIn: "1h" }
  );

  callback(null, {
    message: "Login Success",
    token
  });
}

const server = new grpc.Server();

server.addService(grpcObject.auth.AuthService.service, {
  SendOTP,
  VerifyOTP
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {

    console.log("gRPC Server running on 50051");

    server.start();
  }
);