class User < ApplicationRecord
  has_secure_password

  has_many :user_meets, dependent: :destroy
  has_many :user_meetings, dependent: :destroy
  has_many :meetings, through: :user_meetings
  has_many :meets, through: :user_meets
  has_many :created_meets, foreign_key: :created_by, class_name: 'Meet'
  validates_presence_of :name, :email, :password_digest, :picture
end
