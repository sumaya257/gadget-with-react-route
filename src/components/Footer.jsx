import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-500 p-10 text-center">
            <div>
                <h1 className="text-3xl font-bold text-black">Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
                <div className="border my-5"></div>
            </div>
            <div className="footer flex flex-col md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-32">
                <nav className="text-center">
                    <h6 className="footer-title text-black">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-center">
                    <h6 className="footer-title text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-center">
                    <h6 className="footer-title text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
