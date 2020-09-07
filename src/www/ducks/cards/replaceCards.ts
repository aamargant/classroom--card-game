import { CardState } from "./CardState";

export const REPLACE_CARDS = "cards/REPLACE_CARDS";
export function replaceCards(cards: CardState[]) {
  return {
    type: REPLACE_CARDS,
    cards,
  };
}
