const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { docTitle: "404 Error" });
});
app.listen(3000, () => {
  console.log("Server runnung on port 3000");
});
