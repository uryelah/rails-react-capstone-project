require 'rails_helper'

RSpec.describe Meeting, type: :model do
  it { should belong_to(:meet) }
  it { should validate_presence_of(:title) }
end
