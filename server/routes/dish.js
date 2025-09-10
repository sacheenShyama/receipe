const express = require("express");
const router = express.Router();
const {
  getallDishes,
  getDishbyName,
  possibleDishes,
  dishSearch
} = require("../controllers/dish");

router.get("/dishes", getallDishes);
router.get("/dish", getDishbyName);
router.post("/possibleDishes", possibleDishes);
router.get("/dish/search",dishSearch)

module.exports = router;
