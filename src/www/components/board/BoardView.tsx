import React from "react";
import { useSelector } from "react-redux";
import { listPlayers } from "www/ducks/game";
import { Hand } from "./Hand";
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
  // const currentPlayer = useSelector(getCurrentPlayerName);
  const players = useSelector(listPlayers);
  if (players === null) return null;

  return (
    <div>
      {players.map((player) => (
        <PlayerView player={player} key={player} />
      ))}
    </div>
  );
}
