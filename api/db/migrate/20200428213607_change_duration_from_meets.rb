class ChangeDurationFromMeets < ActiveRecord::Migration[6.0]
  def change
    change_column :meets, :duration, :float
  end
end
