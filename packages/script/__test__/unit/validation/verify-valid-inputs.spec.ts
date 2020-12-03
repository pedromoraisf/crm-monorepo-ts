import { VerifyValidElements } from "@src/Decorators/Validation/VerifyValidElements";

// Considerando que a URL chegue assim: http://localhost:5000/?script=4
const testEnv = "http://localhost:3000";

describe("Verificação de inputs", () => {
  it("Verifica se o estado atual do objeto script é invalido e notifica", () => {
    //
  });

  it("Verifica se os inputs do script do usuário são validos", () => {
    const sample = {
      id: 1,
      url: `${testEnv}/?sccripts`,
      inputPath: "#input-test",
      formPath: "#form",
      formElement: null,
      inputElement: null,
      msg: "Mensagem de teste",
      isValid: true,
      latestAction: 0,
    };

    VerifyValidElements(sample);

    expect(sample).toStrictEqual(sample);
  });
});
