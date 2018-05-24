class Ingredient {
  constructor(id, name, pizzaId) {
    this.id = id;
    this.name = name;
    this.pizzaId = id
  }

  render(ingredientNames) {
    return(`
      <div class="ui basic modal">
        <div class="ui icon header">
          <i class="archive icon"></i>
          Archive Old Messages
        </div>
        <div class="content">
          <p>${ingredientNames}</p>
        </div>
      </div>
      `)
  }

}
