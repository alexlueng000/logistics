// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { HiMenu } from "react-icons/hi";
// import { HiBeaker } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

import { Container } from "../components/utils";
// import {  logout } from "../helpers";
// import { checkUser, logout } from "../helpers";

const Nav = () => {
    // const navigate = useNavigate();
    // const handleClick = e => {
    //     e.preventDefault();
    //     logout(navigate);
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 100);
    // };

    return (
        <nav className="text-gray-600 p-2 sm:p-0 text-base xl:text-lg font-medium bg-white py-4 lg:py-[1.1rem] xl:py-8 border-b shadow-sm fixed w-full z-50">
            <Container className="flex items-center justify-between py-2 xl:py-0">
                <div>
                    <img src="/images/OLINTEK-LOGO-PNG.png" alt="logo" className="w-24" />
                </div>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center space-x-12">
                        <div className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                            <Link to="#personal" className="mr-8 hover:text-gray-300">
                                我们的产品
                            </Link>
                            <Link to="#business" className="mr-8 hover:text-gray-300">
                                我们的公司
                            </Link>
                            <Link to="#how-it-work" className="mr-8 hover:text-gray-300">
                                我们的支持
                            </Link>
                        </div>
                    </div>
                    <Link
                        to="/register"
                        className="block w-full rounded px-10 py-2 bg-lime-600 text-md font-large text-gray-100 shadow focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                    >
                        试用申请
                    </Link>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;
