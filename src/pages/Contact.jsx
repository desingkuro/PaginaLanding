// Contact.js
import React, { useState } from 'react';
import '../css/Contact.css';
import emailjs from 'emailjs-com'; // npm install emailjs-com
import { FaWhatsapp } from 'react-icons/fa'; // npm install react-icons
import imagen from '../assets/contacto.svg'

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_id', // your service ID
        'template_id', // your template ID
        e.target,
        'user_id' // your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id='Contacto'>
      <div className='form-container'>
        <div className="contact-form">
          <h2>Contacta con nosotros por correo electrónico</h2>
          <p>Por favor, rellena el siguiente formulario y te responderemos lo antes posible.</p>
          {sent ? (
            <p className="success">Tu mensaje ha sido enviado correctamente. Gracias por contactarnos.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
      </div>
      <div className="contact-whatsapp">
        <img src={imagen} alt="" />
        <h2>Contacta con nosotros por WhatsApp</h2>
        <p>También puedes contactarnos por WhatsApp haciendo clic en el siguiente botón.</p>
        <a href="https://wa.me/+573215082539" className="whatsapp-button">
          <FaWhatsapp className="whatsapp-icon" />
          Enviar mensaje
        </a>
      </div>
    </div>
  );
}

export default Contact;
