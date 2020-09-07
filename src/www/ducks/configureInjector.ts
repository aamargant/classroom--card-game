import { Injector } from "www/injector";
import { ReduxStore } from "./ReduxStore";
import configureCardsInjector from "./cards";
import configureGameInjector from "./game";
import configureLoadingInjector from "./loading";
import configureNewGameInjector from "./newGame";
import configureViewInjector from "./view";

export default function configureDucksnjector(injector: Injector) {
  injector.configure(configureCardsInjector);
  injector.configure(configureGameInjector);
  injector.configure(configureLoadingInjector);
  injector.configure(configureNewGameInjector);
  injector.configure(configureViewInjector);

  injector.register(ReduxStore);
}
