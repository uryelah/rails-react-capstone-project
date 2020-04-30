class UserMeetsController < ApplicationController
    skip_before_action :authorize_request
    def index
      @user_meets = UserMeet.all
      json_response(@user_meets)
    end

    def create
      @user_meet = UserMeet.create!(user_meet_params)
      json_response(@user_meet, :created)
    end

    def show
      if params[:user_id]
        @user_meet = UserMeet.where(user_id: params[:user_id])
        @res = []

        @user_meet.each do |n|
            @res << Meet.find(n.meet_id)
        end

      end
      if params[:meet_id]
        @user_meet = UserMeet.where(meet_id: params[:meet_id])
        @res = []

        @user_meet.each do |n|
            @res << User.find(n.user_id)
        end
      end

      json_response({ res: @res })
    end

    def destroy
      UserMeet.find(params[:id]).destroy
      head :no_content
    end

    private

    def user_meet_params
      params.permit(:user_id, :meet_id)
    end
end
