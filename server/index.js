const express = require("express");
const cors = require("cors");
const path = require("path");
const Routes = require("./routes/dish");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api", Routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
