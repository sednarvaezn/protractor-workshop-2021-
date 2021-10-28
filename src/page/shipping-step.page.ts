import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termCondButton: ElementFinder;
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.termCondButton = $('#cgv');
    this.proceedCheckoutButton = $('#form > p > button > span');
  }

  public async termCond(): Promise<void> {
    await this.termCondButton.click();
  }

  public async proceedCheckout(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
