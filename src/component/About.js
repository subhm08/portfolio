import React, { Fragment } from 'react'

const Card = (props) => {
  const {color, icon, title, skills } = props;
  return (
      <Fragment>
          <div className={`gap-1  rounded-md p-2 ${color}`}>
              <div className="content">
                  <h3 className='text-lg font-mono font-bold text-slate-800'>
                  {icon} {title}
                  </h3>
                  <h2 className='text-md font-mono font-bold text-slate-600'>
                      Technology used: 
                  </h2>
                  <div className="tech">
                  {skills.map((x)=><span className="inline-block text-sm font-mono font-semibold  bg-stone-200 tracking-wide text-gray-700 rounded-lg m-1 py-1 px-6">{x}</span>)}
                  </div>
              </div>
          </div>
      </Fragment>
  )
}

const About = () => {
  return (
    <Fragment>
      <h1 className='text-3xl font-mono font-bold text-slate-600'>About</h1>
      <hr className='bg-slate-400 h-2' />
      <p className=' font-serif tracking-wider text-sm font-bold mt-2'>Hello,<br></br> this is shubham kumar a FrontEnd Developer </p>
      <p className=' font-light text-sm font-mono opacity-65'>I'm a highly motivated and results-oriented recent graduate with a strong foundation in FrontEnd development. I'm passionate about creating user-friendly and functional web applications, and I'm eager to learn and contribute to a fast-paced development environment.</p>
      <h3 className='text-xl font-mono font-bold text-slate-700 mt-1 bg-'>What can i DO...</h3>
      <hr className='bg-slate-400 h-1 w-1/2' />
      <div className="data mt-2 grid gap-2 grid-cols-2 ">
        <Card color="bg-red-50" icon={<i class="bi bi-code-slash"></i>} title="Frontend Development" skills={["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "BootStrap"]} />

        <Card color="bg-lime-50" icon={<i class="bi bi-database"></i>} title="Backend Development" skills={["Oracle", "MySQL", "PHP", "NodeJS", "ExpressJS"]} />

        <Card color="bg-yellow-50" icon={<i class="bi bi-bar-chart"></i>} title="Data Analysis" skills={["Python", "Pandas", "NumPy", "Matplotlib", "seaborn", "EDA", "Excel"]} />

        <Card color="bg-orange-50" icon={<i class="bi bi-puzzle"></i>} title="Problem Solving" skills={["C++", "JAVA", "C", "Data structure & algorithm"]} />

      </div>
    </Fragment>
  )
}

export default About
