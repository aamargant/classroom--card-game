import React from "react";
import { useSelector } from "react-redux";
import { listSquareCards } from "www/ducks/cards";
import { Cards } from "./Cards";
import { Pile } from "./Pile";

export function Square({ player, square }: { player: string; square: number }) {
  const cards = useSelector((s: any) => listSquareCards(s, { player, square }));

  return (
    <div data-testid={`${player}-square-${square}`}>
      <Pile name={`${player}-square-${square}`} />
      <Cards cards={cards} />
    </div>
  );
}
