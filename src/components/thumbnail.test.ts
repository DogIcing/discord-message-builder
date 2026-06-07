import { expect, test } from 'vitest';
import { thumbnail } from './thumbnail';
import { ComponentType } from 'discord-api-types/v10';

test('Thumbnail with callback', () => {
    const thumb = thumbnail('https://discord.com/placeholder.png', (t) =>
        t.description('Hello world').spoiler(true)
    );

    expect(thumb.toJSON()).toEqual({
        type: ComponentType.Thumbnail,
        media: { url: 'https://discord.com/placeholder.png' },
        description: 'Hello world',
        spoiler: true,
    });
});

test('Thumbnail without callback', () => {
    const thumb = thumbnail('https://discord.com/placeholder.png');

    expect(thumb.toJSON()).toEqual({
        type: ComponentType.Thumbnail,
        media: { url: 'https://discord.com/placeholder.png' },
    });
});
