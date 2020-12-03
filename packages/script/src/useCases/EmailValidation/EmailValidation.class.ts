import * as EmailValidator from "email-validator";

export class EmailValidation {
  constructor(private email: string) {}

  public emailIsValid(): boolean {
    return EmailValidator.validate(this.email);
  }
}
