import { Socket } from "socket.io";

export const desconectar = ( Cliente: Socket ) => {

    Cliente.on( 'disconnect', () => {
        console.log('Cliente desconectado');
        
    });

}

// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: SocketIO.Server ) => {
    cliente.on( 'mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        
        io.emit( 'mensaje-nuevo', payload );

    });
}