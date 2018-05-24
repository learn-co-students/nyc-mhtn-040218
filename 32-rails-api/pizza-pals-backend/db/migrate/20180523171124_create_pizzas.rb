class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.string :style
      t.string :creator
      t.string :img_src

      t.timestamps
    end
  end
end
