// Test för att testa lägga till ett element till stacken.
const stack = require('../src/stack');

test('Pushing an element adds it to the stack', () => {
    const elementToAdd = "Banana";

    stack.push(elementToAdd);

    expect(stack.peek()).toBe(elementToAdd);
});