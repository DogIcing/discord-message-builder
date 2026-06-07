import { APILabelComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";
import { stringSelect as createStringSelect, StringSelectComponentBuilder } from "./string-select";
import { channelSelect as createChannelSelect, ChannelSelectComponentBuilder } from "./channel-select";
import { mentionableSelect as createMentionableSelect, MentionableSelectComponentBuilder } from "./mentionable-select";
import { roleSelect as createRoleSelect, RoleSelectComponentBuilder } from "./role-select";
import { userSelect as createUserSelect, UserSelectComponentBuilder } from "./user-select";
import { textInput as createTextInput, TextInputComponentBuilder } from "./text-input";
import { fileUpload as createFileUpload, FileUploadComponentBuilder } from "./file-upload";
import { radioGroup as createRadioGroup, RadioGroupComponentBuilder } from "./radio-group";
import { checkboxGroup as createCheckboxGroup, CheckboxGroupComponentBuilder } from "./checkbox-group";
import { checkbox as createCheckbox, CheckboxComponentBuilder } from "./checkbox";

/**
 * Creates a label component
 * 
 * A Label is a top-level layout component. Labels wrap modal components with text as a label and optional description.
 * 
 * @param label - The label of the label component.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of LabelComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#label}
 */
export function label(
    label: string,
    callback?: (c: LabelComponentBuilder) => void,
): LabelComponentBuilder {
    const builder = new LabelComponentBuilder()
    builder.set('label', label);
    if (callback) callback(builder);
    return builder;
}

const LabelComponentBuilderSetterKeys: (keyof APILabelComponent)[] = ['description', 'id', 'label', 'type'];
export interface LabelComponentBuilder extends Omit<Setters<APILabelComponent, typeof LabelComponentBuilderSetterKeys, LabelComponentBuilder>, 'accessory'> { }
export class LabelComponentBuilder extends ComponentBuilder<APILabelComponent> {
    constructor() {
        super({ type: ComponentType.Label });

        attachSetters(this, LabelComponentBuilderSetterKeys);
    }

    /**
     * Creates a text input component
     * 
     * Appends a {@link TextInputComponentBuilder} as a child component.
     * Utilises the base {@link createTextInput} module function.
     */
    textInput(
        customId: string,
        callback?: ((c: TextInputComponentBuilder) => void),
    ) {
        const textInput = createTextInput(customId, callback);
        this.data.component = textInput.toJSON();
        return textInput;
    }

    /**
     * Creates a string select component
     * 
     * Appends a {@link StringSelectComponentBuilder} as a child component.
     * Utilises the base {@link createStringSelect} module function.
     */
    stringSelect(
        customId: string,
        callback?: ((c: StringSelectComponentBuilder) => void),
    ) {
        const stringSelect = createStringSelect(customId, callback);
        this.data.component = stringSelect.toJSON();
        return stringSelect;
    }

    /**
     * Creates a user select component
     * 
     * Appends a {@link UserSelectComponentBuilder} as a child component.
     * Utilises the base {@link createUserSelect} module function.
     */
    userSelect(
        customId: string,
        callback?: ((c: UserSelectComponentBuilder) => void),
    ) {
        const userSelect = createUserSelect(customId, callback);
        this.data.component = userSelect.toJSON();
        return userSelect;
    }

    /**
     * Creates a role select component
     * 
     * Appends a {@link RoleSelectComponentBuilder} as a child component.
     * Utilises the base {@link createRoleSelect} module function.
     */
    roleSelect(
        customId: string,
        callback?: ((c: RoleSelectComponentBuilder) => void),
    ) {
        const roleSelect = createRoleSelect(customId, callback);
        this.data.component = roleSelect.toJSON();
        return roleSelect;
    }

    /**
     * Creates a mentionable select component
     * 
     * Appends a {@link MentionableSelectComponentBuilder} as a child component.
     * Utilises the base {@link createMentionableSelect} module function.
     */
    mentionableSelect(
        customId: string,
        callback?: ((c: MentionableSelectComponentBuilder) => void),
    ) {
        const mentionableSelect = createMentionableSelect(customId, callback);
        this.data.component = mentionableSelect.toJSON();
        return mentionableSelect;
    }

    /**
     * Creates a channel select component
     * 
     * Appends a {@link ChannelSelectComponentBuilder} as a child component.
     * Utilises the base {@link createChannelSelect} module function.
     */
    channelSelect(
        customId: string,
        callback?: ((c: ChannelSelectComponentBuilder) => void),
    ) {
        const channelSelect = createChannelSelect(customId, callback);
        this.data.component = channelSelect.toJSON();
        return channelSelect;
    }

    /**
     * Creates a file upload component
     * 
     * Appends a {@link FileUploadComponentBuilder} as a child component.
     * Utilises the base {@link createFileUpload} module function.
     */
    fileUpload(
        customId: string,
        callback?: ((c: FileUploadComponentBuilder) => void),
    ) {
        const fileUpload = createFileUpload(customId, callback);
        this.data.component = fileUpload.toJSON();
        return fileUpload;
    }

    /**
     * Creates a radio group component
     * 
     * Appends a {@link RadioGroupComponentBuilder} as a child component.
     * Utilises the base {@link createRadioGroup} module function.
     */
    radioGroup(
        customId: string,
        callback?: ((c: RadioGroupComponentBuilder) => void),
    ) {
        const radioGroup = createRadioGroup(customId, callback);
        this.data.component = radioGroup.toJSON();
        return radioGroup;
    }

    /**
     * Creates a checkbox group component
     * 
     * Appends a {@link CheckboxGroupComponentBuilder} as a child component.
     * Utilises the base {@link createCheckboxGroup} module function.
     */
    checkboxGroup(
        customId: string,
        callback?: ((c: CheckboxGroupComponentBuilder) => void),
    ) {
        const checkboxGroup = createCheckboxGroup(customId, callback);
        this.data.component = checkboxGroup.toJSON();
        return checkboxGroup;
    }

    /**
     * Creates a checkbox component
     * 
     * Appends a {@link CheckboxComponentBuilder} as a child component.
     * Utilises the base {@link createCheckbox} module function.
     */
    checkbox(
        customId: string,
        callback?: ((c: CheckboxComponentBuilder) => void),
    ) {
        const checkbox = createCheckbox(customId, callback);
        this.data.component = checkbox.toJSON();
        return checkbox;
    }
}
