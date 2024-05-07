// Test för att testa lägga till ett element till stacken.
// IMporterar stack-modulen
const stack = require('../src/stack');

// Enhetstest
test('Pushing an element adds it to the stack', () => {
    // Definierar elementet som ska läggas till.
    const elementToAdd = "Banana";

    // Använder .push för att lägga till elementet i stacken.
    stack.push(elementToAdd);

    expect(stack.peek()).toBe(elementToAdd);
});