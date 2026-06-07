import { APILabelComponent, APIMessageComponent, APIModalComponent } from "discord-api-types/v10";
import { ComponentBuilder } from "./component-builder";

export type Setters<T extends APIMessageComponent | APILabelComponent | APIModalComponent, Keys extends readonly (keyof T)[], Self extends ComponentBuilder<T>> = {
    [K in Keys[number]]: (value: T[K]) => Self;
}

type SetterKeys<T extends APIMessageComponent | APILabelComponent | APIModalComponent> = {
    [K in keyof T]: (value: T[K]) => ComponentBuilder<T>;
}

export function attachSetters<T extends APIMessageComponent | APILabelComponent | APIModalComponent, const K extends readonly (keyof T)[]>(
    builder: ComponentBuilder<T>,
    keys: K
): asserts builder is ComponentBuilder<T> & Pick<SetterKeys<T>, K[number]> {
    for (const key of keys) {
        const stringKey = key as Extract<keyof T, string>;

        Object.defineProperty(builder, stringKey, {
            value: function (this: ComponentBuilder<T>, value: T[typeof key]) {
                builder.set(key, value);
                return this;
            },
        });
    }
}
