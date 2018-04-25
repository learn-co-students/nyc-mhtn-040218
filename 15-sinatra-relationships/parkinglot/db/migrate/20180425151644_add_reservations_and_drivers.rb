class AddReservationsAndDrivers < ActiveRecord::Migration
  def change
    create_table :drivers do |t|
      t.string :name
      t.integer :age
    end

    create_table :reservations do |t|
      t.integer :car_id
      t.integer :driver_id
    end
  end
end
