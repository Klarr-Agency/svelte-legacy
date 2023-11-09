<script lang="ts">
	let count: number = 0;
	export let label = "";
	const increment = () => {
		count += 1;
	};
</script>

<h2>{label}</h2>
<button on:click={increment}>
	count is {count}
</button>
