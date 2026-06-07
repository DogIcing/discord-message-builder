import { APIButtonComponentWithCustomId, APIButtonComponentWithSKUId, APIButtonComponentWithURL, ButtonStyle, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

const InteractiveButtonBuilderSetterKeys: (keyof APIButtonComponentWithCustomId)[] = ['custom_id', 'disabled', 'emoji', 'id', 'label', 'style', 'type'];
export interface InteractiveButtonBuilder extends Setters<APIButtonComponentWithCustomId, typeof InteractiveButtonBuilderSetterKeys, InteractiveButtonBuilder> {}
export class InteractiveButtonBuilder extends ComponentBuilder<APIButtonComponentWithCustomId> {
    constructor(
        style: Exclude<ButtonStyle, ButtonStyle.Link | ButtonStyle.Premium>,
        customId: string,
    ) {
        super({
            type: ComponentType.Button,
            style,
            custom_id: customId
        });
        
        attachSetters(this, InteractiveButtonBuilderSetterKeys);
    }
}

const LinkButtonBuilderSetterKeys: (keyof APIButtonComponentWithURL)[] = ['disabled', 'emoji', 'id', 'label', 'style', 'type', 'url'];
export interface LinkButtonBuilder extends Setters<APIButtonComponentWithURL, typeof LinkButtonBuilderSetterKeys, LinkButtonBuilder> {}
export class LinkButtonBuilder extends ComponentBuilder<APIButtonComponentWithURL> {
    constructor(
        url: string = "",
    ) {
        super({
            type: ComponentType.Button,
            style: ButtonStyle.Link,
            url
        });
        
        attachSetters(this, LinkButtonBuilderSetterKeys);
    }
}

const PremiumButtonBuilderSetterKeys: (keyof APIButtonComponentWithSKUId)[] = ['disabled', 'id', 'sku_id', 'style', 'type'];
export interface PremiumButtonBuilder extends Setters<APIButtonComponentWithSKUId, typeof PremiumButtonBuilderSetterKeys, PremiumButtonBuilder> {}
export class PremiumButtonBuilder extends ComponentBuilder<APIButtonComponentWithSKUId> {
    constructor() {
        super({
            type: ComponentType.Button,
            style: ButtonStyle.Premium
        });
        
        attachSetters(this, PremiumButtonBuilderSetterKeys);
    }
}

export type AnyButtonBuilder = InteractiveButtonBuilder | LinkButtonBuilder | PremiumButtonBuilder;

/**
 * Creates an interactive button
 * 
 * A Button is an interactive component that can only be used in messages.
 * It creates clickable elements that users can interact with, sending an interaction to your app when clicked.
 * 
 * @param style - The visual style of the button (excluding be Link or Premium).
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of InteractiveButtonBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#button}
 */
export function button(
    style: Exclude<ButtonStyle, ButtonStyle.Link | ButtonStyle.Premium>,
    customId: string,
    callback?: (c: InteractiveButtonBuilder) => void,
): InteractiveButtonBuilder;

/**
 * Creates an link button that navigates to a URL when clicked
 * 
 * A Button is an interactive component that can only be used in messages.
 * It creates clickable elements that users can interact with, sending an interaction to your app when clicked.
 * 
 * @param style - The visual style of the button (must be Link / 5).
 * @param url - The destination URL for the button.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of LinkButtonBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#button}
 */
export function button(
    style: ButtonStyle.Link,
    url: string,
    callback?: (c: LinkButtonBuilder) => void,
): LinkButtonBuilder;

/**
 * Creates a premium button for purchases
 * 
 * A Button is an interactive component that can only be used in messages.
 * It creates clickable elements that users can interact with, sending an interaction to your app when clicked.
 * 
 * @param style - The visual style of the button (must be Premium / 6).
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of PremiumButtonBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#button}
 */
export function button(
    style: ButtonStyle.Premium,
    callback?: (c: PremiumButtonBuilder) => void,
): PremiumButtonBuilder;

export function button(
    style: ButtonStyle,
    customIdOrUrlOrCallback?: string | ((c: PremiumButtonBuilder) => void),
    callback?: ((c: InteractiveButtonBuilder) => void) | ((c: LinkButtonBuilder) => void),
): AnyButtonBuilder {
    switch (style) {
        case ButtonStyle.Premium: {
            const builder = new PremiumButtonBuilder();
            const actualCallback = customIdOrUrlOrCallback as ((c: PremiumButtonBuilder) => void) | undefined;
            if (actualCallback) actualCallback(builder);
            return builder;
        }
        case ButtonStyle.Link: {
            const url = typeof customIdOrUrlOrCallback === 'string' ? customIdOrUrlOrCallback : "";
            const builder = new LinkButtonBuilder(url);
            const actualCallback = callback as ((c: LinkButtonBuilder) => void) | undefined;
            if (actualCallback) actualCallback(builder);
            return builder;
        }
        default: {
            const customId = typeof customIdOrUrlOrCallback === 'string' ? customIdOrUrlOrCallback : "";
            const builder = new InteractiveButtonBuilder(style, customId);
            const actualCallback = callback as ((c: InteractiveButtonBuilder) => void) | undefined;
            if (actualCallback) actualCallback(builder);
            return builder;
        }
    }
}
