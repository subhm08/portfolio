import React, { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Social } from '../SideInfo';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("btn").value="Sending...";
    emailjs.sendForm('service_2t34t2e', 'template_xfh2t89', form.current,
      'GTomUgJv9jYbnFu7C')
      .then((result) => {
        document.getElementById("btn").value="Send";
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Fragment>
      <h1 className='text-3xl font-mono font-bold text-slate-600'>Contect Me</h1>
      <hr />
      <div className="flex flex-col items-center bg-slate-300 rounded-lg p-2 mt-4">
        <h3 className="font-mono font-semibold text-slate-800">Send Me a Message</h3>
        <form className='flex flex-col w-full  p-2' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" id='from_name' />
          <label>Email</label>
          <input type="email" name="email" id='email' />
          <label>Message</label>
          <textarea name="message" id='message' />
          <input className="bg-slate-700 hover:bg-slate-900 rounded-lg font-semibold text-slate-100 py-1 px-2 cursor-pointer" id='btn' type="submit" value="Send"/>
        </form>
        <Social/>
      </div>

    </Fragment>

  );
};

export default Contact
