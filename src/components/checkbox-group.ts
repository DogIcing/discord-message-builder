import { APICheckboxGroupComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a checkbox group component
 * 
 * A Checkbox Group is an interactive component for selecting one or many options via checkboxes.
 * Checkbox Groups are available in modals and must be placed inside a Label.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of CheckboxGroupComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#checkbox-group}
 */
export function checkboxGroup(
    customId: string,
    callback?: (c: CheckboxGroupComponentBuilder) => void,
): CheckboxGroupComponentBuilder {
    const builder = new CheckboxGroupComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const CheckboxGroupComponentBuilderSetterKeys: (keyof APICheckboxGroupComponent)[] = ['custom_id', 'id', 'max_values', 'min_values', 'options', 'required', 'type'];
export interface CheckboxGroupComponentBuilder extends Setters<APICheckboxGroupComponent, typeof CheckboxGroupComponentBuilderSetterKeys, CheckboxGroupComponentBuilder> {}
export class CheckboxGroupComponentBuilder extends ComponentBuilder<APICheckboxGroupComponent> {
    constructor() {
        super({ type: ComponentType.CheckboxGroup });

        attachSetters(this, CheckboxGroupComponentBuilderSetterKeys);
    }
}
