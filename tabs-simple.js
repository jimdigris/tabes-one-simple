// "Вкладки, табы"
// 30-07-2019

'use strict';

(function () {
	const tabsWrap = document.querySelector('.tabs_wrap');
	const tabs = {
		title: tabsWrap.querySelectorAll('.tab_title'),
		content: tabsWrap.querySelectorAll('.tab_content')
	};
	
	for (let i = 0; i < tabs.title.length; i++) {
		tabs.title[i].addEventListener('click', function () {
			onTabTitleClick(i);
		});
	}	

	function onTabTitleClick (i) {
		tabs.title[i].classList.add('active_title');
		tabs.content[i].classList.add('active_content');

		for (let j = 0; j < tabs.title.length; j++) {	
			if (j !== i) {
				tabs.title[j].classList.remove('active_title');
				tabs.content[j].classList.remove('active_content');
			}
		}
	}
})();
