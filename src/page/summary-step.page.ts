import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private summaryStepText: ElementFinder;

  constructor () {
    this.summaryStepText = $('#center_column > div > p > strong');
  }

  public async summaryStep(): Promise<String> {
    return this.summaryStepText.getText();
  }
}
