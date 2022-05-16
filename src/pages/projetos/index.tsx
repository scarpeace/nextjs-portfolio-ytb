import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import ProjetoPreview from '../../components/ProjetoPreview';
import { getPrismicClient } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projects: IProjeto[];
}

export default function Projetos({ projects }: ProjetosProps) {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjetoPreview
            key={project.slug}
            title={project.title}
            slug={project.slug}
            type={project.type}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
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
