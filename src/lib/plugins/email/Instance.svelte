<script lang="ts">
	import type { EmailFieldData } from './types';

	let { data }: { data: EmailFieldData } = $props();
</script>

{#if data.value}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<a class="field-value" href="mailto:{data.value}">{data.value}</a>
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
	}
	.field-value:hover {
		text-decoration: underline;
	}
</style>
