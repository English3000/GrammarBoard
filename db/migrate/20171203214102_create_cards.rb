class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :word, null: false
      t.string :part_of_speech, null: false
      #--need some clarification re: db setup
      # t.string :image, null: false
      # :audio

      t.timestamps
    end
    add_index :cards, :word
  end
end
