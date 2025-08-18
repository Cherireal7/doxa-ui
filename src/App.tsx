import { Link } from "react-router-dom";
import hexagon from "../public/images/hexagon.svg";
import logo from "../public/images/logo.png";

export default function Home() {
    return (
        <div className={`h-full flex flex-col mt-5 md:mt-10 gap-5 z-50 relative bg-black`}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-white text-center leading-[140%] md:leading-[120%]">
                Doxa Innovations <br />
                <strong className="text-white text-2xl sm:text-4xl md:text-5xl">
                    UI Library
                </strong>
            </h1>

            <div className="flex flex-col items-center md:mt-0 relative z-50">
                {/* Top row (2) */}
                <div className="grid grid-flow-col col-span-2 w-fit -mb-5 md:-mb-4 gap-2">
                    <Link
                        to="/ui/core"
                        aria-label="Core"
                        className="relative w-24 md:w-28 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition ease-in-out duration-200"
                    >
                        <img className="w-24 md:w-28 z-20" src={hexagon} alt="" />
                        <p className="absolute z-30 flex justify-center w-24 md:w-28 top-1/2 transform -translate-y-1/2 text-base md:text-xl text-white">
                            Core
                        </p>
                    </Link>

                    <Link
                        to="/ui/components"
                        aria-label="Components"
                        className="relative w-24 md:w-28 cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition ease-in-out duration-200"
                    >
                        <img className="w-24 md:w-28 z-20" src={hexagon} alt="" />
                        <p className="absolute z-30 flex justify-center w-24 md:w-28 top-1/2 transform -translate-y-1/2 text-base md:text-lg text-white">
                            Components
                        </p>
                    </Link>
                </div>

                {/* Middle row (3) with center logo */}
                <div className="grid grid-flow-col col-span-3 gap-2">
                    <Link
                        to="/ui/blocks"
                        aria-label="Blocks"
                        className="relative w-24 md:w-28 cursor-pointer hover:-translate-x-1 transition ease-in-out duration-200"
                    >
                        <img className="w-24 md:w-28 z-20" src={hexagon} alt="" />
                        <p className="absolute z-30 flex justify-center w-24 md:w-28 top-1/2 transform -translate-y-1/2 text-base md:text-xl text-white">
                            Blocks
                        </p>
                    </Link>

                    {/* Center logo (static) */}
                    <div className="relative w-24 md:w-28 select-none">
                        <img
                            className="absolute z-40 flex justify-center w-full p-3 top-1/2 transform -translate-y-1/2"
                            src={logo}
                            alt="Doxa Innovations Logo"
                        />
                        {/* Decorative hexagon background (optional) */}
                        <img className="w-24 md:w-28 opacity-0" src={hexagon} alt="" />
                    </div>

                    <Link
                        to="/ui/layouts"
                        aria-label="Layouts"
                        className="relative w-24 md:w-28 cursor-pointer hover:translate-x-1 transition ease-in-out duration-200"
                    >
                        <img className="w-24 md:w-28 z-20" src={hexagon} alt="" />
                        <p className="absolute z-30 flex justify-center w-24 md:w-28 top-1/2 transform -translate-y-1/2 text-base md:text-xl text-white">
                            Layouts
                        </p>
                    </Link>
                </div>

                {/* Bottom row (2) */}
                <div className="grid grid-flow-col col-span-2 w-fit -mt-3 gap-2">
                    <Link
                        to="/ui/special"
                        aria-label="Special"
                        className="relative w-24 md:w-28 cursor-pointer hover:-translate-x-1 hover:translate-y-1 transition ease-in-out duration-200"
                    >
                        <img className="w-24 md:w-28 z-20" src={hexagon} alt="" />
                        <p className="absolute z-30 flex justify-center w-24 md:w-28 top-1/2 transform -translate-y-1/2 text-base md:text-xl text-white">
                            Special
                        </p>
                    </Link>

                    <Link
                        to="/ui/utils"
                        aria-label="Utils"
                        className="relative w-24 md:w-28 cursor-pointer hover:translate-x-1 hover:translate-y-1 transition ease-in-out duration-200"
                    >
                        <img className="w-24 md:w-28 z-20" src={hexagon} alt="" />
                        <p className="absolute z-30 flex justify-center w-24 md:w-28 top-1/2 transform -translate-y-1/2 text-base md:text-xl text-white leading-tight">
                            Utils
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
