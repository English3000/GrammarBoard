# I = preposition; M = number; R = adverb
Card.destroy_all

Card.create({ word: 'in', part_of_speech: 'prep',
              image: File.new('app/assets/images/in.png'),
              audio: File.new('app/assets/audios/in.m4a') })
Card.create({word: 'you', part_of_speech: 'pronoun', image: File.new('app/assets/images/you.png'), audio: File.new('app/assets/audios/you.m4a')})
Card.create({word: 'on', part_of_speech: 'prep', image: File.new('app/assets/images/on.png'), audio: File.new('app/assets/audios/on.m4a')})
Card.create({word: 'up', part_of_speech: 'adverb', image: File.new('app/assets/images/up.png'), audio: File.new('app/assets/audios/up.m4a')})

Card.create({word: 'one', part_of_speech: 'number', image: File.new('app/assets/images/one.png'), audio: File.new('app/assets/audios/one.m4a')})
Card.create({word: 'me', part_of_speech: 'pronoun', image: File.new('app/assets/images/me.png'), audio: File.new('app/assets/audios/me.m4a')})
Card.create({word: 'out', part_of_speech: 'prep', image: File.new('app/assets/images/out.png'), audio: File.new('app/assets/audios/out.m4a')})
Card.create({word: 'two', part_of_speech: 'number', image: File.new('app/assets/images/two.png'), audio: File.new('app/assets/audios/two.m4a')})

Card.create({word: 'man', part_of_speech: 'noun', image: File.new('app/assets/images/man.png'), audio: File.new('app/assets/audios/man.m4a')})
Card.create({word: 'woman', part_of_speech: 'noun', image: File.new('app/assets/images/woman.png'), audio: File.new('app/assets/audios/woman.m4a')})
Card.create({word: 'child', part_of_speech: 'noun', image: File.new('app/assets/images/child.png'), audio: File.new('app/assets/audios/child.m4a')})
Card.create({word: 'down', part_of_speech: 'adverb', image: File.new('app/assets/images/down.png'), audio: File.new('app/assets/audios/down.m4a')})
