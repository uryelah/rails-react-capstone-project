class UsersController < ApplicationController
    skip_before_action :authorize_request, only: [:create, :index]
    def create
        user = User.new(email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], name: 'Bob')

        user.save()

        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
    end

    def index
        @users = User.all
        json_response(@users)
    end

    def show
        @user = User.find(params[:id])
        json_response(@user)
    end
    
    private
    
    def user_params
        params.permit(
          :name,
          :email,
          :picture,
          :password,
          :password_confirmation
        )
    end
end
