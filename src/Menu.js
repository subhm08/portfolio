import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="fixed  top-4 bg-stone-300/55 backdrop-blur-sm right-2 pt-10 z-10 navigation flex flex-col h-auto w-1/2 rounded-xl  gap-2 p-3 ">
            <Link to="/"><a
                className=" bg-white rounded-lg p-2 text-sm font-semibold w-full flex items-center cursor-pointer">
                <span><i className="bi bi-person text-xl pr-1" /></span>
                <span> About</span>
            </a></Link>
            <Link to="/Certification"><a className=" bg-white rounded-lg p-2 text-sm font-semibold w-full flex items-center cursor-pointer">
                <i className="bi bi-file-earmark-person-fill text-xl " />
                <span> Certification</span>
            </a></Link>
            <Link to="/Projects"><a className=" bg-white rounded-lg p-2 text-sm font-semibold w-full flex items-center cursor-pointer">
                <i className="bi bi-file-earmark-code text-xl " />
                <span> Projects</span>
            </a></Link>
            <Link to="/Contect"><a className=" bg-white rounded-lg p-2 text-sm font-semibold w-full flex items-center cursor-pointer">
                <i className="bi bi-person-plus text-xl " />
               <span> Contect</span>
            </a></Link>
        </div>
    )
}

export default Navigation