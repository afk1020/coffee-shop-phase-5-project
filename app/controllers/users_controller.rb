class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    users = User.all
    render json: users
end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name, :password)
  end

end
