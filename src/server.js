const express= require('express');
const path= require('path');
const exphbs = require("express-handlebars");
const app= express();
const flash = require("connect-flash");
var session = require('express-session');
// SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

//app.engine("html", require("ejs").renderFile); //para no usar archivos .ejs, el ejs interpreta el html
//app.set("view engine", ".ejs"); //para reemplazar archivos .html por .ejs
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main", 
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs", //la extension que usaremos es .hbs
  })
);
app.set("view engine", ".hbs");


// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'secret',
  resave: true, 
  saveUninitialized: true}));

app.use(flash());  
//Global variables
app.use((req, res, next) => {
  //el next es para que continue despues de este use
  res.locals.error_msg = req.flash("error_msg");
  //res.locals.user = req.user || null;
  next();
});



// RUTAS
app.use(require("./routes/index.routes.js"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;