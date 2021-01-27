const express = require('express')
const rtMain = express.Router()


rtMain.get('/', (req, res) => {
  res.render("home")
});

rtMain.get("/contact", function (req, res) {
  res.render("contact")
});

rtMain.get("/cancel", function (req, res) {
  res.render("cancel")
});

rtMain.get("/search", function (req, res) {
  res.render("search")
});

module.exports = rtMain






























// var  QRCode  = require ('qrcode') 
// var  lienzo  = documento.getElementById ('lienzo') 
// let cita = require('../models/citas')