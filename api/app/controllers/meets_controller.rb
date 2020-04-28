class MeetsController < ApplicationController
  before_action :set_meet, only: [:show, :update, :destroy]

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
    json_response(@meet)
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

  private

  def meet_params
    # whitelist params
    params.permit(:title, :description)
  end

  def set_meet
    @meet = Meet.find(params[:id])
  end
end
