import React from 'react';
import './skills.css';
import { TypeAnimation } from 'react-type-animation';
import profilePic from "../assets/1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import htmlImg from '../assets/h5.jpeg';
import cssImg from '../assets/css333.jpeg';
import jsImg from '../assets/js333333.jpeg';
import reactImg from '../assets/react5.jpeg';
import bootstrapImg from '../assets/bs5.jpeg';
import tailwindImg from '../assets/tailwind.jpeg';

const skillsData = [
    {
        img: htmlImg,
        title: 'HTML',
        description: 'Markup language for structuring web content.\nComfortable with semantic elements.',
    },
    {
        img: cssImg,
        title: 'CSS',
        description: 'Used for styling responsive layouts.\nProficient in Flexbox and CSS Grid.',
    },
    {
        img: jsImg,
        title: 'JavaScript',
        description: 'Used for interactivity and dynamic content.\nGood knowledge of ES6+ features.',
    },
    {
        img: reactImg,
        title: 'React.js',
        description: 'Built several single-page apps.\nFamiliar with hooks, context API, and routing.',
    },
    {
        img: bootstrapImg,
        title: 'Bootstrap',
        description: 'CSS framework for responsive, mobile-first web design.\nComfortable with grid system and components.',
    },
    {
        img: tailwindImg,
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework for building custom designs.\nExperienced with responsive design utilities.',
    },
];

function Skills() {
    return (
        <section className="min-h-screen pt-34 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 pb-20" id='skills' >
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12" data-aos="fade-up">
                Skills
            </h2>

            {/* circular frames skills */}

            <div className="flex flex-wrap justify-center gap-8 mt-32" data-aos="fade-up" data-aos-delay="300">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white shadow-2xl shadow-black p-4 transform hover:scale-105 transition duration-300 mb-20"
                    >
                        <div
                            className="w-20 h-16 rounded-full bg-cover bg-center "
                            style={{ backgroundImage: `url(${skill.img})` }}
                            title={skill.title}
                        ></div>
                        <h4 className="text-lg font-bold text-gray-800">{skill.title}</h4>
                    </div>
                ))}
            </div>

            {/* typing animation */}

            <h3 className="text-2xl font-bold text-center text-yellow-300 mt-20 mb-12" >

                <TypeAnimation
                    sequence={[
                        'Swipe Right to See Details',
                        2000,
                        'hey user!',
                        2000,
                        'Swipe Right to See Details',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-yellow-300 inline-block"
                />

            </h3>

            {/* horizontal scrolling cards */}

            <div
                className="flex flex-col md:flex-row gap-6 md:gap-4 items-center md:items-stretch md:overflow-x-scroll scrollbar-hidden mt-12"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-row w-full max-w-2xl flex-shrink-0 bg-white rounded-2xl shadow-lg transition-transform duration-300 "
                    >
                        {/* Image Section */}
                        <div
                            className="w-32 sm:w-40 h-32 sm:h-auto bg-cover bg-center rounded-l-2xl"
                            style={{ backgroundImage: `url(${skill.img})` }}
                            title={skill.title}
                        />

                        {/* Text Section */}
                        <div className="flex flex-col justify-between p-4 w-full">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900">{skill.title}</h3>
                                <p className="text-base text-gray-700 whitespace-pre-line">{skill.description}</p>
                            </div>
                            <div className="flex items-center">
                                <img
                                    src={profilePic}
                                    alt={skill.title}
                                    className="w-10 h-10 rounded-full mr-4 object-cover"
                                />
                                <div className="text-sm">
                                    <p className="text-gray-900 font-medium">Rana Huzaifa</p>
                                    <p className="text-gray-600">Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    );
}

export default Skills;
