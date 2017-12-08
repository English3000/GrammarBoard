# [GrammarBoard](https://grammar-board.herokuapp.com)

__IS__ a tool for English language learners built with React/Redux, Rails, and plain JavaScript. Just like toddlers put colored blocks into slots of the proper shape, GrammarBoard users learn both vocabulary and grammar in a similarly interactive manner--all without needing to know a word!

### Features

* cards with an image-side, a text-side, and audio
* drag & drop
* auto-triggering of audio
* "pop-back" functionality
* shuffling

## Gameplay

![grammar-board](https://github.com/English3000/GrammarBoard/blob/master/grammar-board.png)

There is a grid of cards. Each card has two sides: an image and a word. Cards start on the image-side. To see the word, click the card--that triggers an audio recording of the word, then you'll see it.

In addition, the text-side has a background color to represent the word's part of speech. The gameplay is to drag the word into a sentence area. The sentence area is made up of `div`s with different background colors, representing different sentence structures. Just like putting blocks into pegholes of the proper shape, the user drags words into `div`s of a matching color.

If the colors don't match, no drop is made; the word goes back to its prior location. If the colors match, the word is dropped into the sentence area. When all `div`s in the sentence area are filled, the audio of each word is triggered in order--a read-aloud of the sentence. Then, the words revert back to their prior locations in the grid.

![gameplay](https://github.com/English3000/GrammarBoard/blob/master/gameplay.png)

### Code for Auto-triggering Sentence && Popping Back Words
```javascript

setTimeout(() => {
  if (Array.from(document.querySelector('div.grammar-board.flex.visible').children).every(el => el.hasChildNodes())) {
    let words = Array.from(document.querySelector('div.grammar-board.flex.visible').children);
    for (let i = 0; i < words.length; i++) {
      setTimeout(() => words[i].children[0].click(), 750 * i);
    }
    setTimeout(() => {
      let cards = Array.from(document.querySelectorAll('div.card'));
      words.forEach(el => {
        if (!el.className.includes('suffix')) {
          let wordDiv = el.removeChild(el.children[0]);
          cards.forEach(cardDiv => {
            if (!cardDiv.hasChildNodes() && wordDiv !== null) {
              if (cardDiv.parentElement.id) {
                if (wordDiv.className.includes('helper-word')) {
                  cardDiv.appendChild(wordDiv);
                  wordDiv = null;
                } else {
                  return;
                }
              } else {
                cardDiv.appendChild(wordDiv);
                wordDiv = null;
              }
            }
          });
        }
      });
    }, 750 * words.length);
  }
}, 0);

```

In addition, users can deal themselves a new hand of cards by clicking a button. Also, users can change to a different sentence structure by clicking a different icon.

## Methodology & Seed Data

This game is design for very low-level (Beginner) English language learners. Words are selected from the [Corpus of Contemporary American English](https://www.wordfrequency.info/free.asp?s=y), and ordered by _difficulty of meaning_. For example, a picture of a hand conveys a hand--that's a low difficulty of meaning from a teacher's standpoint. In contrast, grammatical words like __the__ cannot easily be visualized, giving them harder difficulties of meaning.

Cards begin on the image-side so that users can recognize them. Clicking them triggers audio for the word the image represents--a way for the user to associate the sound with the image. Then the card flips and they see the word, so they can associate both the sound and image with the word. An additional click would replay the audio and flip the card back to the image-side again.

The background-color of the text-side is a hack to teach grammar without the need for complex algorithms. And the sentence audio allows users to hear different words all put together to convey meaning. Even if they don't understand what is being said, they can refer back to the image-side to get some sense. In addition, they get a feel for grammar in the way toddlers can understand shapes and colors better by putting blocks into corresponding pegholes.

## Timeline

I had already conceived of GrammarBoard as a tool for teaching students of English. Now with sufficient development experience, I decided to build it on a more accessible medium.

Including debugging, I built this game in under 20 hours, working on it part-time over one week. I already had the seed data and images prepared, so I only had to prepare audio files. Most of my debugging occurred at the beginning of the project, troubleshooting AWS to get my assets appearing.

My general pattern of development was to complete one component, build out the next, and then refactor so that the right words appeared in the right places. My strategy was to create a new array of word ids for grammatical/syntactical words and filter them out from the main array of ids.

My backend is light, with only one controller, one action, and one view (and thus only one AJAX request with a loading icon). In addition, images are preloaded using a hidden `div` with all of them as backgrounds.

My other significant portion of debugging involved preventing cards from mutating or being lost. First, I made cards pop back whenever the WordGrid or SentenceArea is shuffled (which prevents mutations). Next, I needed to implement conditional logic so that cards would pop back to the right spots (as opposed to a non-grammatical word being popped to the Sidebar area). Last, during user testing, I discovered a bug where a text-side card could be dragged into an image-side card's spot (which I fixed with a little more conditional logic).

### Additional Technologies Used

* _[howler.js](https://howlerjs.com)_ for audio
* AWS/Paperclip for asset storage
