<script lang="ts">
	let { children, type }: any = $props()
</script>

<div class="callout {type}">
	{@render children()}
</div>

<style>
	.callout {
		margin-block: 2rem;
		padding: 1rem;
		color: oklch(100% 0 0);
		border-radius: 8px;
	}

	.check {
		background-color: oklch(28% 0.01 200);
	}
</style>
