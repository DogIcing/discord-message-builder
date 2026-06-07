import { APIMentionableSelectComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a mentionable select component
 * 
 * A Mentionable Select is an interactive component that allows users to select one or more mentionables in a message or modal.
 * Options are automatically populated based on available mentionables in the server.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of MentionableSelectComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#mentionable-select}
 */
export function mentionableSelect(
    customId: string,
    callback?: (c: MentionableSelectComponentBuilder) => void,
): MentionableSelectComponentBuilder {
    const builder = new MentionableSelectComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const MentionableSelectComponentBuilderSetterKeys: (keyof APIMentionableSelectComponent)[] = ['custom_id', 'default_values', 'disabled', 'id', 'max_values', 'min_values', 'placeholder', 'required', 'type'];
export interface MentionableSelectComponentBuilder extends Setters<APIMentionableSelectComponent, typeof MentionableSelectComponentBuilderSetterKeys, MentionableSelectComponentBuilder> {}
export class MentionableSelectComponentBuilder extends ComponentBuilder<APIMentionableSelectComponent> {
    constructor() {
        super({ type: ComponentType.MentionableSelect });

        attachSetters(this, MentionableSelectComponentBuilderSetterKeys);
    }
}
