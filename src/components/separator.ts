import { APISeparatorComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a separator component
 * 
 * A Separator is a top-level layout component that adds vertical padding and visual division between other components.
 * 
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of SeparatorComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#separator}
 */
export function separator(
    callback?: (c: SeparatorComponentBuilder) => void,
): SeparatorComponentBuilder {
    const builder = new SeparatorComponentBuilder();
    if (callback) callback(builder);
    return builder;
}

const SeparatorComponentBuilderSetterKeys: (keyof APISeparatorComponent)[] = ['divider', 'id', 'spacing', 'type'];
export interface SeparatorComponentBuilder extends Setters<APISeparatorComponent, typeof SeparatorComponentBuilderSetterKeys, SeparatorComponentBuilder> {}
export class SeparatorComponentBuilder extends ComponentBuilder<APISeparatorComponent> {
    constructor() {
        super({ type: ComponentType.Separator });

        attachSetters(this, SeparatorComponentBuilderSetterKeys);
    }
}