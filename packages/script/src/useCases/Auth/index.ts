import { GetUrl } from "@src/useCases/Auth/GetUrl";
import { AuthUrl } from "@src/useCases/Auth/AuthUrl";
import { AuthComputate } from "@src/useCases/Auth/AuthComputate";

export interface IStorageObject {
  id: number;
  url: string;
  inputPath: string;
  formPath: string;
  inputElement: Element | null;
  formElement: Element | null;
  msg: string;
  isValid: boolean;
  latestAction: number;
}

export const SCRIPT_INSTANCE = {
  id: 0,
  url: "",
  inputPath: "",
  formPath: "",
  inputElement: null,
  formElement: null,
  msg: "",
  isValid: false,
  latestAction: 0,
};

export { GetUrl, AuthUrl, AuthComputate };
