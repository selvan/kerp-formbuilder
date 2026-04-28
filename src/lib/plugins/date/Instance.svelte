<script lang="ts">
	import type { DateFieldData } from './types';

	let { data }: { data: DateFieldData } = $props();

	const v = $derived(data.value);
	const hasValue = $derived(v && v.mm && v.dd && v.yyyy);

	const formatted = $derived(() => {
		if (!v || !v.mm || !v.dd || !v.yyyy) return '';
		try {
			const year = parseInt(v.yyyy, 10);
			const month = parseInt(v.mm, 10);
			const day = parseInt(v.dd, 10);
			const date = new Date(year, month - 1, day);
			return date.toLocaleDateString(undefined, {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			});
		} catch {
			return `${v.mm}/${v.dd}/${v.yyyy}`;
		}
	});
</script>

{#if hasValue}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<span class="field-value">{formatted()}</span>
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
		font-variant-numeric: tabular-nums;
	}
</style>
