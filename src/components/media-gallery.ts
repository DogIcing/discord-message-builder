import { APIMediaGalleryComponent, APIMediaGalleryItem, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a media gallery component
 * 
 * A Media Gallery is a top-level content component that allows you to display 1-10 media attachments in an organized gallery format.
 * Each item can have optional descriptions and can be marked as spoilers.
 * 
 * @param items - The items in the media gallery.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of MediaGalleryComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#media-gallery}
 */
export function mediaGallery(
    items: APIMediaGalleryItem[],
    callback?: (c: MediaGalleryComponentBuilder) => void,
): MediaGalleryComponentBuilder {
    const builder = new MediaGalleryComponentBuilder();
    builder.set('items', items);
    if (callback) callback(builder);
    return builder;
}

const MediaGalleryComponentBuilderSetterKeys: (keyof APIMediaGalleryComponent)[] = ['id', 'items', 'type'];
export interface MediaGalleryComponentBuilder extends Setters<APIMediaGalleryComponent, typeof MediaGalleryComponentBuilderSetterKeys, MediaGalleryComponentBuilder> {}
export class MediaGalleryComponentBuilder extends ComponentBuilder<APIMediaGalleryComponent> {
    constructor() {
        super({ type: ComponentType.MediaGallery });

        attachSetters(this, MediaGalleryComponentBuilderSetterKeys);
    }
}
