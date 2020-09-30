import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "www/ducks/currentUser";
import { readyGame, refreshGame } from "www/ducks/game";
import { getGameRound } from "www/ducks/game";
import { isLoading } from "www/ducks/loading";
import { setView } from "www/ducks/view";

export function MainHeader() {
  const dispatch = useDispatch();
  const playerName = useSelector(getCurrentUser);
  const round = useSelector(getGameRound);
  const loading = useSelector(isLoading);
  const newGame = () => dispatch(setView({ root: "NewGame" }));
  const enterGame = () => dispatch(setView({ root: "EnterGame" }));
  const ready = () => dispatch(readyGame());
  const refresh = () => dispatch(refreshGame());

  return (
    <div>
      Header
      <button onClick={newGame}>New Game</button>
      <button onClick={enterGame}>Enter Game</button>
      {playerName && (
        <span data-testid="current-player-name">{playerName}</span>
      )}
      {round && <span data-testid="current-round">{round}</span>}
      {loading && <span data-testid="loading">߷</span>}
      <button onClick={ready}>Ready</button>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}
