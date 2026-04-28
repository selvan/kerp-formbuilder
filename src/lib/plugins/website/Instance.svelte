<script lang="ts">
	import type { WebsiteFieldData } from './types';

	let { data }: { data: WebsiteFieldData } = $props();
</script>

{#if data.value}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<a class="field-value" href={data.value} target="_blank" rel="noopener noreferrer">
			{data.value}
		</a>
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
		color: var(--color-accent, #6366f1);
		text-decoration: none;
		word-break: break-all;
	}
	.field-value:hover {
		text-decoration: underline;
	}
</style>
