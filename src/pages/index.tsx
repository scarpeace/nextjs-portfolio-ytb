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
interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProjeto[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projects} />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicApi = getPrismicClient();

  const projetcResponse = await prismicApi.getAllByType('projeto', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    }
  });

  const projects = projetcResponse.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    desciption: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
