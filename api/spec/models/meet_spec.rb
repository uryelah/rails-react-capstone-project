require 'rails_helper'

RSpec.describe Meet, type: :model do
  it { should have_many(:meetings).dependent(:destroy) }
  it { should have_many(:user_meets).dependent(:destroy) }
  it { should have_many(:users) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:frequency) }
  it { should validate_presence_of(:duration) }
  it { should validate_presence_of(:day) }
  it { should validate_presence_of(:max_members) }
  it { should validate_presence_of(:created_by) }
end
