class CreateMessagems < ActiveRecord::Migration[6.0]
  def change
    create_table :messagems do |t|
      t.string :text
      t.references :conversation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
