class MessagemsChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:conversation])
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
