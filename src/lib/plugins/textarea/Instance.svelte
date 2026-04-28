<script lang="ts">
	import type { TextareaFieldData } from './types';

	let { data }: { data: TextareaFieldData } = $props();
</script>

{#if data.value}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<span class="field-value">{data.value}</span>
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
		white-space: pre-wrap;
	}
</style>
