import { FaCss3Alt, FaReact } from 'react-icons/fa';

import { AiFillHtml5 } from 'react-icons/ai';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={AiFillHtml5} />
        <ConhecimentoItem title="HTML" icon={FaCss3Alt} />
        <ConhecimentoItem title="HTML" icon={IoLogoJavascript} />
        <ConhecimentoItem title="HTML" icon={FaReact} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
