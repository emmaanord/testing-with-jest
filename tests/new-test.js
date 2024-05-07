const stack = require('../src/stack');

test('Pushing an element adds it to the stack', () => {
    const elementToAdd = 42;

    stack.push(elementToAdd);

    expect(stack.peek()).toBe(elementToAdd);
});