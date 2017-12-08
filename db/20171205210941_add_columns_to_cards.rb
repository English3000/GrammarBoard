class AddColumnsToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :image, :string
    add_column :cards, :audio, :string
  end
end
