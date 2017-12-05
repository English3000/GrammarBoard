# class AddAttachmentAudioToCards < ActiveRecord::Migration[5.1]
#   def self.up
#     remove_column :cards, :audio
#     change_table :cards do |t|
#       t.attachment :audio
#     end
#   end
#
#   def self.down
#     remove_attachment :cards, :audio
#   end
# end
