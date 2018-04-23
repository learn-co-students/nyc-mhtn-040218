class CreateFish < ActiveRecord::Migration
  def change
    create_table :fish do |t|
      t.string :species
      t.integer :weight
      t.integer :price
    end
  end
end
