import { IStorageObject } from "@src/Decorators/Auth";

/**
 * @description Simplismente verifica se o script é valido ou não (encapsulamento pra prevenção de futuras regras)
 * @param scriptInstance
 */
export const isValid = (scriptInstance: IStorageObject): boolean => {
  return scriptInstance.isValid;
};

/**
 * @description Responsável por tomar uma atitude caso o estado atual do script não seja valido
 * @param scriptInstance
 */
export const ScriptIsValid = (scriptInstance: IStorageObject): void => {
  try {
    const scriptIsValid = isValid(scriptInstance);
    if (!scriptIsValid) throw { e: "Validation: Script está invalido" };
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};
