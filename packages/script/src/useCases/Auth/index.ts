import { GetUrl } from "@src/useCases/Auth/GetUrl";
import { AuthUrl } from "@src/useCases/Auth/AuthUrl";
import { AuthComputate } from "@src/useCases/Auth/AuthComputate";

export interface IStorageObject {
  id: number;
  url: string;
  msg: string;
  isValid: boolean;
}

export const SCRIPT_INSTANCE = {
  id: 0,
  url: "",
  msg: "",
  isValid: false,
};

export default async (): Promise<IStorageObject> => {
  GetUrl(SCRIPT_INSTANCE);
  AuthUrl(SCRIPT_INSTANCE);
  await AuthComputate(SCRIPT_INSTANCE);

  return SCRIPT_INSTANCE;
};
