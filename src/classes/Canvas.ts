type CanvasMode = "default" | "fullWidth" | "fullWindow"

export class Canvas {
    canvasElement: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    width: number
    height: number
    canvasMode: CanvasMode
    defaultWidth: number
    defaultHeight: number

    constructor(elementId: string, width?: number, height?: number) {
        const el = document.getElementById(elementId)
        if (!(el instanceof HTMLCanvasElement)) throw Error("cant find canvas element: " + elementId)
        this.canvasElement = el

        const ct = this.canvasElement.getContext("2d")
        if (!(ct instanceof CanvasRenderingContext2D)) throw Error("cant find context for canvas: " + elementId)
        this.ctx = ct

        this.defaultWidth = width ?? 1280
        this.defaultHeight = height ?? 720
        this.width = this.defaultWidth
        this.height = this.defaultHeight
        this.updateCanvasSize()
        this.canvasMode = "default"

        window.addEventListener('resize', this.onWindowResize, false);
        // document.addEventListener('keypress', (event: KeyboardEvent) => {
        //     switch (event.key) {
        //         case "q": this.toggleFullWidth(); break;
        //         case "w": this.toggleFullWindow(); break;
        //         case "e": this.toggleFullscreen(); break;
        //     }
        // }, false);

    }

    updateCanvasSize() {
        this.canvasElement.width = this.width
        this.canvasElement.height = this.height
    }

    onWindowResize = () => {
        if (document.fullscreenElement) {
            this.setFullWindow()
        } else {
            switch (this.canvasMode) {
                case "default": this.setCanvasSize(); break;
                case "fullWidth": this.setFullWidth(); break;
                case "fullWindow": this.setFullWindow(); break;
            }
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.canvasElement.requestFullscreen().catch((err) => {
                alert(
                    `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
                );
            });
        } else {
            document.exitFullscreen();
            this.canvasMode = "default"
        }
    }
    toggleFullWindow() {
        if (!document.fullscreenElement) {
            if (this.canvasMode !== "fullWindow") {
                this.setFullWindow()
            } else {
                this.setCanvasSize()
            }
        }
    }
    toggleFullWidth() {
        if (!document.fullscreenElement) {
            if (this.canvasMode !== "fullWidth") {
                this.setFullWidth()
            } else {
                this.setCanvasSize()
            }
        }
    }

    setCanvasSize(width?: number, height?: number) {
        this.width = width ?? this.defaultWidth
        this.height = height ?? this.defaultHeight
        this.updateCanvasSize()
        this.canvasElement.className = "canvasNormal"
        this.canvasMode = "default"
    }
    setFullWidth() {
        const ratio = (this.canvasMode === "fullWindow")
            ? this.defaultWidth / this.defaultHeight
            : this.width / this.height
        this.width = window.innerWidth - 4
        this.height = Math.round(this.width / ratio)
        this.updateCanvasSize()
        this.canvasElement.className = "canvasNormal"
        this.canvasMode = "fullWidth"
    }
    setFullWindow() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.updateCanvasSize()
        this.canvasElement.className = "canvasFullScreen"
        this.canvasMode = "fullWindow"
    }

}