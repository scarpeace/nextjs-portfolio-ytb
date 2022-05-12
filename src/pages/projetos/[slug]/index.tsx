import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
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
