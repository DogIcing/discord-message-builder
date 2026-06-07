import { expect, test } from 'vitest';
import { roleSelect } from './role-select';
import { ComponentType } from 'discord-api-types/v10';

test('Role select with callback', () => {
    const select = roleSelect('customid', (s) =>
        s.placeholder('Placeholder').required(true).max_values(3).min_values(1)
    );

    expect(select.toJSON()).toEqual({
        type: ComponentType.RoleSelect,
        custom_id: 'customid',
        placeholder: 'Placeholder',
        required: true,
        max_values: 3,
        min_values: 1,
    });
});

test('Role select without callback', () => {
    const select = roleSelect('customid');

    expect(select.toJSON()).toEqual({
        type: ComponentType.RoleSelect,
        custom_id: 'customid',
    });
});
