const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/order/orders.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://bookstore-nk9f.vercel.app"],
    credentials: true,
  })
);

//Routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

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
