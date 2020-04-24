class CreateMeets < ActiveRecord::Migration[6.0]
  def change
    create_table :meets do |t|
      t.string :title
      t.text :description
      t.string :frequency
      t.float :duration
      t.string :day
      t.integer :members
      t.integer :max_members

      t.timestamps
    end
  end
end
