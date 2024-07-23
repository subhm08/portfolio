import React, { Fragment } from "react";

import img from '../image/Photo.jpg';
export const Social = ()=>{
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return(
        <div className="flex gap-1">
                        
                        <i onClick={()=>openInNewTab("https://www.facebook.com/profile.php?id=61555265127994&mibextid=ZbWKwL")}  className="bi bi-facebook cursor-pointer bg-white m-1 rounded-md px-2 py-1"></i>

                        <i onClick={()=>openInNewTab("https://www.linkedin.com/in/shubham-kumar-3b8311199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")} className="bi bi-linkedin cursor-pointer bg-white m-1 rounded-md px-2 py-1"></i>

                        <i onClick={()=>openInNewTab("https://github.com/subhm08")} className="bi bi-github cursor-pointer bg-white m-1 rounded-md px-2 py-1"></i>

                        <i onClick={()=>openInNewTab("https://x.com/__imSubhm?t=MwXDIEX0j635yEHXnMFwsw&s=09")} className="bi bi-twitter-x cursor-pointer bg-white m-1 rounded-md px-2 py-1"></i>
                        
                    </div>
    )
} 

const SideInfo = () => {
    
    return (
        <div>
            <div className=" bg-gray-200 nav ml-12 mt-24 px-7 flex flex-col items-center h-[calc(100vh-12rem)] rounded-xl">
            <div className=" h-36 absolute top-4">
                    <img className=" h-full rounded-xl " src={img} alt="profile" />
                </div>
                <div className="flex flex-col items-center mt-16">
                    <p className=" font-bold text-lg tracking-wider">Shubham kumar</p>
                    <p className=" text-sm  bg-stone-100  rounded-lg p-1">Frontend Developer</p>
                    <Social/>
                    

                    <div className=" bg-stone-100  px-4 py-5 my-2 rounded-xl ">

                        <div className=" flex items-center gap-1 pb-2">
                            <span className="bg-white p-1 rounded-md"><i className="bi bi-phone self-start" /></span>
                            <span>
                                <p className=" text-xs text-slate-600 "> Phone</p>
                                <p className=" text-sm font-medium">7254050024</p>
                            </span>
                        </div>

                        <div className=" flex items-center gap-1 pb-2">
                            <span className="bg-white p-1 rounded-md"><i className="bi bi-envelope self-start" /></span>
                            <span>
                                <p className=" text-xs text-slate-600 ">Email</p>
                                <p className=" text-sm font-medium">Krsubam4u@gmail.com</p>
                            </span>
                        </div>

                        <div className=" flex items-center gap-1 pb-2">
                            <span className="bg-white p-1 rounded-md"><i className="bi bi-geo-alt self-start" /></span>
                            <span>
                                <p className=" text-xs text-slate-600 ">Location</p>
                                <p className=" text-sm font-medium">Patna, Bihar IN</p>
                            </span>
                        </div>

                    </div>
                    <div>
                        <a className="bg-slate-800 hover:bg-slate-900 rounded-lg font-semibold text-slate-100 py-1 px-2" href="https://drive.google.com/file/d/1r5kjSowfGpJUO-izwmxzR23dZGNI0yb0/view?usp=sharing" download>Download CV<i class=" p-1 bi bi-download"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideInfo