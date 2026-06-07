import { expect, test } from 'vitest';
import { separator } from './separator';
import { ComponentType } from 'discord-api-types/v10';

test('Separator with callback', () => {
    const sep = separator((s) => s.divider(true).spacing(1));

    expect(sep.toJSON()).toEqual({
        type: ComponentType.Separator,
        divider: true,
        spacing: 1,
    });
});

test('Separator without callback', () => {
    const sep = separator();

    expect(sep.toJSON()).toEqual({
        type: ComponentType.Separator,
    });
});
