class CreateMeetings < ActiveRecord::Migration[6.0]
  def change
    create_table :meetings do |t|
      t.string :title
      t.text :description
      t.datetime :date
      t.text :confirmed_members
      t.references :meet, null: false, foreign_key: true
      t.string :link

      t.timestamps
    end
  end
end
