const express = require("express");
const router = express.Router();
const {
  getallDishes,
  getDishbyName,
  possibleDishes,
} = require("../controllers/dish");

router.get("/dishes", getallDishes);
router.get("/dish/", getDishbyName);
router.post("/possibleDishes", possibleDishes);

module.exports = router;
