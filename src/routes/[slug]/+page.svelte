<script lang="ts">
	import MarkdocRenderer from '$lib/markdoc/renderer.svelte'

	let { data } = $props()
</script>

<MarkdocRenderer children={JSON.parse(data.children)} />
