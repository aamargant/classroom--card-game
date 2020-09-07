import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { HasAtTheSquareACardOf } from "./HasAtTheSquareACardOf";
import { HasInHisHandCards } from "./HasInHisHandCards";
import { HasInHisHandCardsOf } from "./HasInHisHandCardsOf";
import { TheCurrentPlayerIs } from "./TheCurrentPlayerIs";
import { TheCurrentRoundIs } from "./TheCurrentRoundIs";

export default function configureTestStepsBoardInjector(injector: Injector) {
  injector.register(PostLineStep, HasAtTheSquareACardOf);
  injector.register(PostLineStep, HasInHisHandCards);
  injector.register(PostLineStep, HasInHisHandCardsOf);
  injector.register(PostLineStep, TheCurrentPlayerIs);
  injector.register(PostLineStep, TheCurrentRoundIs);
}
