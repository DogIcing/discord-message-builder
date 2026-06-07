import { APITextDisplayComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a text display component
 * 
 * A Text Display is a content component that allows you to add markdown formatted text, including mentions (users, roles, etc) and emojis.
 * The behavior of this component is extremely similar to the `content` field of a message, but allows you to add multiple text components,
 * controlling the layout of your message.
 * 
 * @param content - The content of the text display.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of TextDisplayComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#text-display}
 */
export function textDisplay(
    content: string,
    callback?: (c: TextDisplayComponentBuilder) => void,
): TextDisplayComponentBuilder {
    const builder = new TextDisplayComponentBuilder();
    builder.set('content', content);
    if (callback) callback(builder);
    return builder;
}

const TextDisplayComponentBuilderSetterKeys: (keyof APITextDisplayComponent)[] = ['content', 'id', 'type'];
export interface TextDisplayComponentBuilder extends Setters<APITextDisplayComponent, typeof TextDisplayComponentBuilderSetterKeys, TextDisplayComponentBuilder> {}
export class TextDisplayComponentBuilder extends ComponentBuilder<APITextDisplayComponent> {
    constructor() {
        super({ type: ComponentType.TextDisplay });

        attachSetters(this, TextDisplayComponentBuilderSetterKeys);
    }
}
