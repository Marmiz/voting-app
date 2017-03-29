/*jshint esversion: 6 */
import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    // when a new connection arrives provide with the latest state
    socket.emit('state', store.getState().toJS());
    // emit action
    socket.on('action', store.dispatch.bind(store));
  });
}
