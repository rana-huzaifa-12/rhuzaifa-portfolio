import React from 'react';
import video from "../assets/vid1.mp4";
import { AccordionDemo } from "./ui/Accordion";
import ZdogCanvas from "./ui/ZdogScene";

function Vd() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
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
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full overflow-x-auto ">
                {/* Heading */}
                <h1 className="text-white text-4xl md:text-5xl ml-4 md:ml-0 font-bold mb-4 pt-26" data-aos="fade-up" data-aos-delay="100">
                    Front-End Development
                </h1>

                <div className="w-full h-full flex flex-col md:flex-row justify-center items-center px-4 gap-4 max-w-screen">
                    {/* Left - Accordion */}
                    <div className="w-full md:w-[500px] flex items-center justify-center p-4">
                        <div data-aos="fade-up" data-aos-delay="200">
                            <AccordionDemo />
                        </div>
                    </div>

                    {/* Right - Zdog */}
                    <div className="w-full md:w-[500px] flex items-center justify-center p-4">
                        <div className="w-full max-w-[300px] aspect-square" data-aos="fade-up" data-aos-delay="200">
                            <ZdogCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vd;
