class UsersController < ApplicationController
  before_action :set_user, only: %i[ show edit update destroy ]

  def index
    users = User.all
    render json: {
      status: :index,
      logged_in: true,
      user: users
    }
  end

  def show
    if @user
    render json: {
      status: :show,
      logged_in: true,
      user: @user
    }
    else
    render json: {
      status: 401,
      logged_in: false
    }
    end
  end

  def update
    if  @user = User.update(user_params)
    render json: {
      status: :ok,
      logged_in: true,
      message: :"Bạn đã cập nhật thành công.",
      user: @user
    }
    else
    render json: {
      status: :unprocessable_entity,
      error: :"Bạn cập nhật không thành công.",
      logged_in: true
    }
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
