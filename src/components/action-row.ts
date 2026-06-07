import { APIActionRowComponent, APIComponentInActionRow, ButtonStyle, ComponentType } from "discord-api-types/v10";
import { ParentComponentBuilder } from "../lib/component-builder";
import { AnyButtonBuilder, button as createButton, InteractiveButtonBuilder, LinkButtonBuilder, PremiumButtonBuilder } from "./button";
import { channelSelect as createChannelSelect, ChannelSelectComponentBuilder } from "./channel-select";
import { mentionableSelect as createMentionableSelect, MentionableSelectComponentBuilder } from "./mentionable-select";
import { roleSelect as createRoleSelect, RoleSelectComponentBuilder } from "./role-select";
import { stringSelect as createStringSelect, StringSelectComponentBuilder } from "./string-select";
import { userSelect as createUserSelect, UserSelectComponentBuilder } from "./user-select";
import { attachSetters, Setters } from "../lib/setters";

/**
 * Creates an action row
 * 
 * An Action Row is a top-level layout component.
 * Action Rows can contain one of the following:
 * - Up to 5 contextually grouped {@link createButton | buttons}
 * - A single select component
 * ({@link createStringSelect | string select},
 * {@link createUserSelect | user select},
 * {@link createRoleSelect | role select},
 * {@link createMentionableSelect | mentionable select},
 * {@link createChannelSelect | channel select})
 * 
 * @param callback - Optional configuration callback for the builder.
 * @returns An instance of ActionRowComponentBuilder.
 * @see {@link https://discord.com/developers/docs/components/reference#action-row}
 */
export function actionRow(
    callback?: (c: ActionRowComponentBuilder) => void,
): ActionRowComponentBuilder {
    const builder = new ActionRowComponentBuilder();
    if (callback) callback(builder);
    return builder;
}

export type ActionRowChild<T extends APIComponentInActionRow> = APIActionRowComponent<T>['components'][number];

const ActionRowComponentBuilderSetterKeys: (keyof APIActionRowComponent<APIComponentInActionRow>)[] = ['id', 'type'];
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ActionRowComponentBuilder extends Setters<APIActionRowComponent<any>, typeof ActionRowComponentBuilderSetterKeys, ActionRowComponentBuilder> { }
export class ActionRowComponentBuilder extends ParentComponentBuilder<APIActionRowComponent<any>, ActionRowChild<any>> {
/* eslint-enable @typescript-eslint/no-explicit-any */

    constructor() {
        super({ type: ComponentType.ActionRow });

        attachSetters(this, ActionRowComponentBuilderSetterKeys);
    }

    /**
     * Creates an interactive button component
     * 
     * Appends a {@link InteractiveButtonBuilder} to this row.
     * Utilises the base {@link createButton} module function.
     */
    button(
        style: Exclude<ButtonStyle, ButtonStyle.Link | ButtonStyle.Premium>,
        customId: string,
        callback?: (c: InteractiveButtonBuilder) => void,
    ): InteractiveButtonBuilder;

    /**
     * Creates an link button component that navigates to a URL when clicked
     * 
     * Appends a {@link LinkButtonBuilder} to this row.
     * Utilises the base {@link createButton} module function.
     */
    button(
        style: ButtonStyle.Link,
        url: string,
        callback?: (c: LinkButtonBuilder) => void,
    ): LinkButtonBuilder;

    /**
     * Creates a premium button component for purchases
     * 
     * Appends a {@link PremiumButtonBuilder} to this row.
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
                const button = createButton(style, customIdOrUrlOrCallback as ((c: PremiumButtonBuilder) => void));
                this.addChild(button);
                return button;
            }
            case ButtonStyle.Link: {
                const button = createButton(style, customIdOrUrlOrCallback as string, callback as ((c: LinkButtonBuilder) => void));
                this.addChild(button);
                return button;
            }
            default: {
                const button = createButton(style, customIdOrUrlOrCallback as string, callback as ((c: InteractiveButtonBuilder) => void));
                this.addChild(button);
                return button;
            }
        }
    }

    /**
     * Creates a string select field component
     * 
     * Appends a {@link StringSelectComponentBuilder} to this row.
     * Utilises the base {@link createStringSelect} module function.
     */
    stringSelect(
        customId: string,
        callback?: ((c: StringSelectComponentBuilder) => void),
    ) {
        const select = createStringSelect(customId, callback);
        this.addChild(select);
        return select;
    }

    /**
     * Creates a user select field component
     * 
     * Appends a {@link UserSelectComponentBuilder} to this row.
     * Utilises the base {@link createUserSelect} module function.
     */
    userSelect(
        customId: string,
        callback?: ((c: UserSelectComponentBuilder) => void),
    ) {
        const select = createUserSelect(customId, callback);
        this.addChild(select);
        return select;
    }

    /**
     * Creates a role select field component
     * 
     * Appends a {@link RoleSelectComponentBuilder} to this row.
     * Utilises the base {@link createRoleSelect} module function.
     */
    roleSelect(
        customId: string,
        callback?: ((c: RoleSelectComponentBuilder) => void),
    ) {
        const select = createRoleSelect(customId, callback);
        this.addChild(select);
        return select;
    }

    /**
     * Creates a mentionable select field component
     * 
     * Appends a {@link MentionableSelectComponentBuilder} to this row.
     * Utilises the base {@link createMentionableSelect} module function.
     */
    mentionableSelect(
        customId: string,
        callback?: ((c: MentionableSelectComponentBuilder) => void),
    ) {
        const select = createMentionableSelect(customId, callback);
        this.addChild(select);
        return select;
    }

    /**
     * Creates a channel select field component
     * 
     * Appends a {@link ChannelSelectComponentBuilder} to this row.
     * Utilises the base {@link createChannelSelect} module function.
     */
    channelSelect(
        customId: string,
        callback?: ((c: ChannelSelectComponentBuilder) => void),
    ) {
        const select = createChannelSelect(customId, callback);
        this.addChild(select);
        return select;
    }
}