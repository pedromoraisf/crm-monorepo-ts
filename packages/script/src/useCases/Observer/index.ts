import SCRIPT_INSTANCE from "@src/useCases/Auth";
import { IStorageObject } from "@src/useCases/Auth";

export interface IObserver {
  observers: IStorageObject[];
  attach(instanceScript: IStorageObject): void;
  detach(instanceScript: IStorageObject): void;
  update(): void;
}

// Primeiramente verifico se os inputs de formulário e input do usuario sao validos
// Então aplico nos listeners os eventos de update
