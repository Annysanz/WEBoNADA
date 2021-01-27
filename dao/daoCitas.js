const Cita = require('../models/cita')
const fs = require('fs')
const { Router } = require('express')

const daoCitas = {}

daoCitas.save = function save(cita) {
  return new Promise((resolved, reject) => {
    //aca estoy leyendo las citas de base de datos
    let reservas = JSON.parse(fs.readFileSync('./dao/citas.json', 'utf8', (err) => {
      if (err) reject(err)
      console.log(err)
    }))
    //aca estoy buscando una conisidencia de fecha y hora
    let existe = false
    reservas.forEach(reserva => {
      if (reserva.uDate == cita.uDate && reserva.uHour == cita.uHour) existe = true
    });
    //aca estoy comprobando si he encontrado la cita ocupada
    if (!existe) {
      reservas.push(cita)
      fs.writeFile('./dao/citas.json', JSON.stringify(reservas), 'utf8', (err) => {
        resolved(cita)
      })
    } else {
      reject(error)
    }
  })
}


// daoCitas.get('/delete/:uId', function (req, res, next) {
//   uId = req.params.uId;
//   userstable.destroy({
//     where: { uId: uId }
//   }).then(function (result) {
//     if (result) {
//       res.redirect(200, './dao/citas.json');
//     } else {
//       res.send('el registro se encuentra en al tabla');
//     }
//   });
// });



// daoCitas.get= function (cita) {
//   let uIdModificar = req.body.uIdModificar
//   let uIdEncontrada = reservas.find(cita => `${uIdModificar}` == cita.uIdEncontrada)
//   console.log(uIdLocalizada)

//   res.render('search', {uIdLocalizada:uIdEncontrada})
// }

// daoCitas.get= function (cita) {

//   let i = reservas.indexOf(uIdLocalizada);
//   if (i> -1) {
//     reservas.splice(i, 1);
//       fs.writeFileSync('cita.json', JSON.stringify(reservas), 'utf-8', err=>{
//           if (err)
//               console.log()
//           else
//           res.render('cancel', {uId:uIdLocalizada})
//       }) 
//   }
//   console.log(reservas)

// }

// daoCitas.get = function (cita) {            //devuelve todas las citas de todas las personas
//   return new Promise((resolve, reject) => {
//     fs.readFile('./cita.json', 'utf-8', (err, reservas) => {
//       reservas = JSON.parse(reservas)
//       reservas = reservas.filter(c => { return c.date_cita == date_cita }) // filtrar citas solo para la fecha eligida, return array of object (cita) // todos los datos de citas
//       reservas = reservas.map(c => c.hour_cita)  // return solo el hour_cita de todos las citas filtradas, array que incluye solo las horas disponibles
//         resolve(reservas)
//     })
//   })
// }


module.exports = daoCitas
