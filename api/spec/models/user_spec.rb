require 'rails_helper' # rubocop:disable Layout/EndOfLine

RSpec.describe User, type: :model do
  it { should have_many(:meets) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
end
