import React from "react";
import { useDispatch } from "react-redux";
import { CardState } from "www/ducks/cards";
import { selectCard } from "www/ducks/selectedCard";

export function Card({ card }: { card: CardState }) {
  const dispatch = useDispatch();
  const select = () => dispatch(selectCard(card));

  return (
    <div
      data-testid={`card-${card.type}`}
      data-name={card.name}
      onClick={select}
    >
      {card.type}-{card.name}
    </div>
  );
}
