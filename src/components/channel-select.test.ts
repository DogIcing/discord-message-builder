import { expect, test } from 'vitest';
import { channelSelect } from './channel-select';
import { ComponentType } from 'discord-api-types/v10';

test('Channel select with callback', () => {
    const select = channelSelect('customid', (s) =>
        s.placeholder('Hello world').channel_types([1, 2]).required(true)
    );

    expect(select.toJSON()).toEqual({
        type: ComponentType.ChannelSelect,
        custom_id: 'customid',
        placeholder: 'Hello world',
        channel_types: [1, 2],
        required: true,
    });
});

test('Channel select without callback', () => {
    const select = channelSelect('customid');

    expect(select.toJSON()).toEqual({
        type: ComponentType.ChannelSelect,
        custom_id: 'customid',
    });
});
