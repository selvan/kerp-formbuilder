import type { BaseFieldData } from '$lib/types';
export interface FileFieldData extends BaseFieldData { type: 'file'; value?: { file_name?: string }; download_url?: string; }