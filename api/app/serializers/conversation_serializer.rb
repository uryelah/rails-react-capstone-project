class ConversationSerializer < ActiveModel::Serializer # rubocop:disable Layout/EndOfLine
  attributes :id, :title
  has_many :messagems
end
