import { Container } from './styles';
import Form from './Form';
import SectionTitle from '../SectionTitle';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;
