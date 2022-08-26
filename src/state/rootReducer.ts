import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon";

const rootReducer = combineReducers({ pokemonState: pokemonReducer });

export { rootReducer };
