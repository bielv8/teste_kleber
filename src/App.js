import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import LoginModal from './components/LoginModal';
import ProductList from './components/ProductList';
import CarrinhoModal from './components/CarrinhoModal';
import ProductModal from './components/ProductModal';
import Header from './components/HeaderModal';

function App() {
  const [mostrarModalLogin, setMostrarModalLogin] = useState(false);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtos = [
    {
      id: 1,
      nome: 'Faca Javalizeira Artesanal 12"',
      preco: 261.09,
      descricao: 'Faca artesanal com lâmina de 12 polegadas, ideal para caça e aventura.',
      imagem: '/imagens/faca-javalizeira.jpg',
    },
    {
      id: 2,
      nome: 'Faca Pequena Artesanal 4"',
      preco: 47.90,
      descricao: 'Faca compacta, perfeita para uso diário e camping.',
      imagem: '/imagens/faca-pequena.webp',
    },
    {
      id: 3,
      nome: 'Faca Diutac Nautika',
      preco: 92.90,
      descricao: 'Faca tática com bainha e empunhadura emborrachada, resistente e segura.',
      imagem: '/imagens/faca-diutac.webp',
    }
  ];

  const abrirModalLogin = () => setMostrarModalLogin(true);
  const fecharModalLogin = () => setMostrarModalLogin(false);
  const abrirCarrinho = () => setMostrarCarrinho(true);
  const fecharCarrinho = () => setMostrarCarrinho(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerItemDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const abrirModalProduto = (produto) => setProdutoSelecionado(produto);
  const fecharModalProduto = () => setProdutoSelecionado(null);

  return (
    <div>
      {/* Passa a função para abrir o carrinho */}
      <Header onAbrirCarrinho={abrirCarrinho} />

      <HeroSection onLoginClick={abrirModalLogin} />

      <ProductList
        produtos={produtos}
        onAdicionarAoCarrinho={adicionarAoCarrinho}
        onMaisInformacoes={abrirModalProduto}
      />

      {mostrarModalLogin && <LoginModal onClose={fecharModalLogin} />}

      {mostrarCarrinho && (
        <CarrinhoModal
          carrinho={carrinho}
          onFechar={fecharCarrinho}
          onRemoverItem={removerItemDoCarrinho}
        />
      )}

      {produtoSelecionado && (
        <ProductModal produto={produtoSelecionado} onClose={fecharModalProduto} />
      )}
    </div>
  );
}

export default App;
