import { GetUrl } from "@src/useCases/Auth/GetUrl";
import { AuthUrl } from "@src/useCases/Auth/AuthUrl";

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
  await AuthUrl(SCRIPT_INSTANCE);

  return SCRIPT_INSTANCE;
};
