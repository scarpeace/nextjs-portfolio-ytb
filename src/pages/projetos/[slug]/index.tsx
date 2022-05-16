import * as prismicH from '@prismicio/helpers';
import { GetStaticPaths, GetStaticProps } from 'next';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { getPrismicClient, linkResolver } from '../../../services/prismic';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
      page
      <Header />
      <BannerProjeto
        title="Projeto 1"
        type="Website"
        imgUrl="https://igorgomes.eti.br/images/app-developing.png"
      />
      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          reiciendis fugit laboriosam distinctio vero excepturi ullam non eaque
          fuga ea, nesciunt similique explicabo voluptas nihil?
        </p>
        <button type="button">
          <a href="#">Ver Projeto Online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getPrismicClient();
  const documents = await client.getAllByType('projeto');
  return {
    paths: documents.map(doc => prismicH.asLink(doc, linkResolver)),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismicApi = getPrismicClient();
  const { slug } = context.params;

  console.log('Slug do Static Props');
  console.log(slug);

  const projetcResponse = await prismicApi.getByID('projeto'[String(slug)]);
  console.log('Resposta do projeto no static props');
  console.log(projetcResponse);

  const project = {
    slug: projetcResponse.uid,
    title: projetcResponse.data.title,
    type: projetcResponse.data.type,
    desciption: projetcResponse.data.description,
    link: projetcResponse.data.link.url,
    thumbnail: projetcResponse.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
