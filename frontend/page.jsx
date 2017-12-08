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
      <p id='instructions'>
        <i className='fa fa-mouse-pointer'></i> Flip,&nbsp;
        <i className='fa fa-hand-pointer-o'></i> Drag,&nbsp;
        <i className='fa fa-refresh'></i> Repeat!
      </p>
      <div className='flex-center'>
        <Sidebar cards={cards}/>
        <WordGrid cards={cards}/>
      </div>
      <SentenceArea cards={cards}/>
    </div> : <LoadingIcon/>);
  }
}
