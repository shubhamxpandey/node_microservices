const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;