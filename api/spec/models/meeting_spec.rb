require 'rails_helper' # rubocop:disable Layout/EndOfLine

RSpec.describe Meeting, type: :model do
  it { should belong_to(:meet) }
  it { should validate_presence_of(:title) }
end
