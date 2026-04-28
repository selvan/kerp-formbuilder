import type { FieldPlugin } from '$lib/types';
import Icon from './Icon.svelte';
import Preview from './Preview.svelte';
import Instance from './Instance.svelte';
import Settings from './Settings.svelte';
import type { SelectFieldData } from './types';

export const selectPlugin: FieldPlugin<SelectFieldData> = {
	type: 'select',
	widgetName: 'Dropdown',
	icon: Icon as any,
	preview: Preview as any,
	instance: Instance as any,
	settings: Settings as any,
	defaultValue: () => ({
		type: 'select',
		label_text: 'Dropdown',
		required: false,
		field_size: 'medium',
		options: [
			{ text: 'Option 1', checked: false },
			{ text: 'Option 2', checked: false },
			{ text: 'Option 3', checked: false }
		]
	})
};
