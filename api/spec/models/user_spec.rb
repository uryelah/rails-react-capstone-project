require 'rails_helper' # rubocop:disable Layout/EndOfLine

RSpec.describe User, type: :model do
  it { should have_many(:meets) }
  it { should have_many(:user_meets) }
  it { should have_many(:user_meetings) }
  it { should have_many(:meetings) }
  it { should have_many(:meets) }
  it { should have_many(:created_meets) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:picture) }
end
