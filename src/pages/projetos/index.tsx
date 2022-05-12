import Header from '../../components/Header';
import ProjetoPreview from '../../components/ProjetoPreview';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoPreview
          title="Projeto 01"
          slug="teste"
          type="Website"
          imgUrl="https://igorgomes.eti.br/images/app-developing.png"
        />{' '}
        <ProjetoPreview
          title="Projeto 01"
          slug="teste"
          type="Website"
          imgUrl="https://igorgomes.eti.br/images/app-developing.png"
        />{' '}
        <ProjetoPreview
          title="Projeto 01"
          slug="teste"
          type="Website"
          imgUrl="https://igorgomes.eti.br/images/app-developing.png"
        />
        <ProjetoPreview
          title="Projeto 01"
          slug="teste"
          type="Website"
          imgUrl="https://igorgomes.eti.br/images/app-developing.png"
        />
      </main>
    </ProjetosContainer>
  );
}
