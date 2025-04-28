import React, { useEffect, useRef } from "react";
import Zdog from "zdog";

const ZdogScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        let isSpinning = true;

        const resizeCanvas = () => {
            const size = Math.min(window.innerWidth, window.innerHeight) * 0.6;
            canvas.width = size;
            canvas.height = size;

            const illo = new Zdog.Illustration({
                element: canvas,
                dragRotate: true,
                onDragStart: () => {
                    isSpinning = false;
                },
            });

            // Clear previous children
            illo.children = [];

            // Add circle
            new Zdog.Ellipse({
                addTo: illo,
                diameter: size * 0.35,
                translate: { z: size * 0.1 },
                stroke: size * 0.08,
                color: "#636",
            });

            // Add square
            new Zdog.Rect({
                addTo: illo,
                width: size * 0.35,
                height: size * 0.35,
                translate: { z: -size * 0.1 },
                stroke: size * 0.03,
                color: "#E62",
                fill: true,
            });

            function animate() {
                if (isSpinning) {
                    illo.rotate.y += 0.03;
                }
                illo.updateRenderGraph();
                requestAnimationFrame(animate);
            }

            animate();
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <canvas ref={canvasRef} className="max-w-full h-auto" />
        </div>
    );
};

export default ZdogScene;
