import { WebSocketServer } from "ws";

const SERVER_PORT = 6970

export class Net {
    wss = new WebSocketServer({
        host: "localhost",
        port: SERVER_PORT,
    })

    constructor (port: number) {
        console.log('Constructor: Net!');
        this.init()
        return this
    }

    init() {
        this.wss.on("connection", (ws) => {
            //ws.binaryType = 'arraybuffer';
            console.log("Player connected")
            ws.on("close", () => {
                console.log(`Player disconnected`);
            })
        })
    }

}

