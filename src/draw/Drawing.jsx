import { useRef, useState, useEffect } from "react";
import "./Drawing.css";

export default function Drawing() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [painting, setPainting] = useState(false);
    const [color, setColor] = useState("#ff6347");
    const [brushSize, setBrushSize] = useState(5);
    const [tool, setTool] = useState("pencil"); 

    const [history, setHistory] = useState([]);
    const [historyStep, setHistoryStep] = useState(-1);

    const colors = [
        "#ff6347", "#ffb347", "#ffd700", "#90ee90",
        "#00ced1", "#1e90ff", "#c71585", "#8b4513",
        "#ff69b4", "#ffa500", "#7fffd4", "#00fa9a",
        "#9400d3", "#f08080", "#add8e6", "#ffa07a",
        "#8a2be2", "#00ff7f", "#ff4500", "#ff1493",
        "#00bfff", "#daa520", "#ffdead", "#4b0082"
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 800;
        canvas.height = 500;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctxRef.current = ctx;

        saveHistory();
    }, []);

    const startPosition = (e) => {
        setPainting(true);
        draw(e);
    };

    const finishedPosition = () => {
        setPainting(false);
        ctxRef.current.beginPath();
        saveHistory();
    };

    const draw = (e) => {
        if (!painting) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ctx = ctxRef.current;

        if (tool === "pencil") {
            ctx.globalAlpha = 1;
            ctx.lineWidth = brushSize;
            ctx.strokeStyle = color;
        } else if (tool === "marker") {
            ctx.globalAlpha = 0.4;
            ctx.lineWidth = brushSize * 2;
            ctx.strokeStyle = color;
        } else if (tool === "glitter") {
            ctx.globalAlpha = 0.9;
            ctx.lineWidth = brushSize;
            ctx.strokeStyle = color;
            for (let i = 0; i < 5; i++) {
                const offsetX = x + Math.random() * 10 - 5;
                const offsetY = y + Math.random() * 10 - 5;
                ctx.beginPath();
                ctx.moveTo(offsetX, offsetY);
                ctx.lineTo(offsetX + 1, offsetY + 1);
                ctx.stroke();
            }
            return;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const saveHistory = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL();
        const newHistory = history.slice(0, historyStep + 1);
        newHistory.push(dataUrl);
        setHistory(newHistory);
        setHistoryStep(newHistory.length - 1);
    };

    const undo = () => {
        if (historyStep <= 0) return;
        const ctx = ctxRef.current;
        const newStep = historyStep - 1;
        const img = new Image();
        img.src = history[newStep];
        img.onload = () => {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(img, 0, 0);
            setHistoryStep(newStep);
        };
    };

    const redo = () => {
        if (historyStep >= history.length - 1) return;
        const ctx = ctxRef.current;
        const newStep = historyStep + 1;
        const img = new Image();
        img.src = history[newStep];
        img.onload = () => {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(img, 0, 0);
            setHistoryStep(newStep);
        };
    };

    const clearCanvas = () => {
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        saveHistory();
    };

    return (
        <>
        <div className="heading7"><h2>Drawing</h2></div>
        <div className="drawing-container">
            <canvas
                ref={canvasRef}
                onMouseDown={startPosition}
                onMouseUp={finishedPosition}
                onMouseMove={draw}
            />

            <div className="tools-side">
                <h3>Tools</h3>

               
                <div className="tool-buttons">
                    <button
                        onClick={() => setTool("pencil")}
                        className={tool === "pencil" ? "selected-tool" : ""}
                    >
                        Pencil
                    </button>
                    <button
                        onClick={() => setTool("marker")}
                        className={tool === "marker" ? "selected-tool" : ""}
                    >
                        Marker
                    </button>
                    <button
                        onClick={() => setTool("glitter")}
                        className={tool === "glitter" ? "selected-tool" : ""}
                    >
                        Glitter
                    </button>
                </div>

               
                <div className="palette">
                    {colors.map((c) => (
                        <div
                            key={c}
                            className={`color-block ${color === c ? "selected" : ""}`}
                            style={{ backgroundColor: c }}
                            onClick={() => setColor(c)}
                        ></div>
                    ))}
                </div>

               
                <label>
                    Brush Size:
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={brushSize}
                        onChange={(e) => setBrushSize(e.target.value)}
                    />
                </label>
                <div className="clear-undo-redo-container">
                    <div className="clear-undo-redo">
                        <div>
                            <div style={{ textAlign: "center", fontSize: "1rem" }}>Undo</div>
                            <button className="icon-btn" onClick={undo}>⎌</button>
                        </div>
                        <div>
                            <div style={{ textAlign: "center", fontSize: "1rem" }}>Redo</div>
                            <button className="icon-btn" onClick={redo}>⎘</button>
                        </div>
                        <div>
                            <div style={{ textAlign: "center", fontSize: "1rem" }}>Clear</div>
                            <button className="clear-btn" onClick={clearCanvas}>✖</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </>
    );
}
