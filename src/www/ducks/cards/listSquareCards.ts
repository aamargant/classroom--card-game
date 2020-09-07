import { CardState } from "../game";
import { CardsState } from "./CardsState";

const EMPTY: CardState[] = [];
export function listSquareCards(
  state: CardsState,
  { player, square }: { player: string; square: number }
): CardState[] {
  return state.cards.players[player].squares[square]?.cards || EMPTY;
}
