require 'rails_helper'

RSpec.describe Messagem, type: :model do
  it { should belong_to(:conversation) }
  it { should validate_presence_of(:text) }
  it { should validate_presence_of(:conversation_id) }
end
