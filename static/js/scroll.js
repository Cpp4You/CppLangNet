(function() {
	const updateNavbarScroll = () => {
		const elem = document.querySelector("nav.navbar");
		if (!elem)
			return;
			
		elem.classList.add("scrolled");
		if (window.scrollY === 0) {
			elem.classList.remove("at-top");
		} else {
			elem.classList.add("at-top");
		}
	};

	window.addEventListener("load", () => {
		// update data-scroll html attribute
		document.documentElement.dataset.scrolledToTop = window.scrollY == 0;
	});
	window.addEventListener("scroll", () => {
		// update data-scroll html attribute
		document.documentElement.dataset.scrolledToTop = window.scrollY == 0;

		updateNavbarScroll();
	});
})();