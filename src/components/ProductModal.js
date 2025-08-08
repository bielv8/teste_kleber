import React from 'react';
import './ProductModal.css';

function ProductModal({ produto, onClose }) {
  if (!produto) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{produto.nome}</h2>

        {produto.imagem && (
          <img
            src={produto.imagem}
            alt={produto.nome}
            style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '1rem' }}
          />
        )}

        <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
        <p><strong>Descrição:</strong> {produto.descricao}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ProductModal;
