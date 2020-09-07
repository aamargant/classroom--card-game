import { GameState } from "./GameState";

export function getCurrentPlayerName(state: GameState): string {
  return state.game?.currentPlayerName;
}
