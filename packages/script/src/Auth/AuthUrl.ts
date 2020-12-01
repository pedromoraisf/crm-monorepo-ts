export interface IUrl {
  script: number;
}

export const AuthUrl = (urlReceive: IUrl): void => {
  console.log(urlReceive);
};
