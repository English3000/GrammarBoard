import React from 'react';
import WordCard from './wordCard';
import LoadingIcon from '../loadingIcon';

export default class WordGrid extends React.Component {
  componentWillMount() {
    this.props.fetchCards();
  }

  //from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * array.length);
      [array[i], array[j]] = [array[j], array[i]];
    }
    //should check if sufficient parts of speech for GrammarBoard
  }

  render() {
    let {cards} = this.props;

    if (Object.keys(cards).length > 0) {
      this.shuffle(cards.hand);
    }

    return (this.props.pageLoading.status ? <LoadingIcon/> : Object.keys(cards).length > 0 ? <div id='word-grid'>
      <div className='flex'>
        <div className='card'><WordCard id={cards.hand[0]} card={cards.deck[cards.hand[0]]}/></div>
        <div className='card'><WordCard id={cards.hand[1]} card={cards.deck[cards.hand[1]]}/></div>
        <div className='card'><WordCard id={cards.hand[2]} card={cards.deck[cards.hand[2]]}/></div>
        <div className='card'><WordCard id={cards.hand[3]} card={cards.deck[cards.hand[3]]}/></div>
      </div>

      <div className='flex'>
        <div className='card'><WordCard id={cards.hand[4]} card={cards.deck[cards.hand[4]]}/></div>
        <div className='card'><WordCard id={cards.hand[5]} card={cards.deck[cards.hand[5]]}/></div>
        <div className='card'><WordCard id={cards.hand[6]} card={cards.deck[cards.hand[6]]}/></div>
        <div className='card'><WordCard id={cards.hand[7]} card={cards.deck[cards.hand[7]]}/></div>
      </div>

      <div className='flex'>
        <div className='card'><WordCard id={cards.hand[8]} card={cards.deck[cards.hand[8]]}/></div>
        <div className='card'><WordCard id={cards.hand[9]} card={cards.deck[cards.hand[9]]}/></div>
        <div className='card'><WordCard id={cards.hand[10]} card={cards.deck[cards.hand[10]]}/></div>
        <div className='card'><WordCard id={cards.hand[11]} card={cards.deck[cards.hand[11]]}/></div>
      </div>
    </div> : <LoadingIcon/>);
  }
}
