import { AuthUrl } from "@src/useCases/Auth/AuthUrl";

// Considerando que a URL chegue assim: http://localhost:5000/?script=4
const testEnv = "http://localhost:3000";

// Isolando objeto de entrada
const initializeObject = {
  id: 0,
  url: "",
  msg: "",
  isValid: false,
};

describe("Autenticação pela url", () => {
  it("Realiza a ação de autenticação dos valores passados na url", async () => {
    const sample = `${testEnv}/?sccript=3`;
    expect(await AuthUrl(initializeObject, sample)).toStrictEqual({
      id: 0,
      url: "",
      msg: "",
      isValid: false,
    });
  });
});
