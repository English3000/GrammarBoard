# GrammarBoard

__IS__ a tool for English language learners. Just like toddlers put colored blocks into slots of the proper shape, GrammarBoard users learn both vocabulary and grammar in a similarly interactive manner--all without needing to know a word!

## Gameplay

There is a grid of cards. Each card has two sides: an image and a word. Cards start on the image-side. To see the word, click the card--that triggers an audio recording of the word, then you'll see it.

In addition, the text-side has a background color to represent the word's part of speech. The gameplay is to drag the word into a sentence area. The sentence area is made up of `div`s with different background colors, representing different sentence structures. Just like putting blocks into pegholes of the proper shape, the user drags words into `div`s of a matching color.

If the colors don't match, no drop is made; the word goes back to its prior location. If the colors match, the word is dropped into the sentence area. When all `div`s in the sentence area are filled, the audio of each word is triggered in order--a read-aloud of the sentence. Then, the words revert back to their prior locations in the grid.

In addition, users can deal themselves a new hand of cards by clicking a button. Also, users can change to a different sentence structure by clicking a different icon.

## Methodology & Seed Data

This game is design for very low-level (Beginner) English language learners. Words are selected from the [Corpus of Contemporary American English](https://www.wordfrequency.info/free.asp?s=y), and ordered by _difficulty of meaning_. For example, a picture of a hand conveys a hand--that's a low difficulty of meaning from a teacher's standpoint. In contrast, grammatical words like __the__ cannot easily be visualized, giving them harder difficulties of meaning.

Cards begin on the image-side so that users can recognize them. Clicking them triggers audio for the word the image represents--a way for the user to associate the sound with the image. Then the card flips and they see the word, so they can associate both the sound and image with the word. An additional click would replay the audio and flip the card back to the image-side again.

The background-color of the text-side is a hack to teach grammar without the need for complex algorithms. And the sentence audio allows users to hear different words all put together to convey meaning. Even if they don't understand what is being said, they can refer back to the image-side to get some sense. In addition, they get a feel for grammar in the way toddlers can understand shapes and colors better by putting blocks into corresponding pegholes.

## Layout

### card component
![card](https://github.com/English3000/GrammarBoard/blob/master/word.png)

### board component
![board](https://github.com/English3000/GrammarBoard/blob/master/board.png)

### extra features (if time)
![extras](https://github.com/English3000/GrammarBoard/blob/master/extras.png)

## Execution:
#### 0. seed database
  * words, their parts of speech, images, audio [___PARTIALLY completed___]
  * AJAX call & redux cycle to fetch word objects [__COMPLETED__]

#### 1. component skeletons & basic logic [__COMPLETED__]
  * skeleton WordGrid component (with basic CSS)
  * skeleton Card component (with basic CSS)
  * skeleton SentenceArea component (with basic CSS)
  * logic for shuffling deck into random order
  * logic for dropping cards into the sentence area (or rejecting drops)

#### 2. basic functionality
  * making Cards draggable & droppable [__COMPLETED__]
  * making Cards trigger audio & flip on click
  * making SentenceArea trigger audio of each Card in order if all its `div`s are filled

#### 3. higher functionality
  * dealing a new hand of cards [__COMPLETED__]
  * changing to a different grammar board (sequence of `div`s) in the SentenceArea
  * creating a sidebar of non-image helper words (e.g. _the_, _to_) with __basic functionality__

#### 4. polish
  * appealing CSS for all components
  * engaging effects on interaction with components
  * clear UI for user to play game _(maybe even a demo of clicking & dragging a card if time)_

_Libraries: [howler.js](https://github.com/goldfire/howler.js#documentation) for audio; HTML5 for drag & drop; vanilla JS for functionality_
