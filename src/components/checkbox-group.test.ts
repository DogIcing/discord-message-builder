import { expect, test } from 'vitest';
import { checkboxGroup } from './checkbox-group';
import { ComponentType } from 'discord-api-types/v10';

test('Checkbox group with callback', () => {
    const group = checkboxGroup('customid', (g) =>
        g.options([{ label: 'Option A', value: 'a' }]).min_values(1).max_values(2).required(true)
    );

    expect(group.toJSON()).toEqual({
        type: ComponentType.CheckboxGroup,
        custom_id: 'customid',
        options: [{ label: 'Option A', value: 'a' }],
        min_values: 1,
        max_values: 2,
        required: true,
    });
});

test('Checkbox group without callback', () => {
    const group = checkboxGroup('customid');

    expect(group.toJSON()).toEqual({
        type: ComponentType.CheckboxGroup,
        custom_id: 'customid',
    });
});
