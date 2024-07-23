import React, { Fragment } from 'react'
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
const ProjectCard = (props) =>{
  const { color, name, duration, liveLink, repo, discription, techstack} = props;
  return(
    <Fragment>
      <div className={`card flex flex-col mt-2 rounded-lg p-2 ${color}`}>
          <div className="title flex justify-between">
            <h2 className="text-gray-800 font-serif tracking-wider text-md font-bold mt-2">{name}</h2>

            <a className='underline hover:text-gray-700 text-gray-500 font-serif tracking-wider text-sm font-bold mt-2 cursor-pointer' onClick={()=>openInNewTab(liveLink)} >live Preview<i class="p-1  align-top text-xs font-thin bi bi-box-arrow-up-right"></i></a>

          </div>
          <div className="details">
            <p className='text-gray-600 font-serif tracking-wider text-xs '>{duration}</p>

            <a onClick={()=>openInNewTab(repo)} className='underline italic hover:text-gray-700 text-gray-600 font-serif tracking-wide text-xs font-bold cursor-pointer'>{repo}</a>

            <p className='text-gray-600 font-serif tracking-wide text-sm font-bold '>Technology Used:</p>
            <p className='text-gray-600 font-serif tracking-wider text-xs'>{techstack.join(" || ")}</p>

            <p className='text-gray-600 font-serif tracking-wider text-sm font-semibold'>{discription}</p>
          </div>
      </div>
    </Fragment>
  )
}
export const Projects = () => {
  return (
    <div>
      <h1 className='text-3xl font-mono font-bold text-slate-600'>Projects</h1>
      <hr className='bg-slate-400 h-2' />

      <ProjectCard color="bg-yellow-50" name="Personal Portfolio" liveLink="https://portfolio-two-inky-64.vercel.app/" duration="june 2024 - july 2024" repo="https://github.com/subhm08/portfolio" techstack={["HTML", "CSS","JavaScript", "ReactJS", "EmailJS", "TailwindCSS"]} discription="My personal portfolio for showcase my skills that describe my skills, achivement and works done by me."/>

      <ProjectCard color="bg-green-50" name="Swiggy clone" liveLink="https://swiggy-clone-sandy.vercel.app/" duration="may 2024 -  present" repo="https://github.com/subhm08/SwiggyClone" techstack={["HTML", "CSS","JavaScript", "ReactJS", "API", "TailwindCSS"]} discription="Food ordering app swiggy frontend design with live API of swiggy."/>

      
    </div>
  )
}
