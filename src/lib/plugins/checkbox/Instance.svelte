<script lang="ts">
	import type { CheckboxFieldData } from './types';

	let { data }: { data: CheckboxFieldData } = $props();
</script>

{#if data.value && data.value.length > 0}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<span class="field-value">{data.value.join(', ')}</span>
	</div>
{/if}

<style>
	.instance-field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.5rem 0;
	}
	.field-label {
		font-weight: 600;
		font-size: 0.8rem;
		color: var(--color-label, #94a3b8);
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}
	.field-value {
		font-size: 0.95rem;
		color: var(--color-input-text, #e2e8f0);
	}
</style>
