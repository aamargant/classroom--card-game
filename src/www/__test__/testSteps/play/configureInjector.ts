import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { PlaysACardIntoHisSquarePile } from "./PlaysACardIntoHisSquarePile";
import { PlaysACardIntoTheSquarePile } from "./PlaysACardIntoTheSquarePile";
import { PlaysACardOfIntoThePile } from "./PlaysACardOfIntoThePile";
import { PlaysNCardsIntoHisSquarePile } from "./PlaysNCardsIntoHisSquarePile";
import { PlaysNCardsIntoThePile } from "./PlaysNCardsIntoThePile";
import { PlaysNCardsIntoTheSquarePile } from "./PlaysNCardsIntoTheSquarePile";
import { PlaysNCardsOfIntoThePile } from "./PlaysNCardsOfIntoThePile";

export default function configureTestStepsPlayInjector(injector: Injector) {
  injector.register(PostLineStep, PlaysACardIntoHisSquarePile);
  injector.register(PostLineStep, PlaysACardIntoTheSquarePile);
  injector.register(PostLineStep, PlaysACardOfIntoThePile);
  injector.register(PostLineStep, PlaysNCardsIntoHisSquarePile);
  injector.register(PostLineStep, PlaysNCardsIntoThePile);
  injector.register(PostLineStep, PlaysNCardsIntoTheSquarePile);
  injector.register(PostLineStep, PlaysNCardsOfIntoThePile);
}
