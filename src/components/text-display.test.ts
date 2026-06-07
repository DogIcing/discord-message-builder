import { expect, test } from 'vitest';
import { textDisplay } from './text-display';
import { ComponentType } from 'discord-api-types/v10';

test('Text display with callback', () => {
    const text = textDisplay('Hello world', (t) => t.id(42));

    expect(text.toJSON()).toEqual({
        type: ComponentType.TextDisplay,
        content: 'Hello world',
        id: 42,
    });
});

test('Text display without callback', () => {
    const text = textDisplay('Hello world');

    expect(text.toJSON()).toEqual({
        type: ComponentType.TextDisplay,
        content: 'Hello world',
    });
});
