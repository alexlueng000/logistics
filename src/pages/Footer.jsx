import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-5 sm:py-10 px-4 bg-write-800">
            {/* Container */}
            <h2 className="sr-only">Footer</h2>
            <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
                {/* :SITE NAME & SOCIAL NETWORKS */}
                <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
                    {/* ::Site name */}
                    <h1 className="font-title text-4xl text-center font-semibold mt-auto">
                        Fancy Footer 1
                    </h1>
                    {/* ::Social & copyright */}
                    <div className="mt-auto flex flex-col items-center">
                        {/* :::Social */}
                        <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
                            {/* Facebook */}
                            <a href="#link" className="text-gray-200">
                                <span className="sr-only">Facebook</span>
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                        </span>
                        {/* :::Copyright */}
                        <span className="py-4 text-xs">
                            &copy;2021, Fancy Tailwind All Rights Reserved.
                        </span>
                    </div>
                    {/* ::Mobile separator line */}
                    <span
                        className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2"
                        aria-hidden="true"
                    />
                </div>

                {/* :NAVIGATION */}
                <div className="grid grid-cols-2 gap-5 text-gray-400">
                    {/* ::Navigation */}
                    <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
                        <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-500 font-bold tracking-wide">
                            Navigation
                        </h3>
                        <nav className="flex justify-around md:flex-col font-medium list-none">
                            <li>
                                <a href="#link" className="hover:text-gray-200">
                                    Home
                                </a>
                            </li>
                        </nav>
                    </div>
                    {/* ::Address */}
                    <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
                        <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
                            Address
                        </h3>
                        <p className="md:w-48 text-center sm:text-left text-lg md:text-xl font-medium">
                            101 Paradise Road, 97460 Fancy Island REUNION
                        </p>
                    </div>
                    {/* ::Email */}
                    <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
                        <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
                            Fancy Company
                        </h3>
                        <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="#email">fancytailwind@paradise.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
