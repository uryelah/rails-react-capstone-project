class MeetingsController < ApplicationController
  before_action :set_meet
  before_action :set_meet_meeting, only: %i[show update destroy]

  # GET /meets/:meet_id/meetings
  def index
    json_response(@meet.meetings)
  end

  # GET /meets/:meet_id/meetings/:id
  def show
    json_response(@meeting)
  end

  # POST /meets/:meet_id/meetings
  def create
    @meet.meetings.create!(meeting_params)
    json_response(@meet, :created)
  end

  # PUT /meets/:meet_id/meetings/:id
  def update
    @meeting.update(meeting_params)
    head :no_content
  end

  # DELETE /meets/:meet_id/meetings/:id
  def destroy
    @meeting.destroy
    head :no_content
  end

  private

  def meeting_params
    params.permit(:title, :description)
  end

  def set_meet
    @meet = Meet.find(params[:meet_id])
  end

  def set_meet_meeting
    @meeting = @meet.meetings.find_by!(id: params[:id]) if @meet
  end
end
