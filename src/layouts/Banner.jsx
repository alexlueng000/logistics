// import { Link } from "react-router-dom";

// import TransferForm from "../components/TransferForm";
// import { Container } from "../components/utils";
// import { checkUser } from "../helpers";

const Banner = () => {
    return (
        <section
            // className="w-full overflow-hidden bg-[#f2f3f9] wow fadeInUp"
            className="relative w-full h-screen overflow-hidden"
        >
            <div
                className="absolute w-full h-full bg-gradient-to-t from-green-200 to-lime-200"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)" }}
            >
                <img
                    src="https://fancytailwind.com/static/764417c1f2d75b88be8b6abc6cb1fdbd/69f5c/work6.jpg"
                    alt=""
                    className="absolute w-full h-full object-cover object-top opacity-20"
                />
            </div>
            <div className="relative flex flex-col justify-center items-center h-screen text-center space-y-15 lg:space-y-20">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-600">
                    超越经验的世界
                    <br />
                    <br />
                    我们赋予其智能的飞机配载、货物打板
                </h1>
                <button className="px-8 py-3 bg-lime-600 text-white text-xl lg:text-2xl rounded-md font-medium hover:bg-green-600 transition duration-300">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Banner;
