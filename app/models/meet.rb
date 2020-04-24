class Meet < ApplicationRecord
    has_many :meetings, dependent: :destroy

    validates_presence_of :title, :description
end
