import { scriptVerifyService } from "@src/services/script-verify";
import { IStorageObject } from "@src/Decorators/Auth";

/**
 * @description Responsável por extrair o id recebido em parâmetro
 * @param urlReceive
 */
export const extractScriptId = (urlReceive: string): number => {
  const SPLIT_PATTERN = "script=";
  const scriptId = Number(urlReceive.split(SPLIT_PATTERN)[1]);

  return !isNaN(scriptId) ? scriptId : 0;
};

/**
 * @description Responsável por realizar a camada de integração com a API e retornar os dados necessários
 * @param scriptInstance
 */
export const AuthComputate = async (
  scriptInstance: IStorageObject
): Promise<void> => {
  // Extraio o id do script vindo no query param
  const scriptId = extractScriptId(scriptInstance.url);
  scriptInstance.id = scriptId;
  if (scriptId === 0) {
    scriptInstance.isValid = false;
  }

  // Realizo a chamada a api pra verificação do script setado
  try {
    const requestScript = await scriptVerifyService(scriptId);

    if (requestScript.status !== 200 || requestScript.data.status !== 200)
      throw { e: "AuthComputate: Erro na requisição" };

    // Fazendo o bootstraping no objeto
    scriptInstance.msg = requestScript.data.msg;
    scriptInstance.inputPath = requestScript.data.inputPath;
    scriptInstance.formPath = requestScript.data.formPath;
  } catch (e) {
    console.error(JSON.stringify(e));
    scriptInstance.isValid = false;
  }
};
