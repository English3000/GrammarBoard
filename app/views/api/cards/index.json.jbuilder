json.hand do
  json.array! @cards.pluck(:id)
end

json.deck do
  @cards.each do |card|
    # image_src = `app/assets/images/#{card.word}.png`
    # audio_src = `app/assets/audio/#{card.word}.png`
    json.set! card.id do
      json.word card.word
      json.part_of_speech card.part_of_speech
      # json.image asset_path(img_src)
      # json.audio asset_path(audio_src)
    end
  end
end
