class User < ApplicationRecord
    has_secure_password

    validates :name, presence: true, uniqueness: true
    has_many :carts
    has_many :cart_items, through: :carts

   

    # def current_carts
    #     # Given the current_cart (id), return all the items in that cart
    #     []
    # end
end
