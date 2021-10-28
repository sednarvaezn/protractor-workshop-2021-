import { browser, ExpectedConditions } from 'protractor';
import {
  PaymentStepPage,
  ShippingStepPage,
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  OrderSummaryPage,
  SignInPage,
  AdressStepPage,
  BankPaymentPage,
  SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInPage: SignInPage = new SignInPage();
  const adressStepPage: AdressStepPage = new AdressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {

    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await browser.wait(ExpectedConditions.visibilityOf(productListPage.getAddToCartButton()), 3000);
    await productListPage.addToCart();
    await browser.wait(
      ExpectedConditions.visibilityOf(productAddedModalPage.getProccedCheckoutButton()), 3000
      );
    await productAddedModalPage.proccedCheckout();
    await orderSummaryPage.proceednavigationCart();
    await signInPage.inputEmail('aperdomobo@gmail.com');
    await signInPage.inputPassword('WorkshopProtractor');
    await signInPage.submit();
    await adressStepPage.proceedCheckout();
    await shippingStepPage.termCond();
    await shippingStepPage.proceedCheckout();
    await paymentStepPage.payByBank();
    await bankPaymentPage.confirmOrder();
    await expect(summaryStepPage.summaryStep())
      .toBe('Your order on My Store is complete.');
  });
});
