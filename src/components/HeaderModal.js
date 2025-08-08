import React from 'react';
import './HeaderModal.css'; // Seu CSS opcional
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = ({ onAbrirCarrinho }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Aço&Caça</a>
      </div>

      <nav className="nav">
        <a href="/produtos">Produtos</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>

      <div className="icons">
        <a href="/conta" aria-label="Minha Conta">
          <FaUser />
        </a>

        {/* Botão em vez de link */}
        <button 
          onClick={onAbrirCarrinho} 
          aria-label="Abrir Carrinho de Compras"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontSize: '1.2rem',
            padding: 0,
            marginLeft: '1rem'
          }}
        >
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header;
