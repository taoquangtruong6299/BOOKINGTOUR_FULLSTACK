class RegistrationsController < ApplicationController
  def create
    user = User.create!(
      email: params["user"]["email"],
      password: params["user"]["password"],
      password_confirmation: params["user"]["password_confirmation"]
    )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        message: :"Bạn đã đăng ký thành công.",
        user: user
      }
      else
        render json: {
          status: 500,
          error: :"Noi dung chua chinh xac"
        }
    end
  end
end
