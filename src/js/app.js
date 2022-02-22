/* eslint-disable import/extensions */
/* eslint-disable import/order */
// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
import magnific from 'magnific-popup';
// ------------------- imports###

// ------------------  import components
import { openMenu } from 'components/menu';
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
if (GLOBAL_VARS.projectDevStatus) {
	pageWidgetInit();
	console.log(process.env.NODE_ENV);
}
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
};

const loadFunc = () => {
	console.log('page load');

	$('.button_open_menu').on('click', openMenu);

	$('.item_video_link').magnificPopup({ type: 'iframe' });
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
