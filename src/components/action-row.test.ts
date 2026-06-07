import { expect, test } from 'vitest';
import { actionRow } from './action-row';
import { ButtonStyle, ComponentType } from 'discord-api-types/v10';

test('Interactive button in action row with callback', () => {
    const row = actionRow((a) => {
        a.button(ButtonStyle.Primary, 'btn_id', (b) =>
            b.label('Hello world').disabled(true)
        );
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Primary,
                custom_id: 'btn_id',
                label: 'Hello world',
                disabled: true,
            },
        ],
    });
});

test('Link button in action row without callback', () => {
    const row = actionRow((a) => {
        a.button(ButtonStyle.Link, 'https://discord.com');
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Link,
                url: 'https://discord.com',
            },
        ],
    });
});

test('Premium button in action row with callback', () => {
    const row = actionRow((a) => {
        a.button(ButtonStyle.Premium, (b) => b.sku_id('sku').disabled(true));
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Premium,
                sku_id: 'sku',
                disabled: true,
            },
        ],
    });
});

test('String select in action row with callback', () => {
    const row = actionRow((a) => {
        a.stringSelect('customid', (s) =>
            s.options([{ label: 'A', value: 'a' }]).placeholder('Hello world')
        );
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.StringSelect,
                custom_id: 'customid',
                options: [{ label: 'A', value: 'a' }],
                placeholder: 'Hello world',
            },
        ],
    });
});

test('User select in action row with callback', () => {
    const row = actionRow((a) => {
        a.userSelect('customid', (s) =>
            s.placeholder('Hello world').required(true)
        );
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.UserSelect,
                custom_id: 'customid',
                placeholder: 'Hello world',
                required: true,
            },
        ],
    });
});

test('Role select in action row with callback', () => {
    const row = actionRow((a) => {
        a.roleSelect('customid', (s) =>
            s.placeholder('Hello world').required(true)
        );
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.RoleSelect,
                custom_id: 'customid',
                placeholder: 'Hello world',
                required: true,
            },
        ],
    });
});

test('Mentionable select in action row with callback', () => {
    const row = actionRow((a) => {
        a.mentionableSelect('customid', (s) =>
            s.placeholder('Hello world').required(true)
        );
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.MentionableSelect,
                custom_id: 'customid',
                placeholder: 'Hello world',
                required: true,
            },
        ],
    });
});

test('Channel select in action row with callback', () => {
    const row = actionRow((a) => {
        a.channelSelect('customid', (s) =>
            s.placeholder('Hello world').required(true)
        );
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.ChannelSelect,
                custom_id: 'customid',
                placeholder: 'Hello world',
                required: true,
            },
        ],
    });
});

test('Action row setter applies after child creation', () => {
    const row = actionRow((a) => {
        a.button(ButtonStyle.Secondary, 'btn_id');
        a.id(1);
    });

    expect(row.toJSON()).toEqual({
        type: ComponentType.ActionRow,
        id: 1,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                custom_id: 'btn_id',
            },
        ],
    });
});
