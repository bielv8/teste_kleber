import React, { useState } from 'react';
import './ProductList.css';
import ProductModal from './ProductModal';

function ProductList({ produtos, onAdicionarAoCarrinho }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const abrirModal = (produto) => setProdutoSelecionado(produto);
  const fecharModal = () => setProdutoSelecionado(null);

  return (
    <div className="produtos-container">
      <h2>Produtos em Destaque</h2>
      <div className="grid-produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="produto">
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => onAdicionarAoCarrinho(produto)}>Comprar</button>
            <button onClick={() => abrirModal(produto)}>Mais informações</button>
          </div>
        ))}
      </div>

      <ProductModal produto={produtoSelecionado} onClose={fecharModal} />
    </div>
  );
}

export default ProductList;
