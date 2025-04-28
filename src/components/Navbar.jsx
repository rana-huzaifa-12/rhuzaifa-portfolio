import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../assets/whitebg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./nav.css";
import Dropdown from "./Dropdown"; // 👈 make sure this import exists

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    const navLinks = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "skills", label: "Skills" },
        { to: "projects", label: "Projects" },
        { to: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-gray-900 shadow-md shadow-purple-300 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Portfolio Logo"
                        className="h-10 rounded-full cursor-pointer"
                    />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <div className="nav2 group relative" key={link.to}>
                                <h4 className="inline-block">
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="text-purple-500 cursor-pointer"
                                    >
                                        {link.label}
                                    </Link>
                                </h4>
                                {/* Dropdown on hover */}
                                <Dropdown options={["Nothing ", "Here"]} />
                            </div>
                        ))}
                    </div>

                    {/* Hamburger for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? (
                                <X size={32} color="#a855f7" />
                            ) : (
                                <Menu size={32} color="#a855f7" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Slide-in Menu from Right */}
            <div
                className={`md:hidden fixed top-16 right-0 w-4/4  bg-gray-900 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={1200}
                            offset={-70}
                            className="block text-white cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
