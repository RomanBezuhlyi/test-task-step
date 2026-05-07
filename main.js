import '@/styles/main.scss'

import { initPhoneMask } from '@/js/modules/phoneMask'
import { initAccordion } from '@/js/modules/accordion'
import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { initMobileMenu } from '@/js/modules/mobileMenu'
import { initHeaderDropdown } from '@/js/modules/dropdown'

document.addEventListener('DOMContentLoaded', () => {
	initPhoneMask('.number-mask')
	Fancybox.bind('[data-fancybox]')
	initAccordion({
		rootSelector: '.faq',
		itemSelector: '.faq__item',
		triggerSelector: '.faq__toggle',
		contentSelector: '.faq__body',
		activeClass: 'is-open',
	})
	initMobileMenu({
		burgerSelector: '.header__burger',
		menuSelector: '.header__nav',
		activeClass: 'is-open',
		lockClass: 'lock',
	})
	initHeaderDropdown({
		itemSelector: '.header__item',
		triggerSelector: '.header__item-name',
		activeClass: 'is-open',
	})
})
