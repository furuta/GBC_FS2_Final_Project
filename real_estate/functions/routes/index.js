var express = require("express");
var router = express.Router();
var unirest = require("unirest");
const request = require("request-promise");

/* GET home page. */
router.get("/", (req, res, next) => {
  let title = "Home";
  let realEstates = [];
  let cssFiles = ["css/main_styles.css", "css/responsive.css"];
  let jsFiles = ["js/custom.js"];
  let activePage = "home";

  // Refine data
  res.render("index", {
    title: title,
    realEstates: realEstates,
    cssFiles: cssFiles,
    jsFiles: jsFiles,
    activePage: activePage
  });
});

module.exports = router;
