import { IStorageObject } from "@src/useCases/Auth";
import { VerifyValidElements } from "@src/useCases/Observer/VerifyValidElements";

export type cb = (instanceScript: IStorageObject) => void; // ??
export interface IObserver {
  attach(instanceScript: IStorageObject): void;
  detach(instanceScript: IStorageObject): void;
  notify(fn: cb): void;
}

export { VerifyValidElements };

// Primeiramente verifico se os inputs de formulário e input do usuario sao validos
// Então aplico nos listeners os eventos de update
