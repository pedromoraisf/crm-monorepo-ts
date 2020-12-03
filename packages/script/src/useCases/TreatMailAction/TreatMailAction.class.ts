import ObserverInstance from "@src/useCases/Observer";
import { SendMail } from "@src/Decorators/Actions";

export interface IAddEventListener extends MouseEvent, Event {
  path: string[];
}

/**
 * @description Responsável por encapsular toda a tratativa de actions do form
 */
export class TreatMailAction {
  private recognizeButton: string[] = ["button"];
  private timeToFireMail = 30;
  private actionToFireMail = 0;

  constructor(private htmlElement?: Event) {}

  /**
   * @description Responsável por verificar se o click do usuário foi num botão
   */
  public verifySubmitClick(): boolean {
    const isolatePath = (this.htmlElement as IAddEventListener).path;
    const isButtonCase = isolatePath.some((i) => {
      return this.recognizeButton.some((r) => r === i);
    });

    return isButtonCase;
  }

  /**
   * @description Responsável pela ação do trigger da action de enviar o email
   */
  public fireMail(): void {
    if (this.actionToFireMail !== 0)
      setTimeout(() => {
        ObserverInstance.notify(SendMail);
      }, this.timeToFireMail);
  }

  /**
   * @description Responsável pela ação de cancelar a trigger da action de enviar o email
   */
  public eraseAction(): void {
    clearTimeout(this.actionToFireMail);
  }
}
