import { APITextInputComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a text input component
 * 
 * Text Input is an interactive component that allows users to enter free-form text responses in modals.
 * It supports both short, single-line inputs and longer, multi-line paragraph inputs.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of TextInputComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#text-input}
 */
export function textInput(
    customId: string,
    callback?: (c: TextInputComponentBuilder) => void,
): TextInputComponentBuilder {
    const builder = new TextInputComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const TextInputComponentBuilderSetterKeys: (keyof APITextInputComponent)[] = ['custom_id', 'id', 'label', 'max_length', 'min_length', 'placeholder', 'required', 'style', 'type', 'value'];
export interface TextInputComponentBuilder extends Setters<APITextInputComponent, typeof TextInputComponentBuilderSetterKeys, TextInputComponentBuilder> {}
export class TextInputComponentBuilder extends ComponentBuilder<APITextInputComponent> {
    constructor() {
        super({ type: ComponentType.TextInput });

        attachSetters(this, TextInputComponentBuilderSetterKeys);
    }
}
