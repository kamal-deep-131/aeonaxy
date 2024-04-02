import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="relative flex items-center justify-between bg-myBlue py-2 px-4 border-b-[1px] border-white">
            <a href="/" className="flex items-center justify-center gap-2 z-10">
                <img src="/favicon.svg" alt="Logo" width={40} className={`${isOpen ? "" : "invert"}`} />
                <div className={`text-lg md:2xl font-heading-font font-bold ${isOpen ? "text-black" : "text-white"}`}>
                    Medium
                </div>
            </a>
            <nav>
                <ul className={`absolute md:static 
                w-full ${isOpen ? "top-0" : "-top-[100vh]"}  right-0 flex flex-col md:flex-row bg-white text-black md:bg-myBlue items-center p-5 md:p-0 justify-center gap-6 h-96 md:h-0 md:gap-3 text-base md:text-white`}>
                    <li>
                        <a href="#">Our Story</a>
                    </li>
                    <li>
                        <a href="#">Membership</a>
                    </li>
                    <li>
                        <a href="#">Write</a>
                    </li>
                    <li>
                        <a href="3">Sign In</a>
                    </li>
                    <li>
                        <Button text="Get unlimted access" theme="dark" size="sm" />
                    </li>

                </ul>
            </nav>
            <button onClick={toggleMenu} className="text-white md:hidden text-2xl z-10">
                {isOpen ? <FontAwesomeIcon className="text-black" icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
        </header>
    );
};

export default Navbar;
