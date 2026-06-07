import { expect, test } from 'vitest';
import { userSelect } from './user-select';
import { ComponentType } from 'discord-api-types/v10';

test('User select with callback', () => {
    const select = userSelect('customid', (s) =>
        s.placeholder('Placeholder').required(true).max_values(5).min_values(1)
    );

    expect(select.toJSON()).toEqual({
        type: ComponentType.UserSelect,
        custom_id: 'customid',
        placeholder: 'Placeholder',
        required: true,
        max_values: 5,
        min_values: 1,
    });
});

test('User select without callback', () => {
    const select = userSelect('customid');

    expect(select.toJSON()).toEqual({
        type: ComponentType.UserSelect,
        custom_id: 'customid',
    });
});
