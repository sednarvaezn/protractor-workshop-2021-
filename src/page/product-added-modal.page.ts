import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    this.proccedCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async proccedCheckout(): Promise<void> {
    await this.proccedCheckoutButton.click();
  }
  public getProccedCheckoutButton(): ElementFinder {
    return this.proccedCheckoutButton;
  }
}
