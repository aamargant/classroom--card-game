import { CardsState, CardState } from "../cards";
import { SelectedCardState } from "./SelectedCardState";

export function getSelectedCard(
  state: SelectedCardState & CardsState
): CardState | null {
  const card = state.selectedCard.card;
  return card || null;
}
