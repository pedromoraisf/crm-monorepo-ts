import { scriptVerifyService } from "@src/services/script-verify";

export interface IStorageObject {
  id: number;
  url: string;
  msg: string;
  isValid: boolean;
}

/**
 * @description Método responsável por transpilar a url em string ou retorna-la caso seja mesmo
 * @param urlReceive
 */
const treatStringUrl = (urlReceive: string): string => {
  return typeof urlReceive === "string" ? urlReceive : "";
};

/**
 * @description Método por validar se a url é realmente oq esperamos
 * @param urlReceive
 */
const validateUrl = (urlReceive: string): boolean => {
  // Parâmetros esperados e não esperados
  const EXPECTED_PATTERNS = ["?script="];
  const NOT_EXPECTED_PATTERNS = ["&"];

  // Isolando os query params
  const instanceUrl = new URL(urlReceive);
  const searchParams = instanceUrl.search;

  // Verificando os parâmetros esperados
  const expectedIsSupplied = !!EXPECTED_PATTERNS.filter(
    (e) => searchParams.indexOf(e) !== -1
  ).length;

  // Verificando os parâmetros nãoe sperados
  const notExpectedIsSupplied = !!NOT_EXPECTED_PATTERNS.filter(
    (e) => searchParams.indexOf(e) !== -1
  ).length;

  const isValid = expectedIsSupplied && !notExpectedIsSupplied;

  return isValid;
};

/**
 * @description Responsável por extrair o id recebido em parâmetro
 * @param urlReceive
 */
const extractScriptId = (urlReceive: string): number => {
  const SPLIT_PATTERN = "script=";
  const scriptId = Number(urlReceive.split(SPLIT_PATTERN)[1]);

  return !isNaN(scriptId) ? scriptId : 0;
};

/**
 * @description Responsável por validar a url recebida e autenticar
 * @param scriptInstance
 * @param urlReceive
 */
export const AuthUrl = async (
  scriptInstance: IStorageObject
): Promise<boolean> => {
  // Retorno a url "tratada" pras possiveis validações
  const returnStringUrl = treatStringUrl(scriptInstance.url);

  // Verifico se a url é valida de acordo com os requisitos esperados
  const urlIsValid = validateUrl(returnStringUrl);
  if (!urlIsValid) {
    scriptInstance.isValid = false;
    return false;
  }

  // Extraio o id do script vindo no query param
  const scriptId = extractScriptId(returnStringUrl);
  scriptInstance.id = scriptId;
  if (scriptId === 0) {
    scriptInstance.isValid = false;
    return false;
  }

  // Realizo a chamada a api pra verificação do script setado
  try {
    const requestScript = await scriptVerifyService(scriptId);

    if (requestScript.status !== 200 && requestScript.data.status === 200)
      throw { e: "Erro na requisição" };

    const isolateScriptMessage = requestScript.data.scriptMessage;

    // Fazendo o bootstrap no objeto
    scriptInstance.url = returnStringUrl;
    scriptInstance.msg = isolateScriptMessage;
    scriptInstance.isValid = true;
  } catch (e) {
    console.log(JSON.stringify(e));
    scriptInstance.isValid = false;
    return false;
  }

  return true;
};
