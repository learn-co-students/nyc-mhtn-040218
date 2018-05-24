const pizzaURL = "http://localhost:3000/api/v1/pizzas";
const pizzaForm = document.getElementById("pizza-form");
const pizzaCards = document.getElementById("pizza-cards");

document.addEventListener("DOMContentLoaded", () => {
	fetchPizzas();
})

// makes a POST request to the Rails backend with the form unput
pizzaForm.addEventListener("submit", (e) => {
	e.preventDefault()
	const firstIngredient = document.getElementById('first-ingredient').value;
	const secondIngredient = document.getElementById('second-ingredient').value;
	const pizzaName = document.getElementById('pizza-name').value;
	const pizzaStyle = document.getElementById('pizza-style').value;
	const pizzaCreator = document.getElementById('pizza-creator').value;
	const pizzaImg = document.getElementById('pizza-image').value;

	fetch(pizzaURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			pizza: {
	      name: pizzaName,
	      style: pizzaStyle,
	      creator: pizzaCreator,
	      img_src: pizzaImg,
	      ingredients: [firstIngredient, secondIngredient]
	    }
		})
	})
		.then(res => res.json())
		.then(json => createNewPizza(json))
})

// makes a Fetch request to the API to show all Pizzas
const fetchPizzas = () => {
	fetch(`${pizzaURL}`)
		.then(res => res.json())
		.then(json => createPizzas(json))
}

// creates a pizza from an array of pizzas in the Pizza class so we can render it on a card
const createPizzas = pizzas => {
	pizzas.forEach(pizza => {
		// pizza = {jhklshjkshjl}
    const ingredientNames = createIngredients(pizza.ingredients); // ["toast", "beans"]
    let newPizza = new Pizza(pizza.id, pizza.name, pizza.creator, pizza.img_src, ingredientNames);
		let pizzaElement = newPizza.render();
		pizzaCards.innerHTML += pizzaElement;
	});
};

// creates the ingredients in the Ingredients class
const createIngredients = ingredients => {
  const ingredientNames = ingredients.map(ingredient => {
    let newIngredient = new Ingredient(ingredient.id, ingredient.name);
    return newIngredient.name;
  })
  return ingredientNames;
}

// creates one singular pizza in the Pizza class so we can render it on a card
const createNewPizza = pizza => {
  const ingredientNames = createIngredients(pizza.ingredients);
  let newPizza = new Pizza(pizza.id, pizza.name, pizza.creator, pizza.img_src, ingredientNames);
  let pizzaElement = newPizza.render();
  pizzaCards.innerHTML += pizzaElement;
}
