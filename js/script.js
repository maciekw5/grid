const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-mobile');
const allNavItems = document.querySelectorAll('.nav-mobile__list-item');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	nav.classList.toggle('nav-active');
	burgerBtn.classList.toggle('is-active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-active');
			burgerBtn.classList.remove('is-active');
		});
	});
};

const handleFooter = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleFooter()

burgerBtn.addEventListener('click', handleNav);
