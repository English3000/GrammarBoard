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
      <p>Click, Drag, & Repeat!</p>
      <div className='flex'>
        <Sidebar cards={cards}/>
        <WordGrid cards={cards}/>
      </div>
      <SentenceArea/>
    </div> : <LoadingIcon/>);
  }
}
