export const READY_GAME = "game/READY_GAME";
export function readyGame(body: object) {
  return {
    type: READY_GAME,
    body,
  };
}
