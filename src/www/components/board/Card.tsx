import React from "react";
import { CardState } from "www/ducks/cards";

export function Card({ card }: { card: CardState }) {
  return (
    <div data-testid={`card-${card.type}`} data-name={card.name}>
      {card.type}-{card.name}
    </div>
  );
}
