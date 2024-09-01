import Net from './NetCode.js'

const net = new Net(6970)

console.log(`Listening to ws://${net.wss.options.host}:${net.wss.options.port}`)
