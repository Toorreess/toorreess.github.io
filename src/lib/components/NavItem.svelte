<script>
	import { currentPage, isMenuOpen } from "../assets/js/store";
	let href = $props();
	let isCurrentPage = $state($currentPage.startsWith(href));
	const maybeCloseMenu = () => {
		if (href != currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		onclick={maybeCloseMenu}
		aria-current={isCurrentPage ? "page" : false}
	>
		<slot />
	</a>
</li>
