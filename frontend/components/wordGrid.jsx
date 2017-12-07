import React from 'react';
import WordCard from './wordCard';

export default class WordGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.cards;
  }

  componentWillMount() {
    this.shuffle(this.props.cards.hand);
  }

  //from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    if (document.querySelector('div.grammar-board.flex.visible')) {
      let words = Array.from(document.querySelector('div.grammar-board.flex.visible').children);
      let cards = Array.from(document.querySelectorAll('div.card'));
      words.forEach(el => {
        if (el.hasChildNodes()) {
          let wordDiv = el.removeChild(el.children[0]);
          cards.forEach(cardDiv => {
            if (!cardDiv.hasChildNodes() && wordDiv !== null) {
              cardDiv.appendChild(wordDiv);
              wordDiv = null;
            }
          });
        }
      });
    }
    // console.log('shuffling');
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * array.length);
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ hand: array });
    //should check if sufficient parts of speech for GrammarBoard
  }

  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('text');
    if (!event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById(card));
    }
  }

  render() {
    let {cards} = this.props;

    return (<div id='word-grid' className='flex'>
      <div>
        <div className='flex'>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[0]} card={cards.deck[cards.hand[0]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[1]} card={cards.deck[cards.hand[1]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[2]} card={cards.deck[cards.hand[2]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[3]} card={cards.deck[cards.hand[3]]}/></div>
        </div>

        <div className='flex'>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[4]} card={cards.deck[cards.hand[4]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[5]} card={cards.deck[cards.hand[5]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[6]} card={cards.deck[cards.hand[6]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[7]} card={cards.deck[cards.hand[7]]}/></div>
        </div>

        <div className='flex'>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[8]} card={cards.deck[cards.hand[8]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[9]} card={cards.deck[cards.hand[9]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[10]} card={cards.deck[cards.hand[10]]}/></div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <WordCard id={cards.hand[11]} card={cards.deck[cards.hand[11]]}/></div>
        </div>
      </div>

      <div className='fa fa-refresh fa-2x' onClick={() => this.shuffle(cards.hand)}></div>
    </div>);
  }
}
