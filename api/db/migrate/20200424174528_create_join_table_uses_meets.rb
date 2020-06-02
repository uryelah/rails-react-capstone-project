class CreateJoinTableUsesMeets < ActiveRecord::Migration[6.0]
  def change
    create_table :user_meets do |t|
      t.references :user, null: false, foreign_key: true
      t.references :meet, null: false, foreign_key: true
    end
  end
end
