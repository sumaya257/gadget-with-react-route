import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={`navbar container mx-auto fixed z-20 backdrop-blur-xl ${isHomePage ? 'bg-[#9538E2] text-white' : 'bg-white text-gray-600'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? "text-white" : isHomePage ? "text-white" : "text-gray-600"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) =>
                                isActive ? "text-[#9538E2]" : isHomePage ? "text-white" : "text-gray-600"
                            }
                        >
                            Statistics
                        </NavLink>
                        <NavLink
                            to='/dashboard'
                            className={({ isActive }) =>
                                isActive ? "text-[#9538E2]" : isHomePage ? "text-white" : "text-gray-600"
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </div>

                {/* Gadget Heaven Link */}
                <NavLink
                    to='/'
                    className={`btn btn-ghost text-xl ${isHomePage ? 'text-white' : 'text-black'}`}
                >
                    Gadget Heaven
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-bold">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? "text-white"
                                : isHomePage ? "text-white" : "text-gray-600"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/statistics'
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#9538E2]"
                                : isHomePage ? "text-white" : "text-gray-600"
                        }
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#9538E2]"
                                : isHomePage ? "text-white" : "text-gray-600"
                        }
                    >
                        Dashboard
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end flex space-x-2">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        `rounded-full p-2 ${isActive ? 'bg-[rgb(149,56,226)]' : 'bg-white'}`
                    }
                >
                    <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500" size="lg" />
                </NavLink>

                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        `rounded-full p-2 ${isActive ? 'bg-[rgb(149,56,226)]' : 'bg-white'}`
                    }
                >
                    <FontAwesomeIcon icon={faHeart} className="text-gray-500" size="lg" />
                </NavLink>
            </div>

        </div>
    );
};

export default NavBar;
