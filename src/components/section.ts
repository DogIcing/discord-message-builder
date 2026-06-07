import { APISectionComponent, ComponentType } from "discord-api-types/v10";
import { ParentComponentBuilder } from "../lib/component-builder";
import { textDisplay as createTextDisplay, TextDisplayComponentBuilder } from "./text-display";
import { accessory as createAccessory, AccessoryBuilder } from "./accessory";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a section component
 * 
 * A Section is a top-level layout component that allows you to contextually associate content with an {@link createAccessory | accessory} component. 
 * The typical use-case is to contextually associate text content with an accessory.
 * 
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of SectionComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#section}
 */
export function section(
    callback?: (c: SectionComponentBuilder) => void,
): SectionComponentBuilder {
    const builder = new SectionComponentBuilder();
    if (callback) callback(builder);
    return builder;
}

export type SectionChild = APISectionComponent['components'][number];

const SectionComponentBuilderSetterKeys: (keyof APISectionComponent)[] = ['components', 'id', 'type'];
export interface SectionComponentBuilder extends Omit<Setters<APISectionComponent, typeof SectionComponentBuilderSetterKeys, SectionComponentBuilder>, 'accessory'> { }
export class SectionComponentBuilder extends ParentComponentBuilder<APISectionComponent, SectionChild> {
    constructor() {
        super({ type: ComponentType.Section });

        attachSetters(this, SectionComponentBuilderSetterKeys);
    }

    /**
     * Creates a text display component
     * 
     * Appends a {@link TextDisplayComponentBuilder} as a child component.
     * Utilises the base {@link createTextDisplay} module function.
     */
    textDisplay(
        content: string,
        callback?: ((c: TextDisplayComponentBuilder) => void),
    ) {
        const textDisplay = createTextDisplay(content, callback);
        this.addChild(textDisplay);
        return textDisplay;
    }

    /**
     * Sets the accessory
     * 
     * Utilises the base {@link createAccessory} module function.
     */
    accessory(
        callback?: ((a: AccessoryBuilder) => void),
    ) {
        const accessory = createAccessory(callback);
        this.data.accessory = accessory.toJSON();
        return accessory;
    }
}
