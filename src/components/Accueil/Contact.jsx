import '../../styles/Accueil/Contact.css'
import msg from "../../assets/pc.webp"


export default function Contact() 
{
	return <div className='contact-bloc' id='contact'>
                        <div className='contact-bloc-titre'>
                                <h2 className='contact-titre'>Me contacter :</h2>
                        </div>
                        
                        <div className='contact-img-form'>
                                <img src={msg} alt="Photo d'un homme recevant un message" className='contact-img'/>

                                <div class="login-box">
                                        <form>
                                                <div class="user-box">
                                                        <input type="text" name="mail" required/>
                                                        <label>E-mail</label>
                                                </div>

                                                <div class="user-box">
                                                        <label for='Message' className='label-msg'>Message</label>
                                                        <textarea rows='10' cols='25' className='message' required></textarea>   
                                                </div><center>
                                                <a href="#">
                                                        Envoyer
                                                <span></span>
                                                </a></center>
                                        </form>
                                </div>
                        </div>

                </div>
}
