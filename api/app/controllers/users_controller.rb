class UsersController < ApplicationController
    skip_before_action :authorize_request, only: [:create, :index]
    def create
        user = User.create!(user_params)

        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
    end

    def index
        @users = User.all
        json_response(@users)
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
