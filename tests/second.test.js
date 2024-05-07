// Importerar funktioner från selenium.
const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

//Definierar sökväg till testet.
const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);


// Klickar på knappen för att ta bort från stacken.
test('Popping an element from the stack removes it from the top', async () => {
    await driver.findElement(By.id('pop')).click();

    // Väntar tills en alertruta dyker upp.
    await driver.wait(until.alertIsPresent(), defaultTimeout);

    // Accepterar alertrutan.
    await driver.switchTo().alert().accept();

    // Kontrollerar att stacken är tom genom att kolla värdet på det översta elementet.
    const topOfStackText = await driver.findElement(By.id('top_of_stack')).getText();
    expect(topOfStackText).toEqual("n/a");
});