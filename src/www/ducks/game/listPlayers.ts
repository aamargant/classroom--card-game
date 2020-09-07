import { GameState } from "./GameState";

let game: GameState["game"] | null = null;
let result: string[] | null = null;
export function listPlayers(state: GameState): string[] | null {
  if (state.game === game) return result;

  game = state.game;
  result = Object.keys(game.players);
  return result;
}
