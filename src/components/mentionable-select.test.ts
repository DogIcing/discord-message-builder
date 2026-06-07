import { expect, test } from 'vitest';
import { mentionableSelect } from './mentionable-select';
import { ComponentType } from 'discord-api-types/v10';

test('Mentionable select with callback', () => {
    const select = mentionableSelect('customid', (s) =>
        s.placeholder('Placeholder').required(true).max_values(2).min_values(1)
    );

    expect(select.toJSON()).toEqual({
        type: ComponentType.MentionableSelect,
        custom_id: 'customid',
        placeholder: 'Placeholder',
        required: true,
        max_values: 2,
        min_values: 1,
    });
});

test('Mentionable select without callback', () => {
    const select = mentionableSelect('customid');

    expect(select.toJSON()).toEqual({
        type: ComponentType.MentionableSelect,
        custom_id: 'customid',
    });
});
