<script lang="ts">
	import { onMount } from 'svelte';
	import type { SignatureFieldData } from './types';

	let { data }: { data: SignatureFieldData } = $props();

	let canvasEl: HTMLCanvasElement | undefined = $state();

	onMount(() => {
		if (!canvasEl || !data.value) return;

		const ctx = canvasEl.getContext('2d');
		if (!ctx) return;

		try {
			const sigData = JSON.parse(data.value);
			if (!Array.isArray(sigData)) return;

			ctx.strokeStyle = '#e2e8f0';
			ctx.lineWidth = 2;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';

			for (const stroke of sigData) {
				if (!stroke.lx && stroke.lx !== 0) continue;
				ctx.beginPath();
				ctx.moveTo(stroke.mx, stroke.my);
				ctx.lineTo(stroke.lx, stroke.ly);
				ctx.stroke();
			}
		} catch {
			// Invalid signature data — leave canvas blank
		}
	});
</script>

{#if data.value}
	<div class="instance-field">
		<span class="field-label">{data.label_text}</span>
		<div class="signature-container">
			<canvas
				bind:this={canvasEl}
				class="signature-pad"
				width="198"
				height="55"
			></canvas>
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
	}
	.signature-container {
		display: inline-block;
		border: 1px solid var(--color-border, #334155);
		border-radius: 0.5rem;
		background: var(--color-input-bg, #1e293b);
		padding: 0.5rem;
		max-width: fit-content;
	}
	.signature-pad {
		display: block;
	}
</style>
