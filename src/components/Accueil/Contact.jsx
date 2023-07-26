import '../../styles/Accueil/Contact.css'
import msg from "../../assets/pc.webp"

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import swal from 'sweetalert';

export default function Contact() 
{
        const form = useRef();
        const sendEmail = (e) => 
        {
                e.preventDefault();

                emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID).then(
                (result) => {
                swal
                (
                        {
                                title: "Message envoyé avec succés",
                                text: "Je vous répondrais au plus vite",
                                button: "Ok",
                                className: "alert",
                                icon: "success"
                        }
                );
                e.target.reset();
                },
                (error) => {
                console.log(error.text);
                }
                );
        };



	return <section className='contact-bloc' id='contact'>
                        <div className='contact-bloc-titre'>
                                <h2 className='contact-titre'>Me contacter :</h2>
                        </div>
                        
                        <div className='contact-img-form'>
                                <img src={msg} alt="Photo d'un homme recevant un message" className='contact-img'/>

                                <div className="login-box">
                                        <form ref={form} onSubmit={sendEmail}>
                                                <div className="user-box">
                                                        <input type="text" name="name" required/>
                                                        <label>E-mail</label>
                                                </div>

                                                <div className="user-box">
                                                        <label className='label-msg'>Message</label>
                                                        <textarea rows='10' cols='25' className='message' name='message' required></textarea>   
                                                </div><center>
                                                <button type='submit'>
                                                        Envoyer
                                                <span></span>
                                                </button></center>
                                        </form>
                                </div>
                        </div>

                </section>
}
