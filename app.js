const { urlencoded } = require("body-parser");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3333;

require("dotenv").config();

// Middlewares
// allow to pass urlencoded body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => console.log(`Listening to port ${port}`));
