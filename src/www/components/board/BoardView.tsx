import React from "react";
import { useSelector } from "react-redux";
import { listPlayers } from "www/ducks/game";
import { Hand } from "./Hand";
import { Pile } from "./Pile";
import { Squares } from "./Squares";

function PlayerView({ player }: { player: string }) {
  return (
    <>
      <div>{player}</div>
      <Squares player={player} key={player} />
      <Hand player={player} />
      <hr />
    </>
  );
}

export function BoardView() {
  const players = useSelector(listPlayers);
  if (players === null) return null;

  return (
    <div>
      <div>Piles</div>
      <Pile name="event" />
      <Pile name="buy-field" />
      <Pile name="buy-knight" />
      <hr />
      {players.map((player) => (
        <PlayerView player={player} key={player} />
      ))}
    </div>
  );
}
