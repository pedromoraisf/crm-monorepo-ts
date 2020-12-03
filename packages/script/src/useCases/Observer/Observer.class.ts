import { IStorageObject } from "@src/Decorators/Auth";
import { IObserver, cb } from "@src/useCases/Observer";

/**
 * Classe responsável por estruturar o design pattern Observer na aplicação
 */
export class Observer implements IObserver {
  private static instance: Observer;
  public observers: IStorageObject[] = [];

  /**
   * @description Singleton
   */
  public static getInstance(): Observer {
    if (!Observer.instance) {
      Observer.instance = new Observer();
    }

    return Observer.instance;
  }

  /**
   * @description Responsável por adicionar um observer a lista da instancia
   * @param instanceScript
   */
  public attach(instanceScript: IStorageObject): void {
    const observerAttached = this.observers.some(
      ({ id }) => instanceScript.id === id
    );

    if (observerAttached) {
      return console.log("Observer: Observer já registrado");
    }

    this.observers.push(instanceScript);
  }

  /**
   * @description Responsável por remover um observer a lista da instancia
   * @param instanceScript
   */
  public detach(instanceScript: IStorageObject): void {
    const isolateIndex = this.observers.indexOf(instanceScript);

    if (isolateIndex === -1) {
      return console.log("Observer: Observer não registrado");
    }

    this.observers.splice(isolateIndex, 1);
  }

  /**
   * @description Responsável por notificar os observers
   * @param instanceScript
   */
  public notify(fn: cb): void {
    this.observers.forEach((o) => {
      fn(o);
    });
  }
}
