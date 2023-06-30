let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
	if (this.window.scrollY > 100) {
		nav.classList.add("navbar-scrolled");
	} else {
		nav.classList.remove("navbar-scrolled");
	}
});
