const data = require("../data/indian_food.json");

const getallDishes = (req, res) => {
  //   console.log("fetching all dishes");
  return res.status(200).json(data);
};
const getDishbyName = (req, res) => {
  try {
    const name = req.query.name.toLowerCase();
    const dish = data.find((d) => d.name.toLowerCase() === name);
    dish
      ? res.status(200).json(dish)
      : res.status(404).json({ msg: "Dish not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};
module.exports = {
  getallDishes,
  getDishbyName,
};
