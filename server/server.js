const express = require("express");
const cors = require("cors");
const products = require("./Products");

const app = express();

app.use(cors());

//Get all products
app.get("/api/products", (req, res) => res.json(products));

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
