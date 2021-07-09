class AddTotalQtyAttributeToCart < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :total_qty, :integer, :default => 0
  end
end
