class Meeting < ApplicationRecord
  belongs_to :meet
  has_many :users

  validates_presence_of :title
end
