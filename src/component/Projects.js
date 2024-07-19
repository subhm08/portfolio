import React, { Fragment } from 'react'
const ProjectCard = (props) =>{
  const { color, name, duration, liveLink, repo, discription, techstack} = props;
  return(
    <Fragment>
      <div className={`card flex flex-col mt-2 rounded-lg p-2 ${color}`}>
          <div className="title flex justify-between">
            <h2 className="text-gray-800 font-serif tracking-wider text-md font-bold mt-2">{name}</h2>

            <a className='underline hover:text-gray-700 text-gray-500 font-serif tracking-wider text-sm font-bold mt-2' href={`${liveLink}`}>live Preview<i class="p-1  align-top text-xs font-thin bi bi-box-arrow-up-right"></i></a>

          </div>
          <div className="details">
            <p className='text-gray-600 font-serif tracking-wider text-xs '>{duration}</p>

            <a href={`${repo}`} className='underline italic hover:text-gray-700 text-gray-600 font-serif tracking-wide text-xs font-bold'>{repo}</a>

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

      <ProjectCard color="bg-yellow-50" name="Swiggy Clone" liveLink="google.com" duration="Aprail 2023 - june 2023" repo="google.com" techstack={["HTML", "CSS","JavaScript", "ReactJS", "API", "TailwindCSS"]} discription="swiggy clone example"/>
    </div>
  )
}
