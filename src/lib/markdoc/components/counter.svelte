<script lang="ts">
	let count = $state(0)
</script>

<button onclick={() => count++}>
	Count: {count}
</button>

<style>
	button {
		padding: 0.6rem;
		font: inherit;
		color: oklch(100% 0 0);
		background-color: oklch(28% 0.01 200);
		border-radius: 8px;
		border: none;
		cursor: pointer;
	}
</style>
