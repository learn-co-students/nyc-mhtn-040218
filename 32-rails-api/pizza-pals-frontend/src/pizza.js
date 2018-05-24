class Pizza {
	constructor(id, name, creator, image, ingredients) {
    this.id = id;
		this.name = name;
		this.creator = creator;
		this.image = image;
    this.ingredients = ingredients
	}

	render() {
		return (`
      <div class="card">
        <div class="image">
          <img src="${this.image}" style="height: 275px; width: 100%">
          </div>
          <div class="content">
            <div class="header">${this.name}</div>
            <div class="meta">
              <a>${this.creator}</a>
            </div>
            <br />
            <div class="description">
              This is some super dank pizza, especially since ${this
								.creator} made it.
            </div>
          </div>
          <div class="extra content">
            Ingredients are: ${this.ingredients.join(", ")}
          </div>
        </div>
      `);
	}
}
