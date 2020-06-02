class RemoveMeetingIdFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :meeting_id, :integer, null: false
  end
end
