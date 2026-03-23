const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

const packageDef = protoLoader.loadSync("../auth-grpc/auth.proto")

const grpcObject = grpc.loadPackageDefinition(packageDef)

const authPackage = grpcObject.auth

const client = new authPackage.AuthService(
 "localhost:50051",
 grpc.credentials.createInsecure()
)

module.exports = client