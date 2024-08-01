import {WebSocketServer, WebSocket} from 'ws';

const SERVER_PORT = 6970;

const wss = new WebSocketServer({
    port: SERVER_PORT,
})

wss.on("connection", (ws) => {
    //ws.binaryType = 'arraybuffer';
    console.log("Player connected")
    ws.on("close", () => {
        console.log(`Player disconnected`);
    })
})

console.log(`Listening to ws://0.0.0.0:${SERVER_PORT}`)
