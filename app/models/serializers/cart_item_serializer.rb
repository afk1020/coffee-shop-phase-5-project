
class CartItemSerializer < ActiveModel::Serializer
    attributes :id, :product_id, :cart_id, :user_id
    belongs_to :product
  end