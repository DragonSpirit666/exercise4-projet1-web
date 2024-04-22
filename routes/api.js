const express = require("express");
const router = express.Router();
const apiController = require("../controller/ApiController")

router
  .route("/")
  .get(apiController.index)
  .post(apiController.store)
  .put(apiController.update);

module.exports = router;
