const express = require('express')
const rtReservas = express.Router()
const daoCitas = require('../dao/daoCitas')
const Cita = require('../models/cita')


rtReservas.post('/procesar', (req, res) => {
    let newCita = new Cita(req.body)
    daoCitas.save(newCita)
        .then(cita => res.render('respuesta', { newCita: cita }))
        .catch(error => res.render('error', error))
})

rtReservas.get('/new', (req, res) => {
    res.render('home')
})

rtReservas.get('/cancel:uId', (req, res) => {
    let uId = req.params.uId
    res.send("Modifica tu cita: " + uId)
})


rtReservas.post('/search', (req, res) => {
    fs.readFileSync('./dao/citas.json', 'utf-8', (err, data) => {
        res.json(data)
    })
})


module.exports = rtReservas