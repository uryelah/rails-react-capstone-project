class AddCreatedByToMeets < ActiveRecord::Migration[6.0]
  def change
    add_column :meets, :created_by, :string
  end
end
