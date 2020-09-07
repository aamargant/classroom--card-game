import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { Mock } from "./Mock";

export default function configureTestStepsCheatingInjector(injector: Injector) {
  injector.register(PostLineStep, Mock);
}
