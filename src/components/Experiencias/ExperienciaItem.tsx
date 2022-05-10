import { ItemContainer } from './styles';

interface Props {
  year: number;
  title: string;
  description: string;
}

export default function ExperienciaItem({ year, title, description }: Props) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
