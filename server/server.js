const express = require("express");
const cors = require("cors");
const products = require("./Products");

const app = express();

app.use(cors());

app.locals.nextProductId = 10;

//Get all products
app.get("/api/products", (req, res) => res.json(products));

//POST product from admin addproduct form
app.post("/api/products", (req, resp) => {

    const { name, price, description, imageUrl, color, moonphase, moon, zodiac } = req.body;

    const product = {
        id: app.locals.nextProductId++,
        name,
        price,
        description,
        imageUrl,
        color,
        moonphase,
        moon,
        zodiac
    };

    const products = req.app.locals.products;

    products.push(product);

    resp.status(201).end(); // 201 Created
});




const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
