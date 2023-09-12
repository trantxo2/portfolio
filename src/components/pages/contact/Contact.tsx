import './Contact.css';
import SocialMediaIcons from 'components/socialMediaIcons';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Slide, Fade } from 'react-awesome-reveal';

export const Contact = () => {
  const [state, handleSubmit] = useForm('mzblrpba');
  if (state.succeeded) {
    return <div className="submitMessage">ENVIADO!</div>;
  }

  return (
    <section id="contact" className="contact">
      <Slide direction="down">
        <h1 className="title">
          ¡Contacta
          <Slide direction="up">
            <span>conmigo!</span>
          </Slide>
        </h1>
      </Slide>

      <form onSubmit={handleSubmit}>
        <Fade cascade damping={0.4}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Nombre y apellidos"
              required
            />
            <input
              id="email"
              type="email"
              required
              name="email"
              placeholder="Dirección de correo"
            />
          </div>
          <div className="input-box">
            <input type="phone" name="phone" placeholder="Teléfono" />
            <input type="text" name="subject" placeholder="Asunto" />
          </div>
          <textarea id="message" name="message" placeholder="Mensaje" />

          <button type="submit">Enviar</button>
        </Fade>
      </form>
      <Fade direction="down">
        <SocialMediaIcons />
        <div className="phone-num">
          tel: <span>+34 610 33 78 69</span>
        </div>
      </Fade>
    </section>
  );
};
