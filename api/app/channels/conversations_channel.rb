class ConversationsChannel < ApplicationCable::Channel # rubocop:disable Layout/EndOfLine
  def subscribed
    stream_from 'conversations_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
