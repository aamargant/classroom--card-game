import { CardsPlayerState } from "./CardsPlayerState";
import { CardState } from "./CardState";

export interface CardsState {
  cards: {
    players: { [name: string]: CardsPlayerState };
    byId: { [id: number]: CardState };
  };
}
