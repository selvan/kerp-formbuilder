<script lang="ts">
	import type { AddressFieldData } from './types';

	let { data }: { data: AddressFieldData } = $props();

	const v = $derived(data.value);
	const addressFields = ['line1', 'line2', 'city', 'state', 'zip', 'country'] as const;
	const fieldLabels: Record<string, string> = {
		line1: 'Street Address',
		line2: 'Address Line 2',
		city: 'City',
		state: 'State / Province',
		zip: 'Postal / Zip Code',
		country: 'Country'
	};
	const hasValue = $derived(
		v && addressFields.some((f) => (v as any)[f]?.toString().trim())
	);
</script>

{#if hasValue && v}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<div class="address-values">
			{#each addressFields as field}
				{#if (v as any)[field]?.toString().trim()}
					<div class="address-row">
						<span class="addr-label">{fieldLabels[field]}</span>
						<span class="addr-value">{(v as any)[field]}</span>
					</div>
				{/if}
			{/each}
		</div>
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
		margin-bottom: 0.25rem;
	}
	.address-values {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
	.address-row {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
	}
	.addr-label {
		font-weight: 600;
		font-size: 0.8rem;
		color: var(--color-label, #94a3b8);
		min-width: 8rem;
	}
	.addr-value {
		font-size: 0.95rem;
		color: var(--color-input-text, #e2e8f0);
	}
</style>
