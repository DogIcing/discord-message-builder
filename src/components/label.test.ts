import { expect, test } from 'vitest';
import { label } from './label';
import { ComponentType } from 'discord-api-types/v10';

test('Label with nested text input', () => {
    const lbl = label('Hello world', (l) =>
        l.textInput('customid', (t) => t.required(true))
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.TextInput,
            custom_id: 'customid',
            required: true,
        },
    });
});

test('Label with nested string select', () => {
    const lbl = label('Hello world', (l) =>
        l.stringSelect('customid', (s) =>
            s.options([{ label: 'A', value: 'a' }]).placeholder('Pick one')
        )
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.StringSelect,
            custom_id: 'customid',
            options: [{ label: 'A', value: 'a' }],
            placeholder: 'Pick one',
        },
    });
});

test('Label with nested user select', () => {
    const lbl = label('Hello world', (l) =>
        l.userSelect('customid', (s) => s.placeholder('Choose user').required(true))
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.UserSelect,
            custom_id: 'customid',
            placeholder: 'Choose user',
            required: true,
        },
    });
});

test('Label with nested role select', () => {
    const lbl = label('Hello world', (l) =>
        l.roleSelect('customid', (s) => s.placeholder('Choose role').required(true))
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.RoleSelect,
            custom_id: 'customid',
            placeholder: 'Choose role',
            required: true,
        },
    });
});

test('Label with nested mentionable select', () => {
    const lbl = label('Hello world', (l) =>
        l.mentionableSelect('customid', (s) =>
            s.placeholder('Placeholder').required(true)
        )
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.MentionableSelect,
            custom_id: 'customid',
            placeholder: 'Placeholder',
            required: true,
        },
    });
});

test('Label with nested channel select', () => {
    const lbl = label('Hello world', (l) =>
        l.channelSelect('customid', (s) =>
            s.placeholder('Placeholder').required(true)
        )
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.ChannelSelect,
            custom_id: 'customid',
            placeholder: 'Placeholder',
            required: true,
        },
    });
});

test('Label with nested file upload', () => {
    const lbl = label('Hello world', (l) =>
        l.fileUpload('customid', (s) =>
            s.required(true).max_values(2).min_values(1)
        )
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.FileUpload,
            custom_id: 'customid',
            required: true,
            max_values: 2,
            min_values: 1,
        },
    });
});

test('Label with nested radio group', () => {
    const lbl = label('Hello world', (l) =>
        l.radioGroup('customid', (s) =>
            s.options([{ label: 'A', value: 'a' }]).required(true)
        )
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.RadioGroup,
            custom_id: 'customid',
            options: [{ label: 'A', value: 'a' }],
            required: true,
        },
    });
});

test('Label with nested checkbox group', () => {
    const lbl = label('Hello world', (l) =>
        l.checkboxGroup('customid', (s) =>
            s.options([{ label: 'A', value: 'a' }]).required(true)
        )
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        component: {
            type: ComponentType.CheckboxGroup,
            custom_id: 'customid',
            options: [{ label: 'A', value: 'a' }],
            required: true,
        },
    });
});

test('Label .description returns setters and .self() returns builder', () => {
    const lbl = label('Hello world', (l) =>
        l.description('Description').checkbox('checkbox_id', (c) => c.default(true))
    );

    expect(lbl.toJSON()).toEqual({
        type: ComponentType.Label,
        label: 'Hello world',
        description: 'Description',
        component: {
            type: ComponentType.Checkbox,
            custom_id: 'checkbox_id',
            default: true,
        },
    });
});
