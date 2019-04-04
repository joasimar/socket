var socket = io();
        socket.on('connect',function(){
            console.log('conectado')
        })

        socket.on('disconnect',function(){
            console.log('no hay conexion al servidor')
        })
        
        socket.emit('enviarMensaje',{
            usuario: 'joasimar',
            mensaje: 'joasimar'
        }, function(resp){
            console.log('respuesta server',resp)
        })
        socket.on('enviarMensaje',function(mensaje){
            console.log('Servidor',mensaje)
        })
