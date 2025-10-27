import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaUndo, FaRedo } from "react-icons/fa"; 
import "./DrawCanvas.css";

export default function DrawingCanvas() {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("black");

  const drawing = location.state;

  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);


  useEffect(() => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = drawing.img;

    img.onload = () => {
      const maxWidth = window.innerWidth * 0.95;
      const maxHeight = window.innerHeight * 0.75;
      const scale = Math.min(maxWidth / img.width, maxHeight / img.height, 1);

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 3;
      ctx.strokeStyle = color;
      ctxRef.current = ctx;


      ctx.globalAlpha = 0.2;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      saveHistory(); 
    };
  }, [drawing]);

  const saveHistory = () => {
    const url = canvasRef.current.toDataURL();
    setHistory((prev) => [...prev, url]);
    setRedoStack([]);
  };

  const startDraw = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const stopDraw = () => {
    if (isDrawing) saveHistory();
    setIsDrawing(false);
    ctxRef.current.closePath();
  };

  const undo = () => {
    if (history.length <= 1) return;
    const newHistory = [...history];
    const last = newHistory.pop();
    setHistory(newHistory);
    setRedoStack((prev) => [last, ...prev]);

    const img = new Image();
    img.src = newHistory[newHistory.length - 1];
    img.onload = () => {
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxRef.current.drawImage(img, 0, 0);
    };
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const [first, ...rest] = redoStack;
    const img = new Image();
    img.src = first;
    img.onload = () => {
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxRef.current.drawImage(img, 0, 0);
    };
    setRedoStack(rest);
    setHistory((prev) => [...prev, first]);
  };

  const colors = [
    "black","gray","brown","red","orange","yellow",
    "green","lime","blue","skyblue","purple","pink",
    "violet","magenta","gold","white",
  ];

  return (
    <div className="drawing-canvas-page">

      <div className="canvas-toolbar" style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
        <button className="undo-btn" onClick={undo}><FaUndo /></button>
        <button className="redo-btn" onClick={redo}><FaRedo /></button>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </div>

      
      <div className="color-palette">
        {colors.map((c) => (
          <button
            key={c}
            className={`color-btn ${color === c ? "active" : ""}`}
            style={{
              backgroundColor: c,
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "2px solid #333",
              cursor: "pointer",
            }}
            onClick={() => {
              setColor(c);
              if (ctxRef.current) ctxRef.current.strokeStyle = c;
            }}
          ></button>
        ))}
      </div>

      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
        />
      </div>
    </div>
  );
}
