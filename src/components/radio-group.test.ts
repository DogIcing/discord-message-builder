import { expect, test } from 'vitest';
import { radioGroup } from './radio-group';
import { ComponentType } from 'discord-api-types/v10';

test('Radio group with callback', () => {
    const group = radioGroup('customid', (g) =>
        g.options([{ label: 'A', value: 'a' }]).required(true)
    );

    expect(group.toJSON()).toEqual({
        type: ComponentType.RadioGroup,
        custom_id: 'customid',
        options: [{ label: 'A', value: 'a' }],
        required: true,
    });
});

test('Radio group without callback', () => {
    const group = radioGroup('customid');

    expect(group.toJSON()).toEqual({
        type: ComponentType.RadioGroup,
        custom_id: 'customid',
    });
});
