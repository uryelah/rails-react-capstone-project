class MessagemSerializer < ActiveModel::Serializer # rubocop:disable Layout/EndOfLine
  attributes :id, :conversation_id, :text, :created_at
end
