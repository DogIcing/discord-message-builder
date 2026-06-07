import { expect, test } from 'vitest';
import { button } from './button';
import { ButtonStyle, ComponentType } from 'discord-api-types/v10';

test('Interactive button with callback', () => {
    const btn = button(ButtonStyle.Primary, 'btn_id', (b) =>
        b.label('Hello world').disabled(true)
    );

    expect(btn.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Primary,
        custom_id: 'btn_id',
        label: 'Hello world',
        disabled: true,
    });
});

test('Link button without callback', () => {
    const btn = button(ButtonStyle.Link, 'https://discord.com');

    expect(btn.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Link,
        url: 'https://discord.com',
    });
});

test('Premium button with callback', () => {
    const btn = button(ButtonStyle.Premium, (b) =>
        b.sku_id('sku').disabled(true)
    );

    expect(btn.toJSON()).toEqual({
        type: ComponentType.Button,
        style: ButtonStyle.Premium,
        sku_id: 'sku',
        disabled: true,
    });
});
