import React, { Fragment } from "react";
import img from '../../image/C.jpg';
function CertificationCard(props) {
  const {color, preview, title, company, date, cid, link} = props; 
  return (
    <div className={`card mt-2 rounded-lg p-2 ${color}`}>
      <div className="img">
        <img src={img} alt="title" />
      </div>
      <h2 className="text-gray-800 font-serif tracking-wider text-md font-bold mt-2 hover:underline">Title</h2>
      <h3 className="company text-gray-600 font-serif tracking-wide text-sm">Company</h3>
      <p className="date text-gray-600 font-serif tracking-widest text-xs"><b>Issue date: </b>date</p>
      <p className="c_id text-gray-600 font-serif tracking-wide text-xs "><b>Creditional Id: </b>Creditional</p>
      <button className="show mt-1 bg-slate-600 text-white rounded-lg p-1 text-xs font-semibold hover:underline hover:scale-105 transition-all">Show Creditional<i class="p-1  align-top text-xs font-thin bi bi-box-arrow-up-right"></i></button>
    </div>
  );
}
const Certification = ()=>{
  return(
    <Fragment>
      <h1 className='text-3xl font-mono font-bold text-slate-600'>Certifications</h1>
      <hr />
      <div className="mt-2 grid gap-2 grid-cols-2 ">
        <CertificationCard color="bg-orange-50"/>
        <CertificationCard color="bg-yellow-50"/>
      </div>
      </Fragment>
    
    
  )
} 
export default Certification;