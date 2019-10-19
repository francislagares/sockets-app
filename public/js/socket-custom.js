let socket = io();

socket.on('connect', () => {

    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {

    console.log('Se perdió la conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    user: 'Francis',
    message: 'Hello Universe!'
}, (res) => {
    console.log('Respuesta server:', res);
});

// Escuchar información
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor:', mensaje);
});