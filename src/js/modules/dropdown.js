export function initHeaderDropdown({
	itemSelector,
	triggerSelector,
	activeClass,
}) {
	if (!itemSelector || !triggerSelector || !activeClass) {
		console.warn('initHeaderDropdown: missing required options')
		return
	}

	const items = document.querySelectorAll(itemSelector)
	if (!items.length) return

	function closeAll(except = null) {
		items.forEach(item => {
			if (item !== except) {
				item.classList.remove(activeClass)
			}
		})
	}

	items.forEach(item => {
		const trigger = item.querySelector(triggerSelector)
		if (!trigger) return

		trigger.addEventListener('click', e => {
			e.stopPropagation()

			const isOpen = item.classList.contains(activeClass)

			closeAll(item)

			if (!isOpen) {
				item.classList.add(activeClass)
			}
		})
	})

	// клік поза меню
	document.addEventListener('click', e => {
		const clickedInside = e.target.closest(itemSelector)
		if (!clickedInside) {
			closeAll()
		}
	})
}
