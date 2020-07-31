import React, { useEffect } from 'react';
import dadosIniciais from '../../dados_iniciais.json';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  useEffect(() => {
    categoriasRepository.getAllWithVideos();

  // fetch(URL_BACKEND_TOP)
  //   .then(async (respostaDoServidor) => {
  //     const resposta = await respostaDoServidor.json();
  //     setCategorias([
  //       ...resposta,
  //     ]);
  //   });
  });

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
