class RemoveMeetingFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :meeting, optional: true, foreign_key: true
  end
end
