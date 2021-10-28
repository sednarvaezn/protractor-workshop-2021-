import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private submitButton: ElementFinder;

  constructor () {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.submitButton = $('#SubmitLogin > span');
  }

  public async inputEmail(email): Promise<void> {
    await this.emailInput.sendKeys(email);
  }
  public async inputPassword(password): Promise<void> {
    await this.passwordInput.sendKeys(password);
  }
  public async submit(): Promise<void> {
    await this.submitButton.click();
  }
}
