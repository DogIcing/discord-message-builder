import { expect, test } from 'vitest';
import { checkbox } from './checkbox';
import { ComponentType } from 'discord-api-types/v10';

test('Checkbox with callback', () => {
    const box = checkbox('customid', (c) => c.default(true));

    expect(box.toJSON()).toEqual({
        type: ComponentType.Checkbox,
        custom_id: 'customid',
        default: true,
    });
});

test('Checkbox without callback', () => {
    const box = checkbox('customid');

    expect(box.toJSON()).toEqual({
        type: ComponentType.Checkbox,
        custom_id: 'customid',
    });
});
