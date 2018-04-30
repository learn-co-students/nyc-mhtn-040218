class CreateBeanieBabies < ActiveRecord::Migration[5.2]
  def change
    create_table :beanie_babies do |t|
      t.string :name
      t.decimal :price
      t.integer :rarity
      t.boolean :fluffiness

      t.timestamps
    end
  end
end
