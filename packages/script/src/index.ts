import "./helpers/module-alias";
import {
  SCRIPT_INSTANCE,
  GetUrl,
  AuthUrl,
  AuthComputate,
} from "@src/Decorators/Auth";
import {
  VerifyValidElements,
  ScriptIsValid,
  SetterInput,
} from "@src/Decorators/Validation";
import { SendMail } from "@src/Decorators/Actions";
import ObserverInstance from "@src/useCases/Observer";

// Camada de Autenticação
GetUrl(SCRIPT_INSTANCE);
AuthUrl(SCRIPT_INSTANCE);
ScriptIsValid(SCRIPT_INSTANCE);
AuthComputate(SCRIPT_INSTANCE);
ScriptIsValid(SCRIPT_INSTANCE);

// Camada de Validação
VerifyValidElements(SCRIPT_INSTANCE);
ScriptIsValid(SCRIPT_INSTANCE);

// Realizando o attach do objeto ao observer
ObserverInstance.attach(SCRIPT_INSTANCE);

// Evento de notificação na modificação do input
if (SCRIPT_INSTANCE.inputElement !== null)
  SCRIPT_INSTANCE.inputElement.addEventListener("input", () => {
    SetterInput(SCRIPT_INSTANCE);
  });

// Evento de disparo da action de email
if (SCRIPT_INSTANCE.formElement !== null)
  SCRIPT_INSTANCE.formElement.addEventListener("input", () => {
    ObserverInstance.notify(SendMail);
  });
