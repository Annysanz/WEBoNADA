const express = require('express')
const app = express()
const rtMain = require('./routes/rtMain')
const rtReservas = require('./routes/rtReservas')
var exphbs = require('express-handlebars')


app.engine('hbs', exphbs({
    extname: 'hbs'
}))
app.set('view engine', '.hbs')

//MIDDLEWARES
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', rtMain)
app.use('/citas',rtReservas)



//SERVIDOR
app.listen(3000,(err)=>{console.log('Server run on port 3000')})