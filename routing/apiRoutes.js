var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/api/friends", function(req, res) {
  var friendsList = req.params.friends;

  if (friendsList) {
    console.log(friends);

    for (var i = 0; i < friends.length; i++) {
      if (friends === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }

    return res.json(false);
  }
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});

var friends = [{
  "name":"Dert",
  "photo":"https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/18275260_1734470969900858_4987907272439618858_n.jpg?oh=11dbc90cae4764dad55ca06ca70ad497&oe=59A4042E",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}, {"name":"Ramon",
  "photo":"https://scontent.xx.fbcdn.net/v/t1.0-1/p160x160/18198252_10155158452152978_6592967130318258711_n.jpg?oh=1058b1f8caaa022d466ad37873f3bc67&oe=59BC92FB",
  "scores":[
      5,
      1,
      5,
      3,
      3,
      3,
      1,
      5,
      1,
      2
    ]
}];