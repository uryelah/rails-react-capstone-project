require 'rails_helper' # rubocop:disable Layout/EndOfLine

RSpec.describe Meeting, type: :model do
  it { should belong_to(:meet) }
  it { should have_many(:user_meetings) }
  it { should have_many(:users) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:date) }
  it { should validate_presence_of(:meet_id) }
  it { should validate_presence_of(:link) }
end
