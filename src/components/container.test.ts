import { expect, test } from 'vitest';
import { container } from './container';
import { ButtonStyle, ComponentType } from 'discord-api-types/v10';

test('Container with nested action row and file', () => {
    const cont = container((c) => {
        c.actionRow((a) => a.button(ButtonStyle.Primary, 'btn_id'));
        c.file('https://discord.com/placeholder.png', (f) => f.name('placeholder.png').spoiler(true));
        c.accent_color(123456);
    });

    expect(cont.toJSON()).toEqual({
        type: ComponentType.Container,
        accent_color: 123456,
        components: [
            {
                type: ComponentType.ActionRow,
                components: [
                    {
                        type: ComponentType.Button,
                        style: ButtonStyle.Primary,
                        custom_id: 'btn_id',
                    },
                ],
            },
            {
                type: ComponentType.File,
                file: {
                    url: 'https://discord.com/placeholder.png',
                },
                name: 'placeholder.png',
                spoiler: true,
            },
        ],
    });
});

test('Container with nested section and separator', () => {
    const cont = container((c) => {
        c.section((s) => {
            s.textDisplay('Section text');
            s.accessory((a) => a.button(ButtonStyle.Secondary, 'btn_id'));
        });
        c.separator((s) => s.divider(true).spacing(1));
    });

    expect(cont.toJSON()).toEqual({
        type: ComponentType.Container,
        components: [
            {
                type: ComponentType.Section,
                components: [
                    {
                        type: ComponentType.TextDisplay,
                        content: 'Section text',
                    },
                ],
                accessory: {
                    type: ComponentType.Button,
                    style: ButtonStyle.Secondary,
                    custom_id: 'btn_id',
                },
            },
            {
                type: ComponentType.Separator,
                divider: true,
                spacing: 1,
            },
        ],
    });
});

test('Container with media gallery', () => {
    const cont = container((c) => {
        c.mediaGallery([
            { media: { url: 'https://discord.com/placeholder1.png' } },
            { media: { url: 'https://discord.com/placeholder2.png' } },
        ], (g) => g.id(5));
    });

    expect(cont.toJSON()).toEqual({
        type: ComponentType.Container,
        components: [
            {
                type: ComponentType.MediaGallery,
                id: 5,
                items: [
                    { media: { url: 'https://discord.com/placeholder1.png' } },
                    { media: { url: 'https://discord.com/placeholder2.png' } },
                ],
            },
        ],
    });
});

test('Container setter applies after children', () => {
    const cont = container((c) => {
        c.textDisplay('Hello world');
        c.id(1);
    });

    expect(cont.toJSON()).toEqual({
        type: ComponentType.Container,
        id: 1,
        components: [
            {
                type: ComponentType.TextDisplay,
                content: 'Hello world',
            },
        ],
    });
});
