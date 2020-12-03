import { IStorageObject } from "@src/Decorators/Auth";

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
 * @description Responsável por validar a url recebida e autenticar
 * @param scriptInstance
 * @param urlReceive
 */
export const AuthUrl = (scriptInstance: IStorageObject): void => {
  // Retorno a url "tratada" pras possiveis validações
  const returnStringUrl = treatStringUrl(scriptInstance.url);
  scriptInstance.url = returnStringUrl;

  // Verifico se a url é valida de acordo com os requisitos esperados
  const urlIsValid = validateUrl(returnStringUrl);
  if (!urlIsValid) {
    scriptInstance.isValid = false;
  }
};
