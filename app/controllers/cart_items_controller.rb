class CartItemsController < ApplicationController
    # before_action :set_cart, only: [:create, :destroy]
    skip_before_action :authorize, only: :create
    def index
        carts = cartItem.all
        render json: carts
    end

    def show
        cart_id = params[:id].to_i
        cart = Cart.find_by_id(cart_id)
        render json: cart
    end

    def create
        cart = Cart.create(user_id: cart_item_params[:user_id])
        cart_items = CartItem.create(cart_id:cart.id, product_id: cart_item_params[:products_id])
        render json: cart_items
    end
    private
    def cart_item_params
        params.permit(:products_id, :cart_id, :user_id)
    end

end

    # def create
    #     cart = Cart.find(cart_item_params[:cart_id])
    #     cart_items = cart.cart_items

    #     found_item = cart_items.detect do |item| 
    #         cart_item_params[:product_id] == item.product_id
    #     end
    #     if found_item
    #         # found_item.quantity += 1
    #         found_item.quantity += cart_item_params[:quantity].to_i
    #         found_item.item_price = found_item.quantity * found_item.product.price_dollars
    #         found_item.save
            
    #     else
    #         cartItem = CartItem.create(cart_item_params)
    #         cartItem.item_price = cartItem.quantity * cartItem.product.price_dollars
    #         cartItem.save
    #         # order.total_price += orderItem.item_price
    #         # order.save
    #     end
        
    #     total = 0
    #     total_quantity = 0

    #     cart = Cart.find(cart_item_params[:cart_id])
    #     cart.cart_items.each { |item| total += item.item_price }
    #     cart.total_price = total

    #     cart.cart_items.each { |item| total_quantity += item.quantity }
    #     cart.total_qty = total_quantity
    #     cart.save
        
    #     # byebug
    #     # render json: order, include: "**"
    #     render json: current_site_user, include: '**'

    # end

    # def destroy
    #     cart_item = CartItem.find(params[:id].to_i)
    #     cart_item.destroy
    #     cart = Cart.find(current_site_user.current_cart)
    #     total = 0
    #     cart.cart_items.each { |item| total += item.item_price }
    #     cart.total_price = total

        

    #     cart.save
    #     # render json: {user: current_site_user, order: order}
    #     render json: current_site_user, include: '**'

    # end



