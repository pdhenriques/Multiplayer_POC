import { Canvas } from "./classes/Canvas.js"

(() => {
    // const ws = new WebSocket("ws://localhost:6970")
    // if (ws) {console.log("Connected to server!")}
    
    // ws.addEventListener("open", (event) => {
    //     console.log("WebSocket open", event)
    // })
    // ws.addEventListener("close", (event) => {
    //     console.log("WebSocket close", event)
    // })
    // ws.addEventListener("error", (event) => {
    //     console.log("WebSocket error", event)
    // })
    // ws.addEventListener("message", (event) => {
    //     console.log("WebSocket message", event)
    // })
    

    
    const canvas = new Canvas("game-canvas", 1280, 720)
    const ctx = canvas.ctx
    
    
    const draw = () => {
        const width = ctx.canvas.width
        const height = ctx.canvas.height
        ctx.reset()
        ctx.fillStyle = "green";
        ctx.fillRect(20, 20, width-40, height-40);
        
    }
    
    const fullWidthButton = document.getElementById("button1") as HTMLButtonElement
    fullWidthButton.addEventListener('click', canvas.toggleFullWidth.bind(canvas))
    const fullWindowButton = document.getElementById("button2") as HTMLButtonElement
    fullWindowButton.addEventListener('click', canvas.toggleFullWindow.bind(canvas))
    const fullScreenButton = document.getElementById("button3") as HTMLButtonElement
    fullScreenButton.addEventListener('click', canvas.toggleFullscreen.bind(canvas))
    


    setInterval(() => draw(), 1000/60)
    
})()
