class ProductsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        products = Product.all
        render json: products
    end
    
    def show
        product = Product.find(params[:id].to_i)
        render json: product, include: "**"
        # products = Product.all
        # render json: products
    end
end
