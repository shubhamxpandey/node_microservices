const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Auth Microservice API",
    description: "Auth + Post APIs"
  },
  host: "localhost:3000",
  schemes: ["http"]
};

const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "./routes/authRoutes.js",
  "./routes/postRoutes.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);