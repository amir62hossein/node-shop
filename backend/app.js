const express = require("express");
var cors = require("cors");
const monoose = require("mongoose");
var bodyParser = require('body-parser')
var productRoutes = require("./routes/products");
var userRoutes = require("./routes/users")
var commentRouter = require("./routes/comments")


const app = express();
const PORT = 8000;
app.use(express.static(__dirname));
app.use('/upload' , express.static('upload'))

app.use(express.json())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use("/api/prodcuts", productRoutes);
app.use("/api/users" , userRoutes)
app.use("/api/comments" , commentRouter)


monoose
  .connect("mongodb://localhost/mern-shop")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
