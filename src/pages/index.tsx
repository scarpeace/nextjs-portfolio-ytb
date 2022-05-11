import Conhecimentos from '../components/Conhecimentos';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';

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
