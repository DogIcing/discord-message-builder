import { expect, test } from 'vitest';
import { file } from './file';
import { ComponentType } from 'discord-api-types/v10';

test('File with callback', () => {
    const item = file('https://discord.com/placeholder.png', (f) =>
        f.name('placeholder.png').size(1024).spoiler(true)
    );

    expect(item.toJSON()).toEqual({
        type: ComponentType.File,
        file: {
            url: 'https://discord.com/placeholder.png',
        },
        name: 'placeholder.png',
        size: 1024,
        spoiler: true,
    });
});

test('File without callback', () => {
    const item = file('https://discord.com/placeholder.png');

    expect(item.toJSON()).toEqual({
        type: ComponentType.File,
        file: {
            url: 'https://discord.com/placeholder.png',
        },
    });
});
