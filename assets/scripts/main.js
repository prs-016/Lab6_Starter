// main.js

window.addEventListener("DOMContentLoaded", init);

function init() {
	let recipes = getRecipesFromStorage();
	addRecipesToDocument(recipes);
	initFormHandler();
}

function getRecipesFromStorage() {
	// A9
	return JSON.parse(localStorage.getItem('recipes')) || [];
}

function addRecipesToDocument(recipes) {
	// A10
	const main = document.querySelector('main');

	// A11
	recipes.forEach(recipe => {
		const card = document.createElement('recipe-card');
		card.data = recipe;
		main.appendChild(card);
	});
}

function saveRecipesToStorage(recipes) {
	// B1
	localStorage.setItem('recipes', JSON.stringify(recipes));
}

function initFormHandler() {
	// B2
	const form = document.querySelector('form');

	// B3
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		// B4
		const formData = new FormData(form);

		// B5
		const recipeObject = {};
		formData.forEach((value, key) => {
			recipeObject[key] = value;
		});

		// B6
		const card = document.createElement('recipe-card');

		// B7
		card.data = recipeObject;

		// B8
		const main = document.querySelector('main');
		main.appendChild(card);

		// B9
		const recipes = getRecipesFromStorage();
		recipes.push(recipeObject);
		saveRecipesToStorage(recipes);

		form.reset();
	});

	// B10
	const clearButton = document.querySelector('button.danger');

	// B11
	clearButton.addEventListener('click', () => {
		// B12
		localStorage.clear();

		// B13
		document.querySelector('main').innerHTML = '';
	});
}
