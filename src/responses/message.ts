import { APIMediaGalleryItem, APIMessage } from "discord-api-types/v10";
import {
    ActionRowComponentBuilder,
    actionRow as createActionRow,
    ContainerComponentBuilder,
    container as createContainer,
    FileComponentBuilder,
    file as createFile,
    MediaGalleryComponentBuilder,
    mediaGallery as createMediaGallery,
    SectionComponentBuilder,
    section as createSection,
    SeparatorComponentBuilder,
    separator as createSeparator,
    TextDisplayComponentBuilder,
    textDisplay as createTextDisplay,
} from "../components";
import { ParentComponentBuilder } from "../lib/component-builder";

export function message(
    data: Partial<APIMessage>,
    callback?: (m: MessageResponseBuilder) => void,
): MessageResponseBuilder;
export function message(
    callback: (m: MessageResponseBuilder) => void,
): MessageResponseBuilder;
export function message(
    callbackOrData: Partial<APIMessage> | ((m: MessageResponseBuilder) => void),
    callback?: (m: MessageResponseBuilder) => void,
): MessageResponseBuilder {
    const builder = new MessageResponseBuilder();

    if (typeof callbackOrData === 'function') {
        callbackOrData(builder);
    } else {
        builder.data = callbackOrData;
        if (callback) callback(builder);
    }

    return builder;
}

export class MessageResponseBuilder extends ParentComponentBuilder<
    APIMessage,
    NonNullable<APIMessage['components']>[number]
> {
    constructor() {
        super({});
    }

    actionRow(
        callback?: ((c: ActionRowComponentBuilder) => void),
    ) {
        const actionRow = createActionRow(callback);
        this.addChild(actionRow);
        return actionRow;
    }

    container(
        callback?: ((c: ContainerComponentBuilder) => void),
    ) {
        const container = createContainer(callback);
        this.addChild(container);
        return container;
    }

    file(
        url: string,
        callback?: ((c: FileComponentBuilder) => void),
    ) {
        const file = createFile(url, callback);
        this.addChild(file);
        return file;
    }

    mediaGallery(
        items: APIMediaGalleryItem[],
        callback?: ((c: MediaGalleryComponentBuilder) => void),
    ) {
        const mediaGallery = createMediaGallery(items, callback);
        this.addChild(mediaGallery);
        return mediaGallery;
    }

    section(
        callback?: ((c: SectionComponentBuilder) => void),
    ) {
        const section = createSection(callback);
        this.addChild(section);
        return section;
    }

    separator(
        callback?: ((c: SeparatorComponentBuilder) => void),
    ) {
        const separator = createSeparator(callback);
        this.addChild(separator);
        return separator;
    }

    textDisplay(
        content: string,
        callback?: ((c: TextDisplayComponentBuilder) => void),
    ) {
        const textDisplay = createTextDisplay(content, callback);
        this.addChild(textDisplay);
        return textDisplay;
    }
}
