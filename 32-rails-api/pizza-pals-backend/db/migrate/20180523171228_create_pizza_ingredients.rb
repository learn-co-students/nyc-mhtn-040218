class CreatePizzaIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :pizza_ingredients do |t|
      t.integer :pizza_id
      t.integer :ingredient_id

      t.timestamps
    end
  end
end
