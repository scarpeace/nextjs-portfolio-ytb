import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjetosProps {
  projetos: IProjeto[];
}

const imgUrl = 'https://igorgomes.eti.br/images/app-developing.png';

function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      {projetos.slice(0, 3).map(projeto => (
        <ProjetoItem
          key={projeto.slug}
          title={projeto.title}
          description={projeto.description}
          imgUrl={projeto.thumbnail}
          slug={projeto.link}
        />
      ))}
      <button type="button">
        <Link href="/projetos">
          <a>Ver Todos os Projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
