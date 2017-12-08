import React from 'react';
import { Howl } from 'howler';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('text');
    if (document.getElementById(card).className.includes(event.target.className) && !event.target.hasChildNodes()) {
      // const match = document.getElementById(card);//& removeChild from WordGrid div
      event.target.appendChild(document.getElementById(card));
      // match.parent.removeChild(match);
    }
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
                  cardDiv.appendChild(wordDiv);
                  wordDiv = null;
                }
              });
            }
          });
        }, 750 * words.length);
      }
    }, 0);
  }

  switchSentence() {
    let words = Array.from(document.querySelector('div.grammar-board.flex.visible').children);
    let cards = Array.from(document.querySelectorAll('div.card'));
    words.forEach(el => {
      if (el.hasChildNodes()) { //issue is the S <div>
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

    let second = document.querySelectorAll('div.grammar-board.flex.hidden')[Math.floor(Math.random() * 2)];
    document.querySelector('div.grammar-board.flex.visible').className = 'grammar-board flex hidden';
    second.className = 'grammar-board flex visible';
  }

  sound(audio) {
    const pronunciation = new Howl({ src: [ audio ] });
    pronunciation.play();
  }

  render() {
    const {cards} = this.props;
    return (<div><div id='sentence-area' className='flex'>
      <div className='flex-middle absolute arrow'><div><p>DRAG HERE</p>
        <p><i className='fa fa-hand-pointer-o'></i> <i className='fa fa-arrow-right'></i></p></div></div>
      <div className='grammar-board flex visible'>
        <div className='article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div id={`${cards.helpers[3]}`} onClick={() => this.sound(cards.deck[cards.helpers[3]].audio)}
             className={`card no-margin helper-word ${cards.deck[cards.helpers[3]].part_of_speech}`}>
             <span>{cards.deck[cards.helpers[3]].word}</span></div>
      </div>

      <div className='grammar-board flex hidden'>
        <div className='article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='adj' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div id={`${cards.helpers[3]}`} onClick={() => this.sound(cards.deck[cards.helpers[3]].audio)}
             className={`card no-margin helper-word ${cards.deck[cards.helpers[3]].part_of_speech}`}>
             <span>{cards.deck[cards.helpers[3]].word}</span></div>
        <div className='adv' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>

      <div className='grammar-board flex hidden'>
        <div className='pron' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='conj' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>

      <div className='grammar-board flex hidden'>
        <div className='pron' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='prep' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>
      <div className='fa fa-refresh fa-refresh-styled fa-2x' onClick={this.switchSentence}></div>
    </div>
    </div>);
  }
}
