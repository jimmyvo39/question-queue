class Api::SessionsController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]

  def show
    @user = current_user
    if @user
      render json: 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    email = params[:email]
    password = params[:password]
    
    @user = User.find_by_credentials(email, password)
    if @user
      login!(@user)
      render json: 'api/users/show'

    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    user = current_user
    if user
      logout!
      render json: { message: 'success' }
    end
  end

end
