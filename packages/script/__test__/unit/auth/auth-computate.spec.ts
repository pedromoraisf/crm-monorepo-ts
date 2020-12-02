import { extractScriptId } from "@src/useCases/Auth/AuthComputate";

const testEnv = "http://localhost:3000";

describe("Interface de autenticação com contato na camada operacional do objeto", () => {
  it("Extração do ID do script vindo na URL", () => {
    // Amostra 1
    const depInjection1 = "";
    const id1 = extractScriptId(depInjection1);
    expect(id1).toBe(0);

    // Amostra 2
    const depInjection2 = `${testEnv}/?script=3`;
    const id2 = extractScriptId(depInjection2);
    expect(id2).toBe(3);
  });
});
