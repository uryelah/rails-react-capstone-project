class Conversation < ApplicationRecord # rubocop:disable Layout/EndOfLine
  has_many :messagems
  validates_presence_of :title
end
