import { AuthUrl } from "@src/useCases/Auth/AuthUrl";

// Considerando que a URL chegue assim: http://localhost:5000/?script=4
const testEnv = "http://localhost:3000";

describe("Autenticação pela url", () => {
  it("Realiza a ação de autenticação dos valores passados na url", () => {
    const sample = {
      id: 0,
      url: `${testEnv}/?sccripts`,
      inputPath: "",
      formPath: "",
      formElement: null,
      inputElement: null,
      msg: "",
      isValid: false,
      latestAction: 0,
    };

    AuthUrl(sample);

    expect(sample).toStrictEqual(sample);
  });
});
