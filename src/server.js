const express = require("express");
const Twitter = require("twitter");
require("dotenv").config();
const app = express();

//Setting up twitter client
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.get("/tweets/:display_name", function(req, res) {
  var params = { screen_name: req.param.display_name };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.send(tweets);
    }
  });
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
