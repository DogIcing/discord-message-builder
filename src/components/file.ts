import { APIFileComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a file component
 * 
 * A File is a top-level content component that allows you to display an uploaded file as an attachment to the message and reference it in the component.
 * Each file component can only display 1 attached file, but you can upload multiple files and add them to different file components within your payload.
 * 
 * @param customId - The URL of the file (The File component only supports using the `attachment://` protocol in unfurled media item).
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of FileComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#file}
 */
export function file(
    url: string,
    callback?: (c: FileComponentBuilder) => void,
): FileComponentBuilder {
    const builder = new FileComponentBuilder();
    builder.set('file', {
        ...builder.data.file, url
    });
    if (callback) callback(builder);
    return builder;
}

const FileComponentBuilderSetterKeys: (keyof APIFileComponent)[] = ['file', 'id', 'name', 'size', 'spoiler', 'type'];
export interface FileComponentBuilder extends Setters<APIFileComponent, typeof FileComponentBuilderSetterKeys, FileComponentBuilder> {}
export class FileComponentBuilder extends ComponentBuilder<APIFileComponent> {
    constructor() {
        super({ type: ComponentType.File });

        attachSetters(this, FileComponentBuilderSetterKeys);
    }
}
