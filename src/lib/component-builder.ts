import { APIBaseComponent, APIMessage, APIMessageComponent, APIModalComponent, APIModalInteractionResponseCallbackData, ComponentType } from "discord-api-types/v10";
import { BaseBuilder } from "./base-builder";

export class ComponentBuilder<
    T extends APIMessageComponent | APIModalComponent | APIMessage | APIModalInteractionResponseCallbackData | APIModalComponent,
> extends BaseBuilder<T> {}

export class ParentComponentBuilder<
    T extends Extract<APIMessageComponent, { components: APIBaseComponent<ComponentType>[] }> | APIMessage | APIModalInteractionResponseCallbackData,
    ChildType extends APIMessageComponent | APIModalComponent,
> extends ComponentBuilder<T> {
    protected addChild(
        childBuilder: ComponentBuilder<ChildType>,
    ) {
        const currentComponents = this.data.components ?? [];
        this.data.components = [
            ...currentComponents,
            childBuilder.toJSON()
        ] as T['components'];
    }
}
