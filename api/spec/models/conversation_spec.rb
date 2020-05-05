require 'rails_helper' # rubocop:disable Layout/EndOfLine

RSpec.describe Conversation, type: :model do
  it { should have_many(:messagems) }
  it { should validate_presence_of(:title) }
end
