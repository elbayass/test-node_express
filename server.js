var express = require('express');
var app = express();
var path = require('path');

var adminRouter = express.Router();

adminRouter.get("/", function (req, res) {
    res.send("coucou les amis")
});

adminRouter.get("/page2", function (rep, res) {
    res.send("Bonjour page 2")
});

var basicRouter = express.Router();

basicRouter.get("/", function (rep, res) {
    res.send("Bonjour")
});

basicRouter.get("/user/:name", function (req, res) {
    res.send("hello " + req.params.name + "!")
});

app.route("/login")
  .get(function(req, res){
      res.send("ceci est mon formulaire")
  })

  .post(function(req, res){
        console.log("en cours")
        res.send("login bien arrivé")
  });


app.use("/", basicRouter);
app.use("/admin", adminRouter);
app.listen(8080);
console.log("8080 est mon port d'attache");
