// Justin Morand et Zachary Deschênes-Tremblay
const express = require("express");
const router = express.Router();
const apiController = require("../controller/ApiController")

router
  .route("/personnages")
  .get(apiController.index)
  .post(apiController.store);

router
  .route("/personnages/:id")
  .get(apiController.show)
  .put(apiController.update)
  .delete(apiController.delete)

module.exports = router;
