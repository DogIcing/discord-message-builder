import { expect, test } from 'vitest';
import { fileUpload } from './file-upload';
import { ComponentType } from 'discord-api-types/v10';

test('File upload with callback', () => {
    const upload = fileUpload('customid', (u) =>
        u.required(true).max_values(3).min_values(1)
    );

    expect(upload.toJSON()).toEqual({
        type: ComponentType.FileUpload,
        custom_id: 'customid',
        required: true,
        max_values: 3,
        min_values: 1,
    });
});

test('File upload without callback', () => {
    const upload = fileUpload('customid');

    expect(upload.toJSON()).toEqual({
        type: ComponentType.FileUpload,
        custom_id: 'customid',
    });
});
