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
const possibleDishes = (req, res) => {
  try {
    const requestedIng = req.body.ingredients;
    if (!requestedIng || requestedIng.length === 0) {
      return res.status(400).json({ msg: "Please provide ingredients" });
    }
    const ingrArr = requestedIng.map((ing) => ing.toLowerCase().trim());

    const possible_dishes = data.filter((dis) => {
      return (
        ingrArr.length === dis.ingredients.split(", ").length &&
        dis.ingredients
          .split(", ")
          .every((ing) => ingrArr.includes(ing.toLowerCase()))
      );
    });

    res.status(200).json(possible_dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};
module.exports = {
  getallDishes,
  getDishbyName,
  possibleDishes,
};
