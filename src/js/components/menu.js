import { onWindowResize, getWindowSize } from '../utils';

// const point_4 = 768;
const { windowWidth } = getWindowSize();

function toggleClassForMenu(ww = windowWidth) {
	if (ww <= 768) {
		console.log('<: ', ww);
		$('.button_open_menu').removeClass('display_none');
		$('.header_menu__list').addClass('display_none');
	} else {
		console.log('>: ', ww);
		$('.button_open_menu').addClass('display_none');
		$('.header_menu__list').removeClass('display_none');
	}
}

toggleClassForMenu();

onWindowResize(() => {
	const { windowWidth: ww } = getWindowSize();
	toggleClassForMenu(ww);
	console.log('resize: ', ww);
});

export function openMenu() {
	$('.header_menu__list ').toggleClass('display_none');
}
