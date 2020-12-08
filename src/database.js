const mongoose = require("mongoose");
const { uri } = process.env;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Database connected"))
  .catch((err) => console.log(err));

console.log(mongo_url);
