import React from "react";

const projects = [
    {
        "title": "Quick Bite - Food Delivery ",
        "description": "Quick Bite is a user-friendly food delivery web application built with React.js, Redux.",
        "link": "https://quick-bite-126.netlify.app/"
    }
    ,
    {
        title: "To-Do List App",
        description: "A simple task management app built with React and Tailwind CSS.",
        link: "https://to-do-app-126.netlify.app/",
    },
    {
        title: "Quote Generator",
        description: "Random motivational quotes using an API with smooth transitions.",
        link: "https://github.com/rana-huzaifa-12/Daiy-Quotes",
    },
    {
        title: "BMI Calculator",
        description: "A simple Body Mass Index calculator built with React and styled-components.",
        link: "https://bmi-calculator-126.netlify.app/",
    },
    {
        title: "Weather App",
        description: "Get real-time weather updates using a weather API, built with React.",
        link: "https://check-weather-126.netlify.app/",
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio to showcase skills and projects using React.",
        link: "https://rana-huzaifa-portfolio.netlify.app/",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-gray-800 pb-20 pt-10 px-6"
        >
            <div className="max-w-6xl mx-auto text-center" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-4xl font-bold mb-10 py-20 text-yellow-400">My Projects</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-2xl shadow-yellow-400/10 text-white rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-2 hover:border-2 transition-all ease-in-out duration-300 border border-white/40"

                        >
                            <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-200 hover:text-yellow-300"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
}

export default Projects;
