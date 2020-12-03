import { Observer } from "@src/useCases/Observer/Observer.class";
import { SCRIPT_INSTANCE } from "@src/useCases/Auth";
import "@test/utils/extendToContainObject";

const instanceObserver = Observer.getInstance();

describe("Tentando funcionalidades da classe de Observer", () => {
  it("Funcionalidade de attach", () => {
    instanceObserver.attach(SCRIPT_INSTANCE);
    expect(instanceObserver.observers).toStrictEqual([SCRIPT_INSTANCE]);
  });

  it("Funcionalidade de detach", () => {
    instanceObserver.detach(SCRIPT_INSTANCE);
    expect(instanceObserver.observers).toStrictEqual([]);
  });

  it("Funcionalidade de notificação", () => {
    instanceObserver.attach(SCRIPT_INSTANCE);

    let result = 0;
    instanceObserver.notify((script) => (result = script.id));

    expect(result).toBe(0);
  });
});
