# class AddAttachmentImageToCards < ActiveRecord::Migration[5.1]
#   def self.up
#     remove_column :cards, :image
#     change_table :cards do |t|
#       t.attachment :image
#     end
#   end
#
#   def self.down
#     remove_attachment :cards, :image
#   end
# end
