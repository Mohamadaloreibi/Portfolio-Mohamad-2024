import React from 'react';
import styles from '../styles/ContactStyles.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactContainer}>
      <h2>Contact Me</h2>
      <p>Interested in collaborating or hiring me? Feel free to reach out!</p>
      <p>Email: <a href="mailto:Moh2567@outlook.com">Moh2567@outlook.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/mohamad-al-oreibi-b7b621250/">Mohamad Al-oreibi</a></p>
    </section>
  );
};

export default Contact;
