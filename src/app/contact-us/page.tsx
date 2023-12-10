'use client'

import { FormEvent, FormEventHandler, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gridStyles from '@/app/styles/Main.module.scss';

export default function ContactUs() {
  const  [name, setName ]= useState("")
  const  [email, setEmail] = useState("")
  const  [message, setMessage] = useState("")
  const  [subject, setSubject] = useState("")
  const form = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name && email && message && subject && form.current) {
      emailjs.sendForm('service_dqr9t77', 'template_mivfvwh', form.current, 'Vj0XSnIWR2JKwArmt')
      .then(() => {
          const messageSuccess = document.querySelector(".message-success")
          messageSuccess?.classList.toggle("hide-message");

          setTimeout(() => {
              messageSuccess?.classList.toggle("hide-message");
            }, 6000);
          setEmail("")
          setMessage("")
          setName("")
          setSubject("")
      }, (error) => {
          const messageError = document.querySelector(".message-fail")
          messageError?.classList.toggle("hide-message");
          setTimeout(() => {
              messageError?.classList.toggle("hide-message");
            }, 6000);
      });
    }
};


  return (
      <main className={`${gridStyles.oneCol} ${gridStyles.container}`}>
        <h1>This is the contact us page</h1>
        <form ref={form} onSubmit={sendEmail}>
                <div id="contact-details">
                    <div>
                        <input className="input-field" onChange={(e) => setName(e.target.value)} value={name} placeholder="name" type="text" name="userName" required/>
                        <label className="label" htmlFor="userName">Name</label>
                    </div>
                    <div>
                        <input className="input-field" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"type="userEmail" name="userEmail" required/>
                        <label className="label" htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input className="input-field" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="subject"type="text" name="subject" required />
                        <label className="label" htmlFor="subject">Subject</label>
                    </div>
                </div>  
                
                <div id="message">
                
                <textarea className="input-field" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="message" name="message" rows={2} required/>
                <label className="label" htmlFor="message">Message</label>
                </div>

                
                <div id="submit">
                    <div className="button">
                        <input type="submit" value="Send"/>
                    </div>
                    <div>
                        <p className="message-success hide-message">Message sent!</p>
                        <p className="message-fail hide-message">Message failed</p>
                    </div>
                </div>
            </form>
      </main>

  )
}