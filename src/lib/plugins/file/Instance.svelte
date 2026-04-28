<script lang="ts">
	import type { FileFieldData } from './types';

	let { data }: { data: FileFieldData } = $props();
</script>

{#if data.value?.file_name}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		{#if data.download_url}
			<a class="file-link" href={data.download_url} target="_blank" rel="noopener noreferrer">
				<span class="file-icon">📎</span>
				{data.value.file_name}
			</a>
		{:else}
			<span class="field-value">
				<span class="file-icon">📎</span>
				{data.value.file_name}
			</span>
		{/if}
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
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}
	.file-link {
		font-size: 0.95rem;
		color: var(--color-accent, #6366f1);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}
	.file-link:hover {
		text-decoration: underline;
	}
	.file-icon {
		font-size: 1rem;
	}
</style>
