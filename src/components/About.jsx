import React from "react";
import "aos/dist/aos.css";
import SplineScene from './ui/SplineScene';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white px-4 py-0"
        >
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">

                <h2 className="text-4xl font-bold mb-6 text-yellow-300">About</h2>

                {/* Profile Picture */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="my-12 w-44 h-44 sm:w-72 sm:h-72 md:w-86 md:h-96 lg:w-[100] lg:h-[100] xl:w-[128] xl:h-[128] rounded-full overflow-hidden shadow-lg shadow-white" data-aos="slide-up" data-aos-delay="100">
                        <SplineScene
                            scene="https://prod.spline.design/T4H29oIgqfOONzXs/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>

                {/* Animated Text */}
                <div className="bg-gradient-to-r from-yellow-900 via-purple-900 to-yellow-800 py-2 rounded-lg shadow-lg sm:h-40 md:h-42 lg:h-44 xl:h-38 xl:w-250" data-aos="slide-up" data-aos-delay="50">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed text-center px-2 sm:px-3 max-w-3xl mx-auto">
                        <TypeAnimation
                            sequence={[
                                "I am Rana Huzaifa, working as a Front-End Developer. I specialize in React and love working with tools like Tailwind CSS, Bootstrap 5, Git, and modern JavaScript. Whether it's creating responsive layouts or adding smooth animations, I aim to build web apps that are both beautiful and functional.",
                                3000,
                                "hey user!",
                                2000,
                                "I am Rana Huzaifa, working as a Front-End Developer. I specialize in React and love working with tools like Tailwind CSS, Bootstrap 5, Git, and modern JavaScript. Whether it's creating responsive layouts or adding smooth animations, I aim to build web apps that are both beautiful and functional.",
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-yellow-300 inline-block"
                        />
                    </p>
                </div>

                {/*  Education Section */}
                <div className="relative mt-20 w-full flex flex-col md:flex-row gap-4" data-aos="fade-up" data-aos-delay="150">
                    {/*  Floating Blobs Background */}
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                        <svg
                            className="absolute top-28 -left-35 w-96 h-96 text-yellow-400 opacity-20 blur-2xl animate-pulse z-100"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M48.2,-63.4C60.2,-53.7,66.4,-36.5,66.2,-21C66,-5.5,59.5,8.3,52.8,22.5C46.1,36.7,39.3,51.3,27.7,59.6C16.1,68,-0.2,70.2,-15.3,66.4C-30.3,62.5,-44.1,52.7,-53.1,39.9C-62.1,27.1,-66.4,11.3,-66.6,-4.9C-66.8,-21.1,-62.9,-37.7,-52.7,-47.7C-42.4,-57.7,-25.8,-61,-9,-63.4C7.8,-65.8,15.6,-67.1,48.2,-63.4Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <svg
                            className="absolute top-34 -left-35 w-96 h-96 text-pink-800 opacity-20 blur-2xl animate-pulse z-100"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M48.2,-63.4C60.2,-53.7,66.4,-36.5,66.2,-21C66,-5.5,59.5,8.3,52.8,22.5C46.1,36.7,39.3,51.3,27.7,59.6C16.1,68,-0.2,70.2,-15.3,66.4C-30.3,62.5,-44.1,52.7,-53.1,39.9C-62.1,27.1,-66.4,11.3,-66.6,-4.9C-66.8,-21.1,-62.9,-37.7,-52.7,-47.7C-42.4,-57.7,-25.8,-61,-9,-63.4C7.8,-65.8,15.6,-67.1,48.2,-63.4Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <svg
                            className="absolute top-64 -left-35 w-96 h-96 text-purple-400 opacity-20 blur-2xl animate-pulse z-100"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M48.2,-63.4C60.2,-53.7,66.4,-36.5,66.2,-21C66,-5.5,59.5,8.3,52.8,22.5C46.1,36.7,39.3,51.3,27.7,59.6C16.1,68,-0.2,70.2,-15.3,66.4C-30.3,62.5,-44.1,52.7,-53.1,39.9C-62.1,27.1,-66.4,11.3,-66.6,-4.9C-66.8,-21.1,-62.9,-37.7,-52.7,-47.7C-42.4,-57.7,-25.8,-61,-9,-63.4C7.8,-65.8,15.6,-67.1,48.2,-63.4Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>

                    {/* Left: Heading */}
                    <div className="relative md:w-1/4 w-full flex justify-center items-center">
                        <h3 className="text-3xl font-bold text-yellow-300 yellow-300 bg-transparent bg-opacity-30 backdrop-blur-2xl rounded-br-2xl rounded-tl-2xl p-4 border-white border-1 md:p-10 md:mr-20">
                            Education
                        </h3>
                    </div>

                    {/* Right: Degrees */}
                    <div className="relative md:w-3/4 w-full flex flex-col gap-8 z-10">
                        {/* Degree 1 */}
                        <div
                            className="shadow-yellow-400/10 text-white rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-2 transition-all duration-300 border border-white-400/20"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h4 className="text-xl font-semibold text-yellow-200 mb-1">Bachelor in Computer Science</h4>
                            <p className="text-md text-purple-200 mb-1">Education University, 2023 - 2027</p>
                            <p className="text-md text-gray-300">Focus on Front-End Development, JavaScript, React.js.</p>
                        </div>

                        {/* Degree 2 */}
                        <div
                            className="shadow-yellow-400/10 text-white rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-2 transition-all duration-300 border border-white-400/20"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h4 className="text-xl font-semibold text-yellow-200 mb-1">Intermediate in Pre-Engineering</h4>
                            <p className="text-md text-purple-200">Punjab Group of Colleges, 2021 - 2023</p>
                        </div>

                        {/* Degree 3 */}
                        <div
                            className="shadow-yellow-400/10 text-white rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-2 transition-all duration-300 border border-white-400/20"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h4 className="text-xl font-semibold text-yellow-200 mb-1">Matriculation in Science</h4>
                            <p className="text-md text-purple-200">Islamia School, 2019 - 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
