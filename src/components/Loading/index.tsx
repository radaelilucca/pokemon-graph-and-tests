import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { Container } from "./styles";

const Loading = () => {
  const { isLoading } = useSelector((state: RootState) => state.pokemonState);
  if (!isLoading) return null;

  return (
    <Container>
      <img src="/images/pokeball.png" />
      <span>Loading...</span>
    </Container>
  );
};

export { Loading };
