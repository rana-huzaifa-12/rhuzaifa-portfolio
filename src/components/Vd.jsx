import React from 'react';

import { AccordionDemo } from "./ui/Accordion";
import ZdogCanvas from "./ui/ZdogScene";
// Import all images
import nature1 from "../assets/nature1.jpg";
import nature2 from "../assets/nature2.jpg";
import nature3 from "../assets/nature3.jpg";
import nature4 from "../assets/nature4.jpg";

function Vd() {
    return (
        <div
            className="w-full min-h-3/5  bg-cover bg-center animate-background relative"
            style={{
                backgroundImage: `url(${nature1})`, // Initial background image
                animation: "backgroundChange 16s infinite", // Apply the animation
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-75"></div> {/* Dark overlay */}

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 py-30">
                {/* Heading */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
                    Front-End Development
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-6 mt-10">
                    {/* Left - Accordion */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <AccordionDemo />
                    </div>

                    {/* Right - Zdog */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full max-w-[300px] aspect-square">
                            <ZdogCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// CSS Keyframe Animation in the Same Component
const style = document.createElement("style");
style.innerHTML = `
@keyframes backgroundChange {
    0% { background-image: url(${nature1}); }
    25% { background-image: url(${nature2}); }
    50% { background-image: url(${nature3}); }
    75% { background-image: url(${nature4}); }
    100% { background-image: url(${nature1}); }
}
`;
document.head.appendChild(style);

export default Vd;
