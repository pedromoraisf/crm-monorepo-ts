export interface IStorageObject {
  id: number;
  url: string;
  msg: string;
  isValid: boolean;
}

/**
 * @description Responsável por injetar a url ao objeto
 * @param scriptInstance
 */
export const GetUrl = (scriptInstance: IStorageObject): void => {
  scriptInstance.url = location.href;
};
