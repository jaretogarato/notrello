class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.text :details
      t.string :status
      t.integer :priority
      t.string :color

      t.timestamps
    end
  end
end
