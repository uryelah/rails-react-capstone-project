class User < ApplicationRecord
  belongs_to :meeting, optional: true

  has_secure_password

  has_many :meets, foreign_key: :created_by
  validates_presence_of :name, :email, :password_digest
end
