import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState(''); // NEW state to store the submitted name

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(formData.name); // Save the name before clearing
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Now clear the form
    };

    return (
        <div className="min-h-screen bg-purple-900">
            <section id="contact" className="bg-purple-800">
                <div className="p-8 bg-gray-800 text-white rounded-lg shadow-xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>

                    {/* Contact Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        {/* Box 1 */}
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out">
                            <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">Development</h3>
                            <p className="text-gray-300 leading-relaxed text-center">
                                With a strong passion for modern web technologies, I specialize in building high-performance,
                                fully responsive websites and applications. My expertise spans across React.js, Tailwind CSS,
                                JavaScript, and UI/UX best practices.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out">
                            <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">Future Goal</h3>
                            <p className="text-gray-300 leading-relaxed text-center">
                                My dream is to become a highly skilled MERN Stack Developer, mastering MongoDB, Express.js, React.js, and Node.js.
                                I am committed to building dynamic, full-stack web applications.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out">
                            <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Connect with Me</h3>
                            <div className="text-gray-300 leading-relaxed text-left space-y-4">
                                <div><strong className="text-purple-400">Instagram:</strong> Follow my creative side!</div>
                                <div><strong className="text-purple-400">GitHub:</strong> Check out my projects.</div>
                                <div><strong className="text-purple-400">LinkedIn:</strong> Connect professionally.</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mt-10 bg-gray-700 p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold text-center text-purple-400 mb-4">Send a Message</h3>

                        {isSubmitted && (
                            <div className="mb-4 p-4 text-center bg-purple-600 text-white rounded">
                                Thank you <span className="font-bold text-yellow-300">{submittedName}</span> for reaching out! I'll get back to you as soon as possible.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-3 w-full rounded-md bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-3 w-full rounded-md bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="mt-1 p-3 w-full rounded-md bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                                ></textarea>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center text-gray-300">
                        <h3 className="text-3xl font-bold mb-4 text-center text-purple-400 py-4">Get In Touch</h3>

                        <div className="flex flex-wrap justify-center space-x-10 mt-4 hover:underline">
                            <a href='tel:+923245898647' className="mb-4"><strong className="text-purple-400">Phone:</strong> +92 3245898647</a>
                            <div className="mb-4">
                                <strong className="text-purple-400">Email:</strong>
                                <a href="mailto:ranarajpoot1266@gmail.com" className="text-white hover:underline"> ranarajpoot1266@gmail.com</a>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <section className="min-h-10 flex items-center justify-center text-white hidden md:flex py-2">
                            <div className="flex space-x-6">
                                <a href="https://www.facebook.com/share/1BDt43hqgW/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-3xl text-blue-600 transition-all duration-300 hover:scale-110" />
                                </a>
                                <a href="https://www.instagram.com/huzaifa_rajput_126?igsh=ZXhjMWhuMDJ0MWdv" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-3xl text-pink-600 transition-all duration-300 hover:scale-110" />
                                </a>
                                <a href="https://github.com/rana-huzaifa-12" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-3xl text-white transition-all duration-300 hover:scale-110" />
                                </a>
                                <a href="https://www.linkedin.com/in/rana-huzaifa-29935735b" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-3xl text-blue-700 transition-all duration-300 hover:scale-110" />
                                </a>
                            </div>
                        </section>

                        <div className="mt-8 text-center text-gray-400 text-sm">
                            <p>&copy; 2025 <span className="text-purple-400">RANA HUZAIFA</span> All Rights Reserved.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
