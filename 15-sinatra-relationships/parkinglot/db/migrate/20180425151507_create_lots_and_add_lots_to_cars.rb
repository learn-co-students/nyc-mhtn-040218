class CreateLotsAndAddLotsToCars < ActiveRecord::Migration
  def change

    create_table :lots do |t|
      t.string :name
    end

    add_column :cars, :lot_id, :integer
  end
end
