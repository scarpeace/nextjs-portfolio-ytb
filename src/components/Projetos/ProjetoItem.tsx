import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';

import { ProjetoContainer } from './styles';

interface Props {
  title: string;
  description: string;
  slug: string;
  imgUrl: string;
}

export default function ProjetoItem({
  title,
  description,
  slug,
  imgUrl
}: Props) {
  return (
    <ProjetoContainer imgUrl={imgUrl}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {description}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
