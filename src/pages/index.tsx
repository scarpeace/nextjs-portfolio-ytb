import Conhecimentos from '../components/Conhecimentos';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import * as prismic from '@prismicio/client';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getstaticProps: GetStaticProps = async () => {
  const prismicApi = getPrismicClient();

  const projetcResponse = await prismicApi.getAllByType('projetos', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    }
  });

  console.log('Resposta da API');
  console.log(projetcResponse);

  return {
    props: {}
  };
};
