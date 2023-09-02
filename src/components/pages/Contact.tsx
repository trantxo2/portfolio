import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubInIcon } from '../../assets/github.svg';
import { ReactComponent as InstagramInIcon } from '../../assets/instagram.svg';

function Contact() {
  const [state, handleSubmit] = useForm('mzblrpba');
  if (state.succeeded) {
    return <p>ENVIADO!</p>;
  }

  return (
    <section id="contact" className="contact">
      <h1 className="title">
        ¡Contacta <span>conmigo!</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Nombre y apellidos" />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Dirección de correo"
          />
        </div>
        <div className="input-box">
          <input type="phone" name="phone" placeholder="Teléfono" />
          <input type="text" name="subject" placeholder="Asunto" />
        </div>
        <textarea id="message" name="message" placeholder="Mensaje" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-socialmedia-container">
        <a href="https://github.com/trantxo2">
          <GithubInIcon className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/inaki09">
          <LinkedInIcon className="icon" />
        </a>
        <a href="a">
          <InstagramInIcon className="icon" />
        </a>
      </div>
    </section>
  );
}
export default Contact;
