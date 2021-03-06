import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { decrementLoading, incrementLoading } from "../loading";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { setView } from "../view";
import { NEW_GAME } from "./newGame";

export class NewGameDuck implements ReduxAfterAction {
  private apiRest: ApiRest;
  private reduxStore: ReduxStore;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== NEW_GAME) return;

    this.reduxStore.dispatch(incrementLoading());
    await this.apiRest.post(`/api/v1/games`, action.body);
    this.reduxStore.dispatch(setView({ root: "Main" }));
    this.reduxStore.dispatch(decrementLoading());
  }
}
