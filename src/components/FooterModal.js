import React from 'react';
import './FooterModal.css'; // você pode criar esse CSS ou remover a linha

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aço&Caça. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
