import { FormEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SearchIcon } from "../../assets/svg/icons";
import { AppDispatch, getPokemon, RootState } from "../../state";
import { Container, Button, Input } from "./styles";

const PokemonSearchBar = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [isInputOpen, setInputOpen] = useState(false);
  const [validationError, setValidationError] = useState("");

  const lastPokemonName = useRef("");

  const { error: requestError, pokemon } = useSelector(
    (state: RootState) => state.pokemonState
  );

  const hasErrors = !!requestError || !!validationError;

  const dispatch = useDispatch<AppDispatch>();

  const handleDisplayError = (message: string) => {
    setPokemonName(message);
    setValidationError(message);
  };

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    lastPokemonName.current = pokemonName;

    if (!pokemonName) {
      handleDisplayError("Missing pokemon name");
    }

    dispatch(getPokemon({ pokemonName }));
  };

  const clearErrors = () => {
    setPokemonName(lastPokemonName.current || "");
    setValidationError("");
  };

  const handleInputClick = () => {
    if (!!validationError) return clearErrors();
  };

  const handleSearchClick = () => {
    if (!isInputOpen) {
      return setInputOpen(true);
    }

    return handleSubmit();
  };

  useEffect(() => {
    if (requestError) handleDisplayError(requestError);
  }, [requestError]);

  useEffect(() => {
    if (pokemon) {
      clearErrors();
      setPokemonName("");
    }
  }, [pokemon]);

  return (
    <Container
      error={hasErrors}
      onSubmit={handleSubmit}
      isInputOpen={isInputOpen}
    >
      <Input
        type="text"
        onClick={handleInputClick}
        error={hasErrors}
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        isOpen={isInputOpen}
        placeholder="Pokemon name"
      />

      <Button type="button" onClick={handleSearchClick}>
        <SearchIcon />
      </Button>
    </Container>
  );
};

export { PokemonSearchBar };
