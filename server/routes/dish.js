const express = require("express");
const router = express.Router();
const { getallDishes, getDishbyName } = require("../controllers/dish");

router.get("/dishes", getallDishes);
router.get("/dish/", getDishbyName);

module.exports = router;
