class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :status
      t.integer :user_id
      t.integer :total_price
      t.timestamps
    end
  end
end
