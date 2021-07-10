class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  # Once you've built out the current_carts method, go and rewrite our frontend logic
  has_many :carts
  has_many :cart_items, through: :carts
  # :user_cart(cart)

end
