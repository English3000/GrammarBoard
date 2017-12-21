class Card < ApplicationRecord
  has_attached_file :image, default_url: ''
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :audio, default_url: ''
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/
end
