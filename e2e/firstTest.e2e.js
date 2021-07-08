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

  it('should have overview page', async () => {
    await expect(element(by.text('Your Balance'))).toBeVisible();
  });

  // Enter Category
  it('should be able to create account from overview page', async () => {
    await expect(element(by.id('addCategory'))).toBeVisible();
    await element(by.id('addCategory')).tap();

    await expect(element(by.id('accountPageFab'))).toBeVisible();
    await element(by.id('accountPageFab')).tap();
  });

  // Add Category
  it('should be able to  add account', async () => {
    await element(by.id('accountName')).typeText('My Bank 1');
    await element(by.id('openingBalance')).typeText('10000');
    await element(by.id('openingBalance')).tapReturnKey();
    await element(by.id('icon')).tap();
    await element(by.text('home')).tap();
    await element(by.id('add')).tap();
  });

  // Edit Category
  it('should be able to edit account', async () => {
    await element(by.text('My Bank 1')).atIndex(1).tap();

    await element(by.id('accountName')).replaceText('My Bank');
    await element(by.id('openingBalance')).replaceText('1000');
    await element(by.id('openingBalance')).tapReturnKey();
    await element(by.id('icon')).tap();
    await element(by.text('phone')).tap();
    await element(by.id('edit')).tap();
  });

  // Delete Category
  it('should be able to delete account', async () => {
    await element(by.text('My Bank')).atIndex(1).tap();
    await element(by.id('accountName')).tapReturnKey();
    await element(by.id('delete')).tap();
  });

  // Exit Category
  it('should be able exit account page', async () => {
    await element(by.text('Overview')).atIndex(0).tap();
  });

  // Enter Account
  it('should be able to create account from overview page', async () => {
    await expect(element(by.id('addaccount'))).toBeVisible();
    await element(by.id('addaccount')).tap();

    await expect(element(by.id('accountPageFab'))).toBeVisible();
    await element(by.id('accountPageFab')).tap();
  });

  // Add Account
  it('should be able to  add account', async () => {
    await element(by.id('accountName')).typeText('My Bank 1');
    await element(by.id('openingBalance')).typeText('10000');
    await element(by.id('openingBalance')).tapReturnKey();
    await element(by.id('icon')).tap();
    await element(by.text('home')).tap();
    await element(by.id('add')).tap();
  });

  // Edit Account
  it('should be able to edit account', async () => {
    await element(by.text('My Bank 1')).atIndex(1).tap();

    await element(by.id('accountName')).replaceText('My Bank');
    await element(by.id('openingBalance')).replaceText('1000');
    await element(by.id('openingBalance')).tapReturnKey();
    await element(by.id('icon')).tap();
    await element(by.text('phone')).tap();
    await element(by.id('edit')).tap();
  });

  // Delete Account
  it('should be able to delete account', async () => {
    await element(by.text('My Bank')).atIndex(1).tap();
    await element(by.id('accountName')).tapReturnKey();
    await element(by.id('delete')).tap();
  });

  // Exit Account
  it('should be able exit account page', async () => {
    await element(by.text('Overview')).atIndex(0).tap();
  });
});
