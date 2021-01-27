
module.exports = class Cita {

    constructor(cita){
        this.uName=cita.uName
        this.uLastName=cita.uLastName
        this.uEmail=cita.uEmail
        this.uPhone=cita.uPhone
        this.uDate=cita.uDate
        this.uHour=cita.uHour
        this.uId=this.genId()

    }
    genId(){
        let aux=""
        let possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (let i=0; i<6; i++)
        aux += possible.charAt(Math.floor(Math.random() * possible.length))
            return aux
    }
       
    setuName(uName){
        if(uName!=''){
            this.uName=uName
            return this.uName
        }else{
            return 'El Nombre no debe estar vacío'
        }
    }
    setuLastName(uLastName){
        if(uLastName!=''){
            this.uLastName=uLastName
            return this.uLastName
        }else{
            return 'El Apellido no debe estar vacío'
        }
    }

  
    setuEmail(uEmail){
        if(uEmail!=''){
            this.uEmail=uEmail
            return this.uEmail
        }else{
            return 'El Email no debe estar vacío'
        }
    }
    setuPhone(uPhone){
        if(uPhone!=''){
            this.email=uPhone
            return this.uPhone
        }else{
            return 'El Número de teléfono debe estar vacío'
        }
    }
    setuDate(uDate){
        if(uDate<=new Date()){
            this.uDate=uDate
            return this.uDate
        }else{
            return 'El Día no debe estar vacío'
        }
    }
    setuDate(uHour){
        if(uHour!=''){
            this.uHour=uHour
            return this.uHour
        }else{
            return 'La Hora no debe estar vacía'
        }
    }
}