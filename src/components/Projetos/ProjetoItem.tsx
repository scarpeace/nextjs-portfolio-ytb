import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';

import { ProjetoContainer } from './styles';

export default function ProjetoItem() {
  return (
    <ProjetoContainer imgUrl="https://igorgomes.eti.br/images/app-developing.png">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># Titulo</h1>
          <h2>- Projeto teste</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
