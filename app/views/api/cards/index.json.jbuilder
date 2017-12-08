grammar_words = []

json.deck do
  @cards.each do |card|
    json.set! card.id do
      json.word card.word
      json.part_of_speech card.part_of_speech
      json.image asset_path(card.image.url(:original))
      json.audio asset_path(card.audio.url(:original))
    end
    if card.image.url == ""
      grammar_words.push(card) #'hard-coded' b/c have helpers at start of seeds
    end
  end
end

cards = @cards - grammar_words

json.hand do
  json.array! cards.pluck(:id)
end

json.helpers do
  json.array! grammar_words.pluck(:id)
end
