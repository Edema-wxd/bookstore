const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const bookRoutes = require("./src/books/book.route");
// const orderRoutes = require("./src/order/order.route")

// Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

//Routes
app.use("/api/books", bookRoutes);
//app.use("/api/orders", orderRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Hello world");
  });
}

main()
  .then(() => console.log("Mongodb connected sucessfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
