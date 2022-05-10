import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

const mockItems = {
  year: 2021,
  title: 'Dev Front-end',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione velit tempora sequi quo voluptas.'
};

function Experiencias() {
  const { year, title, description } = mockItems;
  return (
    <Container>
      <SectionTitle title="#05 Anos" description="de Experiência" />

      <section>
        <ExperienciaItem year={year} title={title} description={description} />
        <ExperienciaItem year={year} title={title} description={description} />
        <ExperienciaItem year={year} title={title} description={description} />
        <ExperienciaItem year={year} title={title} description={description} />
      </section>
    </Container>
  );
}

export default Experiencias;
