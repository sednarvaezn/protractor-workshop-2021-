import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private navigationCartButton: ElementFinder;

  constructor () {
    this.navigationCartButton = $('.cart_navigation span');
  }

  public async proceednavigationCart(): Promise<void> {
    await this.navigationCartButton.click();
  }
}
