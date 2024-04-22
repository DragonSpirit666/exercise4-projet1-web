const express = require("express");
const router = express.Router();
const apiController = require("../controller/ApiController")

router
  .route("/personnages")
  .get(apiController.index)
  .post(apiController.store);

router
  .route("/personnage/:id")
  .get(apiController.show)
  .put(apiController.update)
  .delete(apiController.delete)

module.exports = router;
