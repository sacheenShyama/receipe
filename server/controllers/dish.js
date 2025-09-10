const data = require("../data/indian_food.json");
const normalizeString = require("../utils/normalize");
const getallDishes = (req, res) => {
  //   console.log("fetching all dishes");

  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  if (page <= 0) {
    page = 1;
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = data.slice(startIndex, endIndex);

  return res.status(200).json({
    page,
    limit,
    total: data.length,
    totalPages: Math.ceil(data.length / limit),
    data: result,
  });
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
const dishSearch = (req, res) => {
  try {
    const q = req.query.q?.toLowerCase().trim();
    if (!q || q.lenth === 0) {
      return res.status(400).json([]);
    }

    const suggestions = data.filter((dish) => {
      const name = normalizeString(dish.name);
      const ingredients = normalizeString(dish.ingredients);
      const state = normalizeString(dish.state);
      const region = normalizeString(dish.region);

      return (
        name.includes(q) ||
        ingredients.includes(q) ||
        state.includes(q) ||
        region.includes(q)
      );
    });
    res.status(200).json(suggestions.slice(0, 10));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const possibleDishes = (req, res) => {
  try {
    const requestedIng = req.body.data;

    if (!requestedIng || requestedIng.length === 0) {
      return res.status(400).json({ msg: "Please provide ingredients" });
    }
    const page = req.body.page || 1;
    const limit = req.body.limit || 10;
    if (page <= 0) {
      page = 1;
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const ingrArr = requestedIng.map((ing) => ing.toLowerCase().trim());

    const possible_dishes = data.filter((dis) => {
      return (
        ingrArr.length === dis.ingredients.split(", ").length &&
        dis.ingredients
          .split(", ")
          .every((ing) => ingrArr.includes(ing.toLowerCase()))
      );
    });
    const result = possible_dishes.slice(startIndex, endIndex);

    res.status(200).json({
      page,
      limit,
      total: possible_dishes.length,
      totalPages: Math.ceil(possible_dishes.length / limit),
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};
module.exports = {
  getallDishes,
  getDishbyName,
  possibleDishes,
  dishSearch,
};
