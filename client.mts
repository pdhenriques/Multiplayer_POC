(async () => {
    const ws = new WebSocket("ws://localhost:6970")
    if (ws) {console.log("Connected to server!")}
    
    ws.addEventListener("open", (event) => {
        console.log("WebSocket open", event)
    })
    ws.addEventListener("close", (event) => {
        console.log("WebSocket close", event)
    })
    ws.addEventListener("error", (event) => {
        console.log("WebSocket error", event)
    })
    ws.addEventListener("message", (event) => {
        console.log("WebSocket message", event)
    })

})()