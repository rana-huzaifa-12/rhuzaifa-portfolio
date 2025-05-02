import React from 'react';
import video from "../assets/vid1.mp4";
import { AccordionDemo } from "./ui/Accordion";
import ZdogCanvas from "./ui/ZdogScene";

function Vd() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

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

export default Vd;
