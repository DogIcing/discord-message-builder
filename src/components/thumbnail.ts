import { APIThumbnailComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a thumbnail component
 * 
 * A Thumbnail is a content component that displays visual media in a small form-factor.
 * It is intended as an accessory for to other content, and is primarily usable with sections.
 * The media displayed is defined by the unfurled media item structure, which supports both uploaded media and externally hosted media.
 * 
 * @param url - The URL of the thumbnail image.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of ThumbnailComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#thumbnail}
 */
export function thumbnail(
    url: string,
    callback?: (c: ThumbnailComponentBuilder) => void,
): ThumbnailComponentBuilder {
    const builder = new ThumbnailComponentBuilder();
    builder.set('media', {
        ...builder.data.media,
        url,
    });
    if (callback) callback(builder);
    return builder;
}

const ThumbnailComponentBuilderSetterKeys: (keyof APIThumbnailComponent)[] = ['description', 'id', 'media', 'spoiler', 'type'];
export interface ThumbnailComponentBuilder extends Setters<APIThumbnailComponent, typeof ThumbnailComponentBuilderSetterKeys, ThumbnailComponentBuilder> {}
export class ThumbnailComponentBuilder extends ComponentBuilder<APIThumbnailComponent> {
    constructor() {
        super({ type: ComponentType.Thumbnail });

        attachSetters(this, ThumbnailComponentBuilderSetterKeys);
    }
}
