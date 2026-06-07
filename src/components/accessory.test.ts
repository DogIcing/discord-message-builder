import { expect, test } from 'vitest';
import { accessory } from './accessory';
import { ButtonStyle, ComponentType } from 'discord-api-types/v10';

test('Interactive button accessory with callback', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Primary, 'btn_id', (b) =>
            b.label('Hello world').disabled(true)
        );
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Primary,
        custom_id: 'btn_id',
        label: 'Hello world',
        disabled: true,
    });
});

test('Interactive button accessory without callback', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Primary, 'btn_id');
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Primary,
        custom_id: 'btn_id',
    });
});

test('Link button accessory with callback', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Link, 'https://discord.com', (b) =>
            b.label('Hello world').disabled(true)
        );
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Link,
        url: 'https://discord.com',
        label: 'Hello world',
        disabled: true,
    });
});

test('Link button accessory without callback', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Link, 'https://discord.com');
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Link,
        url: 'https://discord.com',
    });
});

test('Premium button accessory with callback', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Premium, (b) =>
            b.sku_id('sku').disabled(true)
        );
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Premium,
        sku_id: 'sku',
        disabled: true,
    });
});

test('Premium button accessory without callback', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Premium);
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Premium,
    });
});

test('Thumbnail accessory with callback', () => {
    const acc = accessory((a) => {
        a.thumbnail('https://discord.com/placeholder.png', (t) => t.description('placeholder'));
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Thumbnail,
        media: {
            url: 'https://discord.com/placeholder.png',
        },
        description: 'placeholder',
    });
});

test('Thumbnail accessory without callback', () => {
    const acc = accessory((a) => {
        a.thumbnail('https://discord.com/placeholder.png');
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Thumbnail,
        media: {
            url: 'https://discord.com/placeholder.png',
        },
    });
});

test('Accessory builder setters apply after nested component creation', () => {
    const acc = accessory((a) => {
        a.button(ButtonStyle.Secondary, 'btn_id');
        a.id(1);
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        custom_id: 'btn_id',
        id: 1,
    });
});

test('Last component overwrites previous component', () => {
    const acc = accessory((a) => {
        a.thumbnail('https://discord.com/placeholder.png');
        a.button(ButtonStyle.Secondary, 'btn_id');
    });

    expect(acc.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        custom_id: 'btn_id',
    });
});
