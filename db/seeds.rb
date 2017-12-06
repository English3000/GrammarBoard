# I = preposition; M = number; R = adverb
Card.destroy_all

Card.create({ word: 'in', part_of_speech: 'prep',
              image: File.new('app/assets/images/in.png'),
              audio: File.new('app/assets/audios/in.m4a' )})
Card.create({ word: 'you', part_of_speech: 'pronoun',
              image: File.new('app/assets/images/you.png'),
              audio: File.new('app/assets/audios/you.m4a' )})
Card.create({ word: 'on', part_of_speech: 'prep',
              image: File.new('app/assets/images/on.png'),
              audio: File.new('app/assets/audios/on.m4a' )})
Card.create({ word: 'up', part_of_speech: 'adverb',
              image: File.new('app/assets/images/up.png'),
              audio: File.new('app/assets/audios/up.m4a' )})

Card.create({ word: 'one', part_of_speech: 'number',
              image: File.new('app/assets/images/one.png'),
              audio: File.new('app/assets/audios/one.m4a' )})
Card.create({ word: 'me', part_of_speech: 'pronoun',
              image: File.new('app/assets/images/me.png'),
              audio: File.new('app/assets/audios/me.m4a' )})
Card.create({ word: 'out', part_of_speech: 'prep',
              image: File.new('app/assets/images/out.png'),
              audio: File.new('app/assets/audios/out.m4a' )})
Card.create({ word: 'two', part_of_speech: 'number',
              image: File.new('app/assets/images/two.png'),
              audio: File.new('app/assets/audios/two.m4a' )})

Card.create({ word: 'man', part_of_speech: 'noun',
              image: File.new('app/assets/images/man.png'),
              audio: File.new('app/assets/audios/man.m4a' )})
Card.create({ word: 'woman', part_of_speech: 'noun',
              image: File.new('app/assets/images/woman.png'),
              audio: File.new('app/assets/audios/woman.m4a' )})
Card.create({ word: 'child', part_of_speech: 'noun',
              image: File.new('app/assets/images/child.png'),
              audio: File.new('app/assets/audios/child.m4a' )})
Card.create({ word: 'down', part_of_speech: 'adverb',
              image: File.new('app/assets/images/down.png'),
              audio: File.new('app/assets/audios/down.m4a' )})

Card.create({ word: 'write', part_of_speech: 'verb',
              image: File.new('app/assets/images/write.png'),
              audio: File.new('app/assets/audios/write.m4a')})
Card.create({ word: 'three', part_of_speech: 'number',
              image: File.new('app/assets/images/three.png'),
              audio: File.new('app/assets/audios/three.m4a')})
Card.create({ word: 'four', part_of_speech: 'number',
              image: File.new('app/assets/images/four.png'),
              audio: File.new('app/assets/audios/four.m4a')})
Card.create({ word: 'five', part_of_speech: 'number',
              image: File.new('app/assets/images/five.png'),
              audio: File.new('app/assets/audios/five.m4a')})

Card.create({ word: 'hand', part_of_speech: 'noun',
              image: File.new('app/assets/images/hand.png'),
              audio: File.new('app/assets/audios/hand.m4a')})
Card.create({ word: 'head', part_of_speech: 'noun',
              image: File.new('app/assets/images/head.png'),
              audio: File.new('app/assets/audios/head.m4a')})
Card.create({ word: 'night', part_of_speech: 'noun',
              image: File.new('app/assets/images/night.png'),
              audio: File.new('app/assets/audios/night.m4a')})
Card.create({ word: 'day', part_of_speech: 'noun',
              image: File.new('app/assets/images/day.png'),
              audio: File.new('app/assets/audios/day.m4a')})

Card.create({ word: 'school', part_of_speech: 'noun',
              image: File.new('app/assets/images/school.png'),
              audio: File.new('app/assets/audios/school.m4a')})
Card.create({ word: 'house', part_of_speech: 'noun',
              image: File.new('app/assets/images/house.png'),
              audio: File.new('app/assets/audios/house.m4a')})
Card.create({ word: 'car', part_of_speech: 'noun',
              image: File.new('app/assets/images/car.png'),
              audio: File.new('app/assets/audios/car.m4a')})
Card.create({ word: 'big', part_of_speech: 'adj',
              image: File.new('app/assets/images/big.png'),
              audio: File.new('app/assets/audios/big.m4a')})
