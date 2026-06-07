import { expect, test } from 'vitest';
import { section } from './section';
import { ButtonStyle, ComponentType } from 'discord-api-types/v10';

test('Section with nested text display and accessory button', () => {
    const sec = section((s) => {
        s.textDisplay('Hello world');
        s.accessory((a) => a.button(ButtonStyle.Primary, 'btn_id').label('Button'));
    });

    expect(sec.toJSON()).toEqual({
        type: ComponentType.Section,
        components: [
            {
                type: ComponentType.TextDisplay,
                content: 'Hello world',
            },
        ],
        accessory: {
            type: ComponentType.Button,
            style: ButtonStyle.Primary,
            custom_id: 'btn_id',
            label: 'Button',
        },
    });
});
