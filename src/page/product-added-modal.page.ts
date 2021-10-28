import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    this.proccedCheckoutButton = $('a.button-medium > span:nth-child(1)');
  }

  public async proccedCheckout(): Promise<void> {
    await this.proccedCheckoutButton.click();
  }
  public getProccedCheckoutButton(): ElementFinder {
    return this.proccedCheckoutButton;
  }
}
