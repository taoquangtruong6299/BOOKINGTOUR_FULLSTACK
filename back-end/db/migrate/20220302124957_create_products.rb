class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.text :name
      t.integer :price
      t.text :desciption
      t.references :category, null: false, foreign_key: true
      t.text :location

      t.timestamps
    end
  end
end
