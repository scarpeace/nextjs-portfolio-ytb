import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="#05 Anos" description="de Experiência" />

      <section>
        <ExperienciaItem />
        <ExperienciaItem />
        <ExperienciaItem />
        <ExperienciaItem />
      </section>
    </Container>
  );
}

export default Experiencias;
