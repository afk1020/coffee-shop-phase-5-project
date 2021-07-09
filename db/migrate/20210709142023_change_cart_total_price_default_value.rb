class ChangeCartTotalPriceDefaultValue < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:carts, :total_price, 0)
  end
end
