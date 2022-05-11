import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

const imgUrl = 'https://igorgomes.eti.br/images/app-developing.png';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <ProjetoItem
        title="Projeto 1"
        description="Projeto feito em React"
        imgUrl={imgUrl}
        slug="teste"
      />
      <ProjetoItem
        title="Projeto 1"
        description="Projeto feito em React"
        imgUrl={imgUrl}
        slug="teste"
      />
      <ProjetoItem
        title="Projeto 1"
        description="Projeto feito em React"
        imgUrl={imgUrl}
        slug="teste"
      />
      <button type="button">
        <Link href="/projetos">
          <a>Ver Todos os Projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
