import { IStorageObject } from "@src/useCases/Auth";

interface isValidElement {
  searchElement: Element | null;
  isValid: boolean;
}

/**
 * @description Método responsável por verificar isoladamente se o elemento é valido ou não
 * @param inputPath
 */
export const validElement = (formPath: string): isValidElement => {
  const searchElement = document.querySelector(formPath);

  return {
    searchElement: searchElement,
    isValid: !!searchElement,
  };
};

/**
 * @description Verifica se os dados passados nos elementos de form e input são validos
 * @param scriptInstance
 */
export const VerifyValidElements = (scriptInstance: IStorageObject): void => {
  const formIsValid = validElement(scriptInstance.formPath);
  const inputIsValid = validElement(scriptInstance.inputPath);

  if (!formIsValid.isValid || !inputIsValid.isValid) {
    scriptInstance.isValid = false;
  } else {
    scriptInstance.formElement = formIsValid.searchElement;
    scriptInstance.inputElement = inputIsValid.searchElement;
  }
};
