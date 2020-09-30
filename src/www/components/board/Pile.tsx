import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPileCards } from "www/ducks/cards";
import { playSelectedCard } from "www/ducks/selectedCard";
import { Cards } from "./Cards";

export function Pile({ name }: { name: string }) {
  const dispatch = useDispatch();
  const cards = useSelector((s: any) => listPileCards(s, { pile: name }));
  const pile = () => dispatch(playSelectedCard(name));

  return (
    <div data-testid={`pile-${name}`} onClick={pile}>
      {name}
      <Cards cards={cards} />
    </div>
  );
}
