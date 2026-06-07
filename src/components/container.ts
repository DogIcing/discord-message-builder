import { APIContainerComponent, APIMediaGalleryItem, ComponentType } from "discord-api-types/v10";
import { ParentComponentBuilder } from "../lib/component-builder";
import { actionRow as createActionRow, ActionRowComponentBuilder } from "./action-row";
import { section as createSection, SectionComponentBuilder } from "./section";
import { textDisplay as createTextDisplay, TextDisplayComponentBuilder } from "./text-display";
import { mediaGallery as createMediaGallery, MediaGalleryComponentBuilder } from "./media-gallery";
import { separator as createSeparator, SeparatorComponentBuilder } from "./separator";
import { file as createFile, FileComponentBuilder } from "./file";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a container component
 * 
 * A Container is a top-level layout component.
 * Containers offer the ability to visually encapsulate a collection of components and have an optional customizable accent color bar.
 * 
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of ContainerComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#container}
 */
export function container(
    callback?: (c: ContainerComponentBuilder) => void,
): ContainerComponentBuilder {
    const builder = new ContainerComponentBuilder();
    if (callback) callback(builder);
    return builder;
}

export type ContainerChild = APIContainerComponent['components'][number];

const ContainerComponentBuilderSetterKeys: (keyof APIContainerComponent)[] = ['accent_color', 'id', 'spoiler', 'type'];
export interface ContainerComponentBuilder extends Setters<APIContainerComponent, typeof ContainerComponentBuilderSetterKeys, ContainerComponentBuilder> {}
export class ContainerComponentBuilder extends ParentComponentBuilder<APIContainerComponent, ContainerChild> {
    constructor() {
        super({ type: ComponentType.Container });

        attachSetters(this, ContainerComponentBuilderSetterKeys);
    }

    /**
     * Creates a action row component
     * 
     * Appends a {@link ActionRowComponentBuilder} as a child component.
     * Utilises the base {@link createActionRow} module function.
     */
    actionRow(
        callback?: ((c: ActionRowComponentBuilder) => void),
    ) {
        const actionRow = createActionRow(callback);
        this.addChild(actionRow);
        return actionRow;
    }
    
    /**
     * Creates a text display component
     * 
     * Appends a {@link TextDisplayComponentBuilder} as a child component.
     * Utilises the base {@link createTextDisplay} module function.
     */
    textDisplay(
        content: string,
        callback?: ((c: TextDisplayComponentBuilder) => void),
    ) {
        const textDisplay = createTextDisplay(content, callback);
        this.addChild(textDisplay); 
        return textDisplay;
    }

    /**
     * Creates a section component
     * 
     * Appends a {@link SectionComponentBuilder} as a child component.
     * Utilises the base {@link createSection} module function.
     */
    section(
        callback?: ((c: SectionComponentBuilder) => void),
    ) {
        const section = createSection(callback);
        this.addChild(section); 
        return section;
    }

    /**
     * Creates a media gallery component
     * 
     * Appends a {@link MediaGalleryComponentBuilder} as a child component.
     * Utilises the base {@link createMediaGallery} module function.
     */
    mediaGallery(
        items: APIMediaGalleryItem[],
        callback?: ((c: MediaGalleryComponentBuilder) => void),
    ) {
        const mediaGallery = createMediaGallery(items, callback);
        this.addChild(mediaGallery); 
        return mediaGallery;
    }

    /**
     * Creates a separator component
     * 
     * Appends a {@link SeparatorComponentBuilder} as a child component.
     * Utilises the base {@link createSeparator} module function.
     */
    separator(
        callback?: ((c: SeparatorComponentBuilder) => void),
    ) {
        const separator = createSeparator(callback);
        this.addChild(separator); 
        return separator;
    }

    /**
     * Creates a file component
     * 
     * Appends a {@link FileComponentBuilder} as a child component.
     * Utilises the base {@link createFile} module function.
     */
    file(
        url: string,
        callback?: ((c: FileComponentBuilder) => void),
    ) {
        const file = createFile(url, callback);
        this.addChild(file); 
        return file;
    }
}
