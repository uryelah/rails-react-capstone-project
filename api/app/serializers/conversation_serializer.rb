class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :messagems
end
