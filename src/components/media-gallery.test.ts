import { expect, test } from 'vitest';
import { mediaGallery } from './media-gallery';
import { ComponentType } from 'discord-api-types/v10';

test('Media gallery with items and id', () => {
    const gallery = mediaGallery([
        { media: { url: 'https://discord.com/placeholder1.png' } },
        { media: { url: 'https://discord.com/placeholder2.png' } },
    ], (g) => g.id(123));

    expect(gallery.toJSON()).toEqual({
        type: ComponentType.MediaGallery,
        id: 123,
        items: [
            { media: { url: 'https://discord.com/placeholder1.png' } },
            { media: { url: 'https://discord.com/placeholder2.png' } },
        ],
    });
});
