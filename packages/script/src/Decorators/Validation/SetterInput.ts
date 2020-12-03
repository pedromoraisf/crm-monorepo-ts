import { IStorageObject } from "@src/Decorators/Auth";
import EmailValidation from "@src/useCases/EmailValidation";

/**
 * @description Responsável por validar o input que está sendo colocado no campo e atualizar o estado do objeto
 * @param scriptInstance
 */
export const SetterInput = (scriptInstance: IStorageObject): void => {
  // Isolando o input do usuário no email
  const inputedString = (scriptInstance.inputElement as HTMLInputElement)
    ?.value;

  // Verificando se o email é valido e realizando a notificação do objeto
  const emailInstance = new EmailValidation(inputedString);
  scriptInstance.inputContents = emailInstance.emailIsValid()
    ? inputedString
    : false;
};
