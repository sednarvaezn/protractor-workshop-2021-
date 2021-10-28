import { $, ElementFinder } from 'protractor';

export class AdressStepPage {
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.proceedCheckoutButton = $('#center_column > form > p > button > span');
  }

  public async proceedCheckout(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }

}
