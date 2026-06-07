import { APIRoleSelectComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a role select component
 * 
 * A Role Select is an interactive component that allows users to select one or more roles in a message or modal.
 * Options are automatically populated based on the server's available roles.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of RoleSelectComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#role-select}
 */
export function roleSelect(
    customId: string,
    callback?: (c: RoleSelectComponentBuilder) => void,
): RoleSelectComponentBuilder {
    const builder = new RoleSelectComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const RoleSelectComponentBuilderSetterKeys: (keyof APIRoleSelectComponent)[] = ['custom_id', 'default_values', 'disabled', 'id', 'max_values', 'min_values', 'placeholder', 'required', 'type'];
export interface RoleSelectComponentBuilder extends Setters<APIRoleSelectComponent, typeof RoleSelectComponentBuilderSetterKeys, RoleSelectComponentBuilder> {}
export class RoleSelectComponentBuilder extends ComponentBuilder<APIRoleSelectComponent> {
    constructor() {
        super({ type: ComponentType.RoleSelect });

        attachSetters(this, RoleSelectComponentBuilderSetterKeys);
    }
}