const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('Adding an element to the stack via the webpage updates the stack correctly', async () => {
    const elementToAdd = "Apple";

    // Act
    await driver.findElement(By.id('push')).click(); 
    await driver.switchTo().alert().sendKeys(elementToAdd); 
    await driver.switchTo().alert().accept(); 

    await driver.wait(until.elementTextIs(driver.findElement(By.id('top_of_stack')), elementToAdd), defaultTimeout);

    const topOfStackText = await driver.findElement(By.id('top_of_stack')).getText();
    expect(topOfStackText).toBe(elementToAdd);
});
