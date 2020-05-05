class UsersController < ApplicationController
  skip_before_action :authorize_request, only: %i[create index]
  def create
    user = User.new(email: params[:email],
                    password: params[:password],
                    password_confirmation: params[:password_confirmation],
                    name: params[:name],
                    picture: "https://joeschmoe.io/api/v1/#{name_me}")

    user.save

    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, auth_token: auth_token, user: user }
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

  def name_me
    people = %w[
      jabala jane jenni josephine jake jerry jai julie jude jack jolee jean jon jacques
      josh jaqueline james jess jazebelle jeri joe jana jodi jordan jocelyn jeane jed jia
    ]

    people.sample
  end

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
