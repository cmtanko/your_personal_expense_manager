/* eslint-disable no-undef */
describe('Your Expense Manager App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('appIntro'))).toBeVisible();
  });

  it('should scroll to next page on Next button click', async () => {
    await expect(element(by.text('Track Your Spending'))).toBeVisible();
    await expect(element(by.text('Next'))).toBeVisible();
    await element(by.text('Next')).tap();

    await expect(element(by.text('On The Go'))).toBeVisible();
    await expect(element(by.text('Next'))).toBeVisible();
    await element(by.text('Next')).tap();

    await expect(element(by.text('All Your Accounts'))).toBeVisible();
    await expect(element(by.text('Next'))).toBeVisible();
    await element(by.text('Next')).tap();

    await expect(element(by.text('Plan Ahead'))).toBeVisible();
    await expect(element(by.text('Next'))).toBeVisible();
    await element(by.text('Next')).tap();

    await expect(element(by.text('Get Your Expense Report'))).toBeVisible();
    await expect(element(by.text('Done'))).toBeVisible();
    await element(by.text('Done')).tap();
  });

  it('should have welcome screen1', async () => {
    await expect(element(by.id('appIntro'))).toBeVisible();
  });
});
