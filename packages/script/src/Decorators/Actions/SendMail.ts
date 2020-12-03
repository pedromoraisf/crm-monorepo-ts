import { isValid } from "@src/Decorators/Validation/ScriptIsValid";
import { IStorageObject } from "@src/Decorators/Auth";
import { SendMailService } from "@src/services/send-mail";

export interface IMailRequest {
  subject: string; // Email que será enviado
  msg: string;
}

/**
 * @description Responsável por verificar se o objeto esta preparado para ter um email enviado
 * @param scriptInstance
 */
const isValidForSendEmail = (scriptInstance: IStorageObject): boolean => {
  const isValidObject = isValid(scriptInstance);
  const isValidInput = scriptInstance.inputContents === true;

  return isValidObject && isValidInput;
};

/**
 * @description Responsável por realizar a action de enviar o email pro usuário
 * @param scriptInstance
 */
export const SendMail = async (
  scriptInstance: IStorageObject
): Promise<void> => {
  try {
    const scriptIsValid = isValidForSendEmail(scriptInstance);
    if (!scriptIsValid) throw { e: "Validation: Script Inválido" };

    // Isolando o email
    const isolateSubject =
      typeof scriptInstance.inputContents === "string"
        ? scriptInstance.inputContents
        : "";

    const mailRequest: IMailRequest = {
      subject: isolateSubject,
      msg: scriptInstance.msg,
    };

    const requestSendMail = await SendMailService(mailRequest);

    if (requestSendMail.status !== 200)
      throw { e: "Validation: Erro na requisição" };
  } catch (e) {
    console.error(JSON.stringify(e));
  }
};
