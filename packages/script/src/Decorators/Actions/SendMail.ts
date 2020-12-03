import { isValid } from "@src/Decorators/Validation/ScriptIsValid";
import { IStorageObject } from "@src/Decorators/Auth";
import { SendMailService } from "@src/services/send-mail";

export interface IMail {
  subject: string;
  msg: string;
}

/**
 * @description Responsável por realizar a action de enviar o email pro usuário
 * @param scriptInstance
 */
export const SendMail = async (
  scriptInstance: IStorageObject
): Promise<void> => {
  try {
    const scriptIsValid = isValid(scriptInstance);
    if (!scriptIsValid) throw { e: "Validation: Script Inválido" };

    const mailRequest: IMail = {
      subject: scriptInstance.inputContents,
      msg: scriptInstance.msg,
    };

    const requestSendMail = await SendMailService(mailRequest);

    if (requestSendMail.status !== 200)
      throw { e: "Validation: Erro na requisição" };
  } catch (e) {
    console.error(JSON.stringify(e));
  }
};
