import { GetUrl } from "@src/Decorators/Auth/GetUrl";
import { AuthUrl } from "@src/Decorators/Auth/AuthUrl";
import { AuthComputate } from "@src/Decorators/Auth/AuthComputate";

export interface IStorageObject {
  id: number;
  url: string;
  inputPath: string;
  inputElement: Element | null;
  inputContents: string | boolean;
  formPath: string;
  formElement: Element | null;
  msg: string;
  isValid: boolean;
  latestAction: number;
}

export const SCRIPT_INSTANCE: IStorageObject = {
  id: 0,
  url: "",
  inputPath: "",
  inputElement: null,
  inputContents: false,
  formPath: "",
  formElement: null,
  msg: "",
  isValid: false,
  latestAction: 0,
};

export { GetUrl, AuthUrl, AuthComputate };
