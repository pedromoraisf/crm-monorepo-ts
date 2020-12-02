import { IStorageObject } from "@src/useCases/Auth";

/**
 * @description Responsável por injetar a url ao objeto
 * @param scriptInstance
 */
export const GetUrl = (scriptInstance: IStorageObject): void => {
  scriptInstance.url = location.href;
};
