import { APICheckboxComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a checkbox component
 * 
 * A Checkbox is a single interactive component for simple yes/no style questions.
 * Checkboxes are available in modals and must be placed inside a Label.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of CheckboxComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#checkbox}
 */
export function checkbox(
    customId: string,
    callback?: (c: CheckboxComponentBuilder) => void,
): CheckboxComponentBuilder {
    const builder = new CheckboxComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const CheckboxComponentBuilderSetterKeys: (keyof APICheckboxComponent)[] = ['custom_id', 'default', 'id', 'type'];
export interface CheckboxComponentBuilder extends Setters<APICheckboxComponent, typeof CheckboxComponentBuilderSetterKeys, CheckboxComponentBuilder> {}
export class CheckboxComponentBuilder extends ComponentBuilder<APICheckboxComponent> {
    constructor() {
        super({ type: ComponentType.Checkbox });

        attachSetters(this, CheckboxComponentBuilderSetterKeys);
    }
}
