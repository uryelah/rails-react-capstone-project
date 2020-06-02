class MeetsController < ApplicationController
  before_action :set_meet, only: %i[show update destroy]

  # GET /meets
  def index
    @meets = Meet.all
    json_response(@meets)
  end

  # POST /meets
  def create
    @meet = current_user.meets.create!(meet_params)
    json_response(@meet, :created)
  end

  # GET /meets/:id
  def show
    @user = User.find(@meet.created_by)
    @meetings = @meet.meetings

    json_response({ meet: @meet, user: @user, meetings: @meetings })
  end

  # PUT /meets/:id
  def update
    @meet.update(meet_params)
    head :no_content
  end

  # DELETE /meets/:id
  def destroy
    @meet.destroy
    head :no_content
  end

  def search
    search_term = params[:term]
    @meets = Meet.where('title like ? OR description like ?', "%#{search_term}%", "%#{search_term}%")
    json_response(@meets)
  end

  private

  def meet_params
    # whitelist params
    params.permit(:title, :description, :frequency, :duration, :day, :max_members, :created_by)
  end

  def set_meet
    @meet = Meet.find(params[:id])
  end
end
