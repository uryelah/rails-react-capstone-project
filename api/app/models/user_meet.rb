class UserMeet < ApplicationRecord
    belongs_to :user
    belongs_to :meet

    validate :is_uniq?

    private

    def is_uniq?
      if UserMeet.where(user_id: user_id, meet_id: meet_id).count.positive?
        errors.add(:repeated_record, 'The row should not be repeated')
      end
    end
end
