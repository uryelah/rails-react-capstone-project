require 'rails_helper'

RSpec.describe Conversation, type: :model do
  it { should have_many(:messagems) }
  it { should validate_presence_of(:title) }
end
