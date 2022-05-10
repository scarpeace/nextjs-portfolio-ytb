/* eslint-disable no-useless-escape */
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import pictureBanner from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container>
      <img src={pictureBanner} alt="Imagem de uma menina" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Marcelo</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha Apresentação</span>
            <span className="purple">Infos</span>
            {`\U007B`}

            <div>
              Nome: <span className="blue">Gustavo</span>
            </div>

            <div>
              Sobrenome: <span className="blue">Scarpellini</span>
            </div>
            {`\U007D`}
          </CodeItem>
        </InfosContainer>

        <InfosContainer>
          <CodeItem>
            <span className="purple">Cargo</span>
            {`\U007B`}

            <div>
              Função: <span className="blue">Desenvolvedor</span>
            </div>

            <div>
              Empresa: <span className="blue">IBN</span>
            </div>
            {`\U007D`}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
