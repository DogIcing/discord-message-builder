import { APIRadioGroupComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a radio group component
 * 
 * A Radio Group is an interactive component for selecting exactly one option from a defined list.
 * Radio Groups are available in modals and must be placed inside a Label.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of RadioGroupComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#radio-group}
 */
export function radioGroup(
    customId: string,
    callback?: (c: RadioGroupComponentBuilder) => void,
): RadioGroupComponentBuilder {
    const builder = new RadioGroupComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const RadioGroupComponentBuilderSetterKeys: (keyof APIRadioGroupComponent)[] = ['custom_id', 'id', 'options', 'required', 'type'];
export interface RadioGroupComponentBuilder extends Setters<APIRadioGroupComponent, typeof RadioGroupComponentBuilderSetterKeys, RadioGroupComponentBuilder> {}
export class RadioGroupComponentBuilder extends ComponentBuilder<APIRadioGroupComponent> {
    constructor() {
        super({ type: ComponentType.RadioGroup });

        attachSetters(this, RadioGroupComponentBuilderSetterKeys);
    }
}
