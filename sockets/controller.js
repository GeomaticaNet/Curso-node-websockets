



const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);


    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        callback(id);
        // Broadcast: envia mensaje a todos los clientes excepto al que lo envía.
        socket.broadcast.emit('enviar-mensaje', payload);
    })
};





module.exports = {
    socketController
}