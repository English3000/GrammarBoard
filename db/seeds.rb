# I = preposition; M = number; R = adverb
Card.destroy_all

Card.create({ word: 'in', part_of_speech: 'prep',
              image: 'app/assets/images/in.png',
              audio: 'app/assets/audios/in.m4a' })
Card.create({word: 'you', part_of_speech: 'pronoun', image: 'app/assets/images/you.png', audio: 'app/assets/audios/you.m4a'})
Card.create({word: 'on', part_of_speech: 'prep', image: 'app/assets/images/on.png', audio: 'app/assets/audios/on.m4a'})
Card.create({word: 'up', part_of_speech: 'adverb', image: 'app/assets/images/up.png', audio: 'app/assets/audios/up.m4a'})

Card.create({word: 'one', part_of_speech: 'number', image: 'app/assets/images/one.png', audio: 'app/assets/audios/one.m4a'})
Card.create({word: 'me', part_of_speech: 'pronoun', image: 'app/assets/images/me.png', audio: 'app/assets/audios/me.m4a'})
Card.create({word: 'out', part_of_speech: 'prep', image: 'app/assets/images/out.png', audio: 'app/assets/audios/out.m4a'})
Card.create({word: 'two', part_of_speech: 'number', image: 'app/assets/images/two.png', audio: 'app/assets/audios/two.m4a'})

Card.create({word: 'man', part_of_speech: 'noun', image: 'app/assets/images/man.png', audio: 'app/assets/audios/man.m4a'})
Card.create({word: 'woman', part_of_speech: 'noun', image: 'app/assets/images/woman.png', audio: 'app/assets/audios/woman.m4a'})
Card.create({word: 'child', part_of_speech: 'noun', image: 'app/assets/images/child.png', audio: 'app/assets/audios/child.m4a'})
Card.create({word: 'down', part_of_speech: 'adverb', image: 'app/assets/images/down.png', audio: 'app/assets/audios/down.m4a'})
