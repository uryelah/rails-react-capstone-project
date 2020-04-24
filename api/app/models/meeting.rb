class Meeting < ApplicationRecord
  belongs_to :meet

  has_many :user_meetings
  has_many :users, through: :user_meetings
  validates_presence_of :title
end
