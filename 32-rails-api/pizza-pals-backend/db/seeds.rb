# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bbq_sauce = Ingredient.create(name: "BBQ Sauce")
cheese = Ingredient.create(name: "Cheese")
chicken = Ingredient.create(name: "Chicken")
bbqc = Pizza.create(name: "BBQ Chik'n Pizza", style: "Hand-Tossed", creator: "Humzah", img_src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/1/FN_buffalo-pizza-008_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540642451.jpeg")
PizzaIngredient.create(pizza_id: bbqc.id, ingredient_id: bbq_sauce.id)
PizzaIngredient.create(pizza_id: bbqc.id, ingredient_id: cheese.id)
PizzaIngredient.create(pizza_id: bbqc.id, ingredient_id: chicken.id)
pep = Ingredient.create(name: "Pepperoni")
pepp = Pizza.create(name: "Pepperoni Pizza", style: "NY Style", creator: "Laura", img_src: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DbQsFo3PZ&w=700&q=85")
PizzaIngredient.create(pizza_id: pepp.id, ingredient_id: cheese.id)
PizzaIngredient.create(pizza_id: pepp.id, ingredient_id: pep.id)
garlic = Ingredient.create(name: "Garlic")
alfredo = Ingredient.create(name: "Alfredo")
gwp = Pizza.create(name: "Garlic White Pizza", style: "Thin Crust", creator: "Rishi", img_src: "http://keepinitkind.com/wp-content/uploads/2013/03/White-Pizza-20.jpg")
PizzaIngredient.create(pizza_id: gwp.id, ingredient_id: cheese.id)
PizzaIngredient.create(pizza_id: gwp.id, ingredient_id: garlic.id)
PizzaIngredient.create(pizza_id: gwp.id, ingredient_id: alfredo.id)
