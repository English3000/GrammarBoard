import React from 'react';
import LoadingIcon from './loadingIcon';
import Sidebar from './components/sidebar';
import WordGrid from './components/wordGrid';
import SentenceArea from './components/sentenceArea';

export default class GrammarBoard extends React.Component {
  componentWillMount() {
    this.props.fetchCards();
  }

  render() {
    const {cards} = this.props;

    return (this.props.pageLoading.status ? <LoadingIcon/> : Object.keys(cards).length > 0 ? <div>
      <div className='preload hidden'></div>
      <div className='modal flex-center flex-middle' onClick={() => {document.querySelector('.modal').className = 'hidden';}}>
        <div id='description'>
          <h2><i className='fa fa-square green'></i>&nbsp;<i className='fa fa-square yellow'></i>&nbsp;<i className='fa fa-square red'></i>&emsp;GrammarBoard</h2>
          <ul>
            <li>Associate images with sounds and words!</li>
            <li><em>Learn words' parts of speech!</em></li>
            <li>Practice grammar and sentence-building!</li>
          </ul>
          <img src={cards.deck[cards.helpers[4]].image} width='300' height='400' alt='gif'/>
        </div>
      </div>
      <p id='instructions'>
        FLIP <i className='fa fa-mouse-pointer'></i><i className='fa fa-picture-o'></i> image,
        DRAG word <i className='fa fa-hand-paper-o'></i><i className='fa fa-font'></i>&nbsp;&nbsp;
        <i className='fa fa-arrow-right'></i><i className='fa fa-square'></i> TO matching color,&nbsp;
        <i className='fa fa-refresh'></i> REPEAT!
      </p>
      <div className='flex-center'>
        <Sidebar cards={cards}/>
        <WordGrid cards={cards}/>
      </div>
      <SentenceArea cards={cards}/>
    </div> : <LoadingIcon/>);
  }
}
