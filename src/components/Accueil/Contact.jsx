import '../../styles/Accueil/Contact.css'


export default function Contact() 
{
	return <div className='contact-bloc' id='contact'>
                        <div className='contact'>
                                <h2>Formulaire de contact</h2>
                                <form action="/action_page.php">
                                <label for="fname">Nom & prénom</label>
                                <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"/>

                                <label for="sujet">Sujet</label>
                                <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"/>

                                <label for="emailAddress">Email</label>
                                <input id="emailAddress" type="email" name="email" placeholder="Votre email"/>


                                <label for="subject">Message</label>
                                <textarea id="subject" name="subject" placeholder="Votre message"></textarea>

                                <input type="submit" value="Envoyer"/>
                                </form>
                        </div>
                </div>
}
