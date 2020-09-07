import { Action } from "redux";
import { set, merge } from "object-path-immutable";
import { push as mutatePush, set as mutateSet } from "object-path";
import { ReduxReducer } from "../ReduxReducer";
import { GameState } from "../game/GameState";
import { CardsState } from "./CardsState";
import { CardState } from "./CardState";
import { REPLACE_CARDS } from "./replaceCards";

export class CardsDuck implements ReduxReducer {
  reduce(state: GameState & CardsState, action: Action & any): {} {
    if (state.cards == null) state = set(state, "cards", null);

    switch (action.type) {
      case REPLACE_CARDS:
        return merge(state, "cards", computeCards(action.cards));
      default:
        return state;
    }
  }
}

function computeCards(cards: CardState[]) {
  const result: CardsState["cards"] = { players: {}, byId: {} };
  cards.forEach((c) => assignCard(c, result));
  return result;
}

function assignCard(card: CardState, result: CardsState["cards"]) {
  const { ownerName, square } = card;
  if (!ownerName) return;

  mutatePush(result, ["players", ownerName, "squares", +square, "cards"], card);
  mutateSet(result, ["byId", card.id], card);
}
