const express = require("express");
const axios = require("axios");
const app = express();

let baseURL = "http://panel.themeow.ml:6789";

app.get("/", (req, res) => {
  axios
    .get(baseURL)
    .then((content) => {
      res.status(content.status).send(content.data);
    })
    .catch((e) => {
      res.status(e.response.status).send(e.response.data);
    });
});

app.get("*", (req, res) => {
  let site = baseURL + req.originalUrl;
  res.redirect(site);
});

const listener = app.listen(80, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
