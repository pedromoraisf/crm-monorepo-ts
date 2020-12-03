import axios from "axios";
import { IMailRequest } from "@src/Decorators/Actions/SendMail";

const env = "http://localhost:3000";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SendMailService = (mailRequest: IMailRequest): any => {
  try {
    const request = axios.post(`${env}/mail-request`, { mailRequest });
    return request;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};
