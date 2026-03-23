const swaggerJsdoc = require("swagger-jsdoc");

const options = {

  definition: {
    openapi: "3.0.0",
    info: {
      title: "Microservice API",
      version: "1.0.0"
    },

    components: {

      schemas: {

        SendOtpRequest: {
          type: "object",
          properties: {
            phone: {
              type: "string"
            }
          }
        },

        VerifyOtpRequest: {
          type: "object",
          properties: {
            phone: {
              type: "string"
            },
            otp: {
              type: "string"
            }
          }
        }

      }

    }

  },

  apis: ["./docs/*.js"]

};

module.exports = swaggerJsdoc(options);