// "Вкладки, табы"
// 23-07-2019

'use strict';

(function () {
	const tabsWrap = document.querySelector('.tabs_wrap');
	const tabs = {
		title: tabsWrap.querySelectorAll('.tab_title'),
		content: tabsWrap.querySelectorAll('.tab_content')
	};
	
	for (let i = 0; i < tabs.title.length; i++) {
		tabs.title[i].addEventListener('click', onTabTitleClick);
	}
	
	
	function onTabTitleClick () {
		console.log('d');
	}
})();
 