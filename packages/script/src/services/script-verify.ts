import axios from "axios";

const env = "http://localhost:3000";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const scriptVerifyService = (scriptId: number): any => {
  try {
    const request = axios.get(`${env}?script=${scriptId}`);
    return request;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};
