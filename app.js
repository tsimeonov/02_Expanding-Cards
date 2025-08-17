const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeAcitveClass();
		panel.classList.add('active');
	});
});

function removeAcitveClass() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
