import React, { Fragment } from "react";
import C from '../../image/C.png';
import java from '../../image/java.png';
import sql from '../../image/sql.png';
import javascript from '../../image/javascript.png';
import internsala from '../../image/internsala.jpeg';
import python from '../../image/python.png';
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
function CertificationCard(props) {
  const {color, preview, title, company, date, cid, link} = props; 
  return (
    <div className={`card mt-2 rounded-lg p-2 ${color}`}>
      <div className="img">
        <img src={preview} alt="title" />
      </div>
      <h2 className="text-gray-800 font-serif tracking-wider text-md font-bold mt-2 hover:underline">{title}</h2>
      <h3 className="company text-gray-600 font-serif tracking-wide text-sm">{company}</h3>
      <p className="date text-gray-600 font-serif tracking-widest text-xs"><b>Date:</b>{date}</p>
      <p className="c_id text-gray-600 font-serif tracking-wide text-xs "><b>Creditional Id: </b>{cid}</p>
      <button className="show mt-1 bg-slate-600 text-white rounded-lg p-1 text-xs font-semibold hover:underline hover:scale-105 transition-all" onClick={()=>openInNewTab(link)}>Show Creditional<i class="p-1  align-top text-xs font-thin bi bi-box-arrow-up-right"></i></button>
    </div>
  );
}
const Certification = ()=>{
  return(
    <Fragment>
      <h1 className='text-3xl font-mono font-bold text-slate-600'>Certifications</h1>
      <hr />
      <div className="mt-2 grid gap-2 grid-cols-2 ">
        <CertificationCard
          color="bg-orange-50"
          preview={C}
          title="C Tutorial"
          company="Sololearn"
          date="20 May, 2020"
          cid="CT-KONGMZNG" 
          link="https://www.sololearn.com/certificates/CT-KONGMZNG"
         />
         <CertificationCard
          color="bg-green-50"
          preview={javascript}
          title="JavaScript"
          company="HackerRank"
          date="05 Sept, 2023"
          cid="d07a8bcd7f9b" 
          link="https://www.hackerrank.com/certificates/d07a8bcd7f9b"
         />
        <CertificationCard 
          color="bg-yellow-50"
          preview={java}
          title="Learning Java"
          company="LinkedIn"
          date="04 July, 2020"
          cid="Ac1Z5hvHM4tNuOMxeczWdkXBzJeP" 
          link="https://www.linkedin.com/learning/certificates/71be477f6d1ea5c61ad9a2c0e114d8a0efcbd0b4427caf7b9363276dcc7fb218?trk=backfilled_certificate"
        />
        <CertificationCard
        color="bg-red-50"
        preview={sql}
        title="SQL"
        company="HackerRank"
        date="04 feb, 2022"
        cid="BA2EE8E77020" 
        link="https://www.hackerrank.com/certificates/ba2ee8e77020"
        />
        <CertificationCard
        color="bg-blue-50"
        preview={internsala}
        title="Web Development"
        company="Internsala"
        date="07 March, 2022"
        cid="F9922A11-19F7-5347-E2A7-CE98C14C311C" 
        link="https://trainings.internshala.com/verify_certificate"
        />
        <CertificationCard
        color="bg-orange-50"
        preview={python}
        title="Python"
        company="Sololearn"
        date="11 Oct, 2021"
        cid="27da1ae0eba6" 
        link="https://www.hackerrank.com/certificates/27da1ae0eba6"
        />
      </div>
      </Fragment>
    
    
  )
} 
export default Certification;