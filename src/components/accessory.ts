import { APISectionAccessoryComponent, ButtonStyle } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { Setters, attachSetters } from "../lib/setters";
import { AnyButtonBuilder, button as createButton, InteractiveButtonBuilder, LinkButtonBuilder, PremiumButtonBuilder } from "./button";
import { thumbnail as createThumbnail, ThumbnailComponentBuilder } from "./thumbnail";

/**
 * Wrapper for valid accessory components of a section
 * 
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of AccessoryBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#section}
 */
export function accessory(
    callback?: (a: AccessoryBuilder) => void,
): AccessoryBuilder {
    const builder = new AccessoryBuilder();
    if (callback) callback(builder);
    return builder;
}

const AccessoryBuilderSetterKeys: (keyof APISectionAccessoryComponent)[] = ['id', 'type'];
export interface AccessoryBuilder extends Setters<APISectionAccessoryComponent, typeof AccessoryBuilderSetterKeys, AccessoryBuilder> { }
export class AccessoryBuilder extends ComponentBuilder<APISectionAccessoryComponent> {
    constructor() {
        super({});

        attachSetters(this, AccessoryBuilderSetterKeys);
    }

    /**
     * Sets the accessory to an interactive button component ({@link InteractiveButtonBuilder}).
     * Utilises the base {@link createButton} module function.
     */
    button(
        style: Exclude<ButtonStyle, ButtonStyle.Link | ButtonStyle.Premium>,
        customId: string,
        callback?: (c: InteractiveButtonBuilder) => void,
    ): InteractiveButtonBuilder;

    /**
     * Sets the accessory to a link button component that navigates to a URL when clicked ({@link LinkButtonBuilder}).
     * Utilises the base {@link createButton} module function.
     */    
    button(
        style: ButtonStyle.Link,
        url: string,
        callback?: (c: LinkButtonBuilder) => void,
    ): LinkButtonBuilder;

    /**
     * Sets the accessory to a premium button component for purchases ({@link PremiumButtonBuilder}).
     * Utilises the base {@link createButton} module function.
     */
    button(
        style: ButtonStyle.Premium,
        callback?: (c: PremiumButtonBuilder) => void,
    ): PremiumButtonBuilder;

    button(
        style: ButtonStyle,
        customIdOrUrlOrCallback?: string | ((c: PremiumButtonBuilder) => void),
        callback?: ((c: InteractiveButtonBuilder) => void) | ((c: LinkButtonBuilder) => void),
    ): AnyButtonBuilder {
        switch (style) {
            case ButtonStyle.Premium: {
                const button = createButton(
                    style,
                    customIdOrUrlOrCallback as ((c: PremiumButtonBuilder) => void),
                );
                this.data = button.toJSON();
                return button;
            }
            case ButtonStyle.Link: {
                const button = createButton(
                    style,
                    customIdOrUrlOrCallback as string,
                    callback as (c: LinkButtonBuilder) => void,
                );
                this.data = button.toJSON();
                return button;
            }
            default: {
                const button = createButton(
                    style,
                    customIdOrUrlOrCallback as string,
                    callback as (c: InteractiveButtonBuilder) => void,
                );
                this.data = button.toJSON();
                return button;
            }
        }
    }

    /**
     * Sets the accessory to a thumbnail component ({@link ThumbnailComponentBuilder}).
     * Utilises the base {@link createThumbnail} module function.
     */
    thumbnail(
        url: string,
        callback?: ((c: ThumbnailComponentBuilder) => void),
    ) {
        const thumbnail = createThumbnail(url, callback);
        this.data = thumbnail.toJSON();
        return thumbnail;
    }
}
