import { APIUserSelectComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a user select component
 * 
 * A User Select is an interactive component that allows users to select one or more users in a message or modal.
 * Options are automatically populated based on the server's available users.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of UserSelectComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#user-select}
 */
export function userSelect(
    customId: string,
    callback?: (c: UserSelectComponentBuilder) => void,
): UserSelectComponentBuilder {
    const builder = new UserSelectComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const UserSelectComponentBuilderSetterKeys: (keyof APIUserSelectComponent)[] = ['custom_id', 'default_values', 'disabled', 'id', 'max_values', 'min_values', 'placeholder', 'required', 'type'];
export interface UserSelectComponentBuilder extends Setters<APIUserSelectComponent, typeof UserSelectComponentBuilderSetterKeys, UserSelectComponentBuilder> {}
export class UserSelectComponentBuilder extends ComponentBuilder<APIUserSelectComponent> {
    constructor() {
        super({ type: ComponentType.UserSelect });

        attachSetters(this, UserSelectComponentBuilderSetterKeys);
    }
}