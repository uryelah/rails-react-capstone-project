class Meeting < ApplicationRecord # rubocop:disable Layout/EndOfLine
  belongs_to :meet

  has_many :user_meetings, dependent: :destroy
  has_many :users, through: :user_meetings
  validates_presence_of :title, :description, :date, :meet_id, :link
end
