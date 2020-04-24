class UsersController < ApplicationController
    skip_before_action :authorize_request, only: :create
    def create
        user = User.new(user_params)
        user.picture = "https://fakeimg.pl/100x100/?text=#{user_params.name[0..1].upcase}&font=lobster&font_size=36"
        user.save!
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
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
