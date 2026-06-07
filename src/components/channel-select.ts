import { APIChannelSelectComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a channel select component
 * 
 * A Channel Select is an interactive component that allows users to select one or more channels in a message or modal.
 * Options are automatically populated based on available channels in the server and can be filtered by channel types.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of ChannelSelectComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#channel-select}
 */
export function channelSelect(
    customId: string,
    callback?: (c: ChannelSelectComponentBuilder) => void
): ChannelSelectComponentBuilder {
    const builder = new ChannelSelectComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const ChannelSelectComponentBuilderSetterKeys: (keyof APIChannelSelectComponent)[] = ['channel_types', 'custom_id', 'default_values', 'disabled', 'id', 'max_values', 'min_values', 'placeholder', 'required', 'type'];
export interface ChannelSelectComponentBuilder extends Setters<APIChannelSelectComponent, typeof ChannelSelectComponentBuilderSetterKeys, ChannelSelectComponentBuilder> {}
export class ChannelSelectComponentBuilder extends ComponentBuilder<APIChannelSelectComponent> {
    constructor() {
        super({ type: ComponentType.ChannelSelect });

        attachSetters(this, ChannelSelectComponentBuilderSetterKeys);
    }
}
