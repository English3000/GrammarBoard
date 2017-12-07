grammar_words = []
cards = []
@cards.each do |card|
  cards.push(card)
end

json.deck do
  @cards.each do |card|
    if card.image.url != ""
      json.set! card.id do
        json.word card.word
        json.part_of_speech card.part_of_speech
        json.image asset_path(card.image.url(:original))
        json.audio asset_path(card.audio.url(:original))
      end
    else
      grammar_words.push(cards.shift) #'hard-coded' b/c have helpers at start of seeds
    end
  end
end

json.hand do
  json.array! cards.pluck(:id)
end

json.helper_words do
  grammar_words.each do |word|
    json.set! word.id do
      json.word word.word
      json.part_of_speech word.part_of_speech
      json.audio asset_path(word.audio.url(:original))
    end
  end
end

json.helpers do
  json.array! grammar_words.pluck(:id)
end
