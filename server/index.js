const express = require("express");
const mongoose = require("mongoose");

require("./models/User");
require("./services/passport");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/nevernote");
mongoose.connection.once("open", () => console.log("good to go"));

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
