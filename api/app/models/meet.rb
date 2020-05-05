class Meet < ApplicationRecord
  has_many :meetings, dependent: :destroy

  has_many :user_meets, dependent: :destroy
  has_many :users, through: :user_meets
  validates_presence_of :title, :description
end
