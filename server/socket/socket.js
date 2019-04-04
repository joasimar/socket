
const { io } = require('../server')

io.on('connection',(client)=>{
     console.log('conectado usario')
     client.emit('enviarMensaje',{
 
         usuario:'Administrador',
         mensaje: 'oli'
     })
 
 
 
     client.on('disconnect',()=>{
         console.log('Usuario desconectado')
     })
     //ecuchar
     client.on('enviarMensaje',(data, callback)=>{
        console.log(data)
        client.broadcast.emit('enviarMensaje',{
             usuario: data.usuario,
             mensaje: data.mensaje
        })
       /*   if(mensaje.usuario){
             callback({
                 resp: 'todo chucky'
             })
         }else{
             callback({
                 resp: 'todo no chucky'
             })
         }*/
     })
 
 
 })