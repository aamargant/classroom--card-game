import React from "react";
import { useSelector } from "react-redux";
import { listSquareCards } from "www/ducks/cards";
import { Cards } from "./Cards";

export function Hand({ player }: { player: string }) {
  const cards = useSelector((s: any) =>
    listSquareCards(s, { player, square: 0 })
  );

  return (
    <div data-testid={`${player}-hand`}>
      {" "}
      <Cards cards={cards} />
    </div>
  );
}
