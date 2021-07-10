
class CartItemSerializer < ActiveModel::Serializer
    attributes :id, :quantity, :product_id, :cart_id, :item_price
    belongs_to :product
  end