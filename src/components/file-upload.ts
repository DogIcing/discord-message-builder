import { APIFileUploadComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../lib/component-builder";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates a file upload component
 * 
 * File Upload is an interactive component that allows users to upload files in modals.
 * File Uploads can be configured to have a minimum and maximum number of files between 0 and 10,
 * along with `required` for if the upload is required to submit the modal.
 * The max file size a user can upload is based on the user's upload limit in that channel.
 * 
 * @param customId - The developer-defined identifier for interaction events.
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of FileUploadComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#file-upload}
 */
export function fileUpload(
    customId: string,
    callback?: (c: FileUploadComponentBuilder) => void,
): FileUploadComponentBuilder {
    const builder = new FileUploadComponentBuilder();
    builder.set('custom_id', customId);
    if (callback) callback(builder);
    return builder;
}

const FileUploadComponentBuilderSetterKeys: (keyof APIFileUploadComponent)[] = ['custom_id', 'id', 'max_values', 'min_values', 'required', 'type'];
export interface FileUploadComponentBuilder extends Setters<APIFileUploadComponent, typeof FileUploadComponentBuilderSetterKeys, FileUploadComponentBuilder> {}
export class FileUploadComponentBuilder extends ComponentBuilder<APIFileUploadComponent> {
    constructor() {
        super({ type: ComponentType.FileUpload });

        attachSetters(this, FileUploadComponentBuilderSetterKeys);
    }
}
