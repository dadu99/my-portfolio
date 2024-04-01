import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoDB from '../../assets/dbLogo.jpg'
import { Link } from "react-scroll";
import $ from "jquery"

export function NavBar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
        id: 1,
        link: "home",
    },
        {
        id: 2,
        link: "about",
    },
        {
        id: 3,
        link: "portfolio",
    },
        {
        id: 4,
        link: "experience",
    },
        {
        id: 5,
        link: "contact",
    },
    ];

    function handleMenuLink () {
        setNav(!nav);
    }
    function handleHamburger() {
        setNav(!nav);
        $('body').css('overflow', $('body').css('overflow') == 'hidden' ? 'auto' : 'hidden');
    }

  return (
    <>
    <header className="flex justify-between items-center z-[100] w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <img src={logoDB} alt="Logo Darius" className="object-fit relative h-20 z-50"  /> 
        </div>

        <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize relative z-50 font-medium text-gray-500 hover:scale-105 duration-200 hover:underline decoration-teal-500">
                <Link to={link} smooth duration={500}>
                {link}
            </Link>
            </li>
        ))}
        </ul>

        <div onClick={handleHamburger}
            className="cursor-pointer pr-4 relative z-[105] text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute z-[100] top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
                <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link onClick={handleMenuLink}
                        to={link}
                        smooth
                        duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    )}
    </header>
    </>
    
);
}

export default NavBar