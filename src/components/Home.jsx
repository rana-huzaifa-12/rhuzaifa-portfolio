import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal, Button } from 'antd';
import profilePic from "../assets/blue.jpg";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./home.css"

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open Modal
    const handleModalOpen = () => setIsModalOpen(true);

    // Close Modal
    const handleModalClose = () => setIsModalOpen(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <>
            <section
                className="min-h-200 md:min-h-180 flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white px-4 "
                id="home"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full -mt-50 md:mt-0">
                    {/* Left Side - Text */}
                    <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left mt-20" data-aos="fade-up" data-aos-delay="10">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                            Hey, I'm <span className="text-yellow-300">Rana Huzaifa</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-300">
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    2000,
                                    'React Enthusiast',
                                    2000,
                                    'Tailwind CSS Lover',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-yellow-300 inline-block"
                            />
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 px-12 md:px-0">

                            <TypeAnimation
                                sequence={[
                                    'I am a Front - End Developer who loves building beautiful and responsive web apps using React.',
                                    500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-white inline-block"
                            />

                        </p>

                        <Button
                            type="primary"
                            onClick={handleModalOpen} // Open Modal
                            className="bg-blue-900 text-white px-8 py-3 my-10 rounded-full hover:bg-blue-900 hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            Read More
                        </Button>


                        {/* social media links/icons */}

                        <section className="min-h-10 flex items-center justify-start text-white py-4 hidden md:block mt-20">
                            <div className="flex space-x-6">
                                <a href="https://www.facebook.com/share/1BDt43hqgW/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook
                                        className="text-3xl text-blue-600 transition-all duration-300 hover:scale-110"
                                        style={{
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) =>
                                        (e.currentTarget.style.filter =
                                            "drop-shadow(0 0 3px #3b82f6) drop-shadow(0 0 6px #3b82f6) drop-shadow(0 0 10px #3b82f6)")
                                        }
                                        onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                                    />
                                </a>

                                <a href="https://www.instagram.com/huzaifa_rajput_126?igsh=ZXhjMWhuMDJ0MWdv" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram
                                        className="text-3xl text-pink-600 transition-all duration-300 hover:scale-110"
                                        style={{
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) =>
                                        (e.currentTarget.style.filter =
                                            "drop-shadow(0 0 3px #ec4899) drop-shadow(0 0 6px #ec4899) drop-shadow(0 0 10px #ec4899)")
                                        }
                                        onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                                    />
                                </a>

                                <a href="https://github.com/rana-huzaifa-12" target="_blank" rel="noopener noreferrer">
                                    <FaGithub
                                        className="text-3xl text-white transition-all duration-300 hover:scale-110"
                                        style={{
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) =>
                                        (e.currentTarget.style.filter =
                                            "drop-shadow(0 0 3px #ffffff) drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 10px #ffffff)")
                                        }
                                        onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                                    />
                                </a>

                                <a href="www.linkedin.com/in/rana-huzaifa-29935735b" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin
                                        className="text-3xl text-blue-700 transition-all duration-300 hover:scale-110"
                                        style={{
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) =>
                                        (e.currentTarget.style.filter =
                                            "drop-shadow(0 0 3px #1d4ed8) drop-shadow(0 0 6px #1d4ed8) drop-shadow(0 0 10px #1d4ed8)")
                                        }
                                        onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                                    />
                                </a>


                            </div>
                        </section>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full  sm:ml-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3 hover:bg-blue-900 hover:scale-105 transition-all duration-300 ease-in-out shadow-sm shadow-black">
                            <a
                                href="/MyResume.pdf"
                                download>
                                Download Resume
                            </a>
                        </button>




                    </div>

                    {/* Right Side - Profile Picture */}
                    <div className="md:w-1/2 flex justify-center md:ml-24">
                        <img
                            src={profilePic}
                            alt="Huzaifa"
                            className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 md:mt-12 object-cover rounded-full border-4 border-purple-300 shadow-lg shadow-black hover:shadow-xl hover:translate-y-1 transition-transform duration-900 spinning-border"
                            data-aos="fade-up"
                            data-aos-delay="10"
                        />
                    </div>
                </div>
            </section>

            {/* Modal for more information */}
            <Modal
                title="About Me"
                centered
                open={isModalOpen}
                onOk={handleModalClose} // Close Modal
                onCancel={handleModalClose} // Close Modal
                width={1000}
            >
                <p>This is a more detailed introduction about Rana Huzaifa.</p>
                <p>I specialize in building beautiful, responsive apps with React and Tailwind CSS.</p>
                <p>Currently diving deeper into front-end frameworks, animations, and performance optimization!</p>
            </Modal>
        </>
    );
};

export default Home;
