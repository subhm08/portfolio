import React, { Fragment } from 'react'
const Contect = () => {
  return (
    <Fragment>
      <h1 className='text-3xl font-mono font-bold text-slate-600'>Contect Me</h1>
      <hr />
      <div className="box flex flex-col gap-2 justify-center items-start bg-slate-300 p-3 rounded-lg">
      
        <div className="namebox flex justify-between ">
        <label htmlFor="name">Full-Name</label>
        <input type="text" name="name" id="name" />
        </div>

        <div className="emailbox">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        </div>

        <div className="msgbox">
        <label htmlFor="msg">Message</label>
        <textarea name="msg" id="msg"></textarea>
        </div>

       
        
        <button type="submit">Message Me</button>
      
      <div className="social">links</div>
      </div>
    </Fragment>
  )
}
export default Contect
