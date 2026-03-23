const Ajv = require("ajv");

const ajv = new Ajv();

module.exports = (schema) => {

  const validate = ajv.compile(schema);

  return (req, res, next) => {

    const valid = validate(req.body);

    if (!valid) {

      return res.status(400).json({
        error: validate.errors
      });

    }

    next();

  };

};