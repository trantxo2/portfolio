import './Contact.css';

import SocialMediaIcons from 'components/socialMediaIcons';
import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm('mzblrpba');
  if (state.succeeded) {
    return <div className="submitMessage">ENVIADO!</div>;
  }

  return (
    <section id="contact" className="contact">
      <h1 className="title">
        ¡Contacta <span>conmigo!</span>
      </h1>

      <form onSubmit={handleSubmit}>
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit">Enviar</button>
      </form>
      <SocialMediaIcons />
      <div className="phone-num">
        tel: <span>+34 610 33 78 69</span>
      </div>
    </section>
  );
};
