import { APIModalInteractionResponseCallbackData } from "discord-api-types/v10";
import {
    ActionRowComponentBuilder,
    actionRow as createActionRow,
    TextDisplayComponentBuilder,
    textDisplay as createTextDisplay,
} from "../components";
import { ParentComponentBuilder } from "../lib/component-builder";

export function modal(
    data: Partial<APIModalInteractionResponseCallbackData>,
    callback?: (m: ModalResponseBuilder) => void,
): ModalResponseBuilder;
export function modal(
    callback: (m: ModalResponseBuilder) => void,
): ModalResponseBuilder;
export function modal(
    callbackOrData: Partial<APIModalInteractionResponseCallbackData> | ((m: ModalResponseBuilder) => void),
    callback?: (m: ModalResponseBuilder) => void,
): ModalResponseBuilder {
    const builder = new ModalResponseBuilder();

    if (typeof callbackOrData === 'function') {
        callbackOrData(builder);
    } else {
        builder.data = callbackOrData;
        if (callback) callback(builder);
    }

    return builder;
}

export class ModalResponseBuilder extends ParentComponentBuilder<
    APIModalInteractionResponseCallbackData,
    NonNullable<APIModalInteractionResponseCallbackData['components']>[number]
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

    textDisplay(
        content: string,
        callback?: ((c: TextDisplayComponentBuilder) => void),
    ) {
        const textDisplay = createTextDisplay(content, callback);
        this.addChild(textDisplay);
        return textDisplay;
    }
}
