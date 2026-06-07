import { expect, test } from 'vitest';
import { textInput } from './text-input';
import { ComponentType, TextInputStyle } from 'discord-api-types/v10';

test('Text input with callback', () => {
    const input = textInput('customid', (t) =>
        t.label('Name').placeholder('Placeholder').required(true).style(TextInputStyle.Short)
    );

    expect(input.toJSON()).toEqual({
        type: ComponentType.TextInput,
        custom_id: 'customid',
        label: 'Name',
        placeholder: 'Placeholder',
        required: true,
        style: TextInputStyle.Short,
    });
});

test('Text input without callback', () => {
    const input = textInput('customid');

    expect(input.toJSON()).toEqual({
        type: ComponentType.TextInput,
        custom_id: 'customid',
    });
});
