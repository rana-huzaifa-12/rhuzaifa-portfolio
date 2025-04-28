import React from "react";

const Dropdown = ({ options }) => {
    return (
        <div className="relative group inline-block">
            <div
                className="absolute -right-4 mt-4 w-auto min-w-[130px] bg-white text-purple-900 rounded-lg shadow-lg shadow-black z-50
                opacity-0 invisible transform -translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-300 ease-in py-4 text-md font-bold  "
            >
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="p-2 hover:bg-purple-700 hover:text-white transition-all duration-300 ease-in text-center"
                    >
                        <p>{option}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
