import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">
        Contacta <span>conmigo!</span>
      </h1>

      <form
        action="
      #"
      >
        <div className="input-box">
          <input type="text" placeholder="Nombre y apellidos" />
          <input type="email" placeholder="Dirección de correo" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="teléfono" />
          <input type="text" placeholder="Asunto" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tu mensaje"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
export default Contact;
