import React from "react";
import  Contect  from './component/Contect'
import About from './component/About'
import Resume from './component/Certification'
import { Projects } from './component/Projects'

const Navigation = ({onSelectPage}) => {
    return(
        <div className="navigation bg-gray-200 ml-6 mr-12 mt-24 px-3 py-8 flex flex-col items-center h-fit w-auto rounded-xl gap-2 justify-between">
            <button
            className=" bg-white rounded-lg p-2 text-sm font-semibold w-full " onClick={()=>onSelectPage(<About/>)}>
                <i className="bi bi-person text-xl block"/>
                About
                </button>
                <button className=" bg-white rounded-lg p-2 text-sm font-semibold w-full " onClick={()=>onSelectPage(<Resume/>)}>
                <i className="bi bi-file-earmark-person-fill text-xl block"/>
                Certification
                </button>
                <button className=" bg-white rounded-lg p-2 text-sm font-semibold w-full " onClick={()=>onSelectPage(<Projects/>)}>
                <i className="bi bi-file-earmark-code text-xl block"/>
                Projects
                </button>
                <button className=" bg-white rounded-lg p-2 text-sm font-semibold w-full " onClick={()=>onSelectPage(<Contect/>)}>
                <i className="bi bi-person-plus text-xl block"/>
                Contect
                </button>
                
            
        </div>
    )
}

export default Navigation