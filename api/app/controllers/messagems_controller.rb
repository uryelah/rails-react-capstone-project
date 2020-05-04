class MessagemsController < ApplicationController
  def create
    messagem = Messagem.new(messagem_params)
    conversation = Conversation.find(messagem_params[:conversation_id])
    if messagem.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessagemSerializer.new(message)
      ).serializable_hash
      MessagemsChannel.broadcast_to conversation, serialized_data
      head :ok
    end
  end
  
  private
  
  def messagem_params
    params.require(:messagem).permit(:text, :conversation_id)
  end
end
