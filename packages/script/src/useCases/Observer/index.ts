import { IStorageObject } from "@src/Decorators/Auth";
import { Observer } from "@src/useCases/Observer/Observer.class";

export type cb = (instanceScript: IStorageObject) => void; // ??

export interface IObserver {
  attach(instanceScript: IStorageObject): void;
  detach(instanceScript: IStorageObject): void;
  notify(fn: cb): void;
}

export default Observer.getInstance();
