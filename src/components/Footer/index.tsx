import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai';

import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type="button">
          Voltar ao Topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://www.twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://www.github.com')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
