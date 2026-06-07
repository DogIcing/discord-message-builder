import { APIStringSelectComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a string select component
 * 
 * A String Select is an interactive component that allows users to select one or more provided `options`.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of StringSelectComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#string-select}
 */
export function stringSelect(
    customId: string,
    callback?: (c: StringSelectComponentBuilder) => void,
): StringSelectComponentBuilder {
    const builder = new StringSelectComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const StringSelectComponentBuilderSetterKeys: (keyof APIStringSelectComponent)[] = ['custom_id', 'disabled', 'id', 'max_values', 'min_values', 'options', 'placeholder', 'required', 'type'];
export interface StringSelectComponentBuilder extends Setters<APIStringSelectComponent, typeof StringSelectComponentBuilderSetterKeys, StringSelectComponentBuilder> {}
export class StringSelectComponentBuilder extends ComponentBuilder<APIStringSelectComponent> {
    constructor() {
        super({ type: ComponentType.StringSelect });

        attachSetters(this, StringSelectComponentBuilderSetterKeys);
    }
}
