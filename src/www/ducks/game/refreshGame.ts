export const REFRESH_GAME = "game/REFRESH_GAME";
export function refreshGame(body: object) {
  return {
    type: REFRESH_GAME,
    body,
  };
}
