class CartSerializer < ActiveModel::Serializer
  attributes :id, :status, :user_id, :total_price, :total_qty
  # has_many :products
  has_many :cart_items
end
