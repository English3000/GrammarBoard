json.hand do
  json.array! @cards.pluck(:id)
end

json.deck do
  @cards.each do |card|
    json.set! card.id do
      json.word card.word
      json.part_of_speech card.part_of_speech
      json.image asset_path(card.image.url(:original))#card.image#
      json.audio asset_path(card.audio.url(:original))#card.audio#
    end
  end
end
