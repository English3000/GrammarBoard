class ChangeCards < ActiveRecord::Migration[5.1]
  def change
    drop_table :cards
    create_table :cards do |t|
      t.string :word, null: false
      t.string :part_of_speech, null: false
      t.string :image
      t.string :audio, null: false

      t.timestamps
    end
    add_index :cards, :word
  end
end
