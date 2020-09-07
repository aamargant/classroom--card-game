import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { enterGame } from "./enterGame";
import { getCurrentPlayerName } from "./getCurrentPlayerName";
import { getGameName } from "./getGameName";
import { REFRESH_GAME } from "./refreshGame";

export class RefreshGameDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;
  private apiRest: ApiRest;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== REFRESH_GAME) return;

    const gameName = this.reduxStore.select(getGameName);
    const playerName = this.reduxStore.select(getCurrentPlayerName);

    this.reduxStore.dispatch(enterGame({ gameName, playerName }));
  }
}
