import { expect, test } from 'vitest';
import { stringSelect } from './string-select';
import { ComponentType } from 'discord-api-types/v10';

test('String select with callback', () => {
    const select = stringSelect('customid', (s) =>
        s.options([{ label: 'A', value: 'a' }]).placeholder('Placeholder').required(true)
    );

    expect(select.toJSON()).toEqual({
        type: ComponentType.StringSelect,
        custom_id: 'customid',
        options: [{ label: 'A', value: 'a' }],
        placeholder: 'Placeholder',
        required: true,
    });
});

test('String select without callback', () => {
    const select = stringSelect('customid');

    expect(select.toJSON()).toEqual({
        type: ComponentType.StringSelect,
        custom_id: 'customid',
    });
});
