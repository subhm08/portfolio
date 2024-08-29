import React from "react";
import Contect from './component/Contect'
import About from './component/About'
import Resume from './component/Certification'
import { Projects } from './component/Projects'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="hidden navigation bg-gray-200 md:mr-12 md:mt-24 px-3 py-8 md:flex flex-col h-fit w-auto rounded-xl gap-2 justify-between">
            <Link to="/"><button
                className=" bg-white rounded-lg p-2 text-sm font-semibold w-full ">
                <i className="bi bi-person text-xl block" />
                About
            </button></Link>
            <Link to="/Certification"><button className=" bg-white rounded-lg p-2 text-sm font-semibold w-full ">
                <i className="bi bi-file-earmark-person-fill text-xl block" />
                Certification
            </button></Link>
            <Link to="/Projects"><button className=" bg-white rounded-lg p-2 text-sm font-semibold w-full " >
                <i className="bi bi-file-earmark-code text-xl block" />
                Projects
            </button></Link>
            <Link to="/Contect"><button className=" bg-white rounded-lg p-2 text-sm font-semibold w-full " >
                <i className="bi bi-person-plus text-xl block" />
                Contect
            </button></Link>
        </div>
    )
}

export default Navigation