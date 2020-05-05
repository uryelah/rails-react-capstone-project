class Messagem < ApplicationRecord # rubocop:disable Layout/EndOfLine
  belongs_to :conversation
  validates_presence_of :text, :conversation_id
end
