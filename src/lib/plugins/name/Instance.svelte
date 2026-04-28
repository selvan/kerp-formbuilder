<script lang="ts">
	import type { NameFieldData } from './types';

	let { data }: { data: NameFieldData } = $props();

	const v = $derived(data.value);
	const hasValue = $derived(
		v && ['first', 'last', 'title', 'suffix'].some((f) => (v as any)[f]?.trim())
	);
</script>

{#if hasValue && v}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<span class="field-value">
			{#if v.title}<b>{v.title}. </b>{/if}
			{#if v.first}<span>{v.first} </span>{/if}
			{#if v.last}<span>{v.last} </span>{/if}
			{#if v.suffix}<span>{v.suffix}</span>{/if}
		</span>
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
