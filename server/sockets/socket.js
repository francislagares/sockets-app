const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        user: 'Administrator',
        message: 'Welcome to this application'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* if (message.user) {
            callback({
                resp: 'TODO SALIÓ BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIÓ MAL!!!!!!'
            });
        } */

    });

});