import {WebSocketServer, WebSocket} from 'ws';
import {Net} from './NetCode.mjs'

const net = new Net(6970)

console.log(`Listening to ws://${net.wss.options.host}:${net.wss.options.port}`)
